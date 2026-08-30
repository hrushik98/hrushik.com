import type { ReactNode } from "react"

export function Section({
  title,
  id,
  children,
}: {
  title: string
  id?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-14">
      <h2 className="mb-3 text-[15px] font-semibold text-neutral-900">{title}</h2>
      {children}
    </section>
  )
}
