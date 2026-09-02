import { notFound, redirect } from "next/navigation"
import { parseArxivId } from "@/lib/arxiv"

type Params = { id: string[] }

// Lets a swapped `arxiv.org/pdf/<id>` link land on the reader too.
export default async function PdfRedirect({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const parsed = parseArxivId(id.join("/"))
  if (!parsed) notFound()
  const suffix = parsed.version ? `v${parsed.version}` : ""
  redirect(`/abs/${parsed.id}${suffix}`)
}
