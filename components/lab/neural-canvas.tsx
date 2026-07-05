"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
}

const LINK_DIST = 150
const MOUSE_DIST = 200

/** Drifting neural-network particle field. Renders behind the hero. */
export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    const seed = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(90, Math.max(34, (width * height) / 22000)))
      const colors = ["#ffd23f", "#ff90e8", "#3ddc97", "#62c4ff", "#ff8a3d", "#b79cff"]
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 2 + Math.random() * 2.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        // gentle drift toward the pointer
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const md = Math.hypot(dx, dy)
        if (md < MOUSE_DIST && md > 0.001) {
          n.x += (dx / md) * 0.22
          n.y += (dy / md) * 0.22
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.14
            ctx.strokeStyle = `rgba(20, 20, 20, ${alpha})`
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = n.color
        ctx.strokeStyle = "#141414"
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
    }

    const loop = () => {
      step()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduced) raf = requestAnimationFrame(loop)
    }
    const onResize = () => {
      seed()
      if (reduced) step()
    }

    seed()
    if (reduced) {
      step() // single static frame
    } else {
      raf = requestAnimationFrame(loop)
      window.addEventListener("pointermove", onMove, { passive: true })
      window.addEventListener("pointerleave", onLeave)
      document.addEventListener("visibilitychange", onVisibility)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,black_35%,transparent_100%)]"
    />
  )
}
