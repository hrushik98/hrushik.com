import { Section } from "./section"

export function About() {
  return (
    <Section title="about">
      <div className="space-y-4 text-neutral-700">
        <p>
          tldr; i&apos;m the person who takes a model from &ldquo;works in a notebook&rdquo; to
          &ldquo;serves 20k+ requests a day without falling over&rdquo;. at techolution i fine-tune
          and serve models like llama-3, deepseek and qwen-vl (~35% accuracy gains, ~40% lower
          latency), and build speech pipelines that go from mic to voice in under 2 seconds.
        </p>
        <p>
          before this i shipped vision-llm content moderation at multeway and an adaptive-rag llama-2
          tutor at eklavya. i mostly live in python, fastapi, pytorch, and whatever serving stack
          keeps p99 latency down. i also build small things after hours - terminal apps, cli helpers,
          on-device asr for telugu.
        </p>
        <p>
          when i&apos;m not shipping models i&apos;m writing about the build, grinding leetcode, or
          taking something apart to see how it works. open to hard ai problems, collaborations, and
          conversations - i reply unreasonably fast. grab my{" "}
          <a className="link" href="/Hrushik_resume.pdf">
            resume
          </a>{" "}
          or say hi at{" "}
          <a className="link" href="mailto:phanihrushik.10@gmail.com">
            phanihrushik.10@gmail.com
          </a>
          .
        </p>
      </div>
    </Section>
  )
}
