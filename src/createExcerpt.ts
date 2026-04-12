import { normalizeWhitespace } from "./normalizeWhitespace"

export function createExcerpt(text: string, maxLength: number): string {
  if (maxLength === 0) return ""
  const cleaned = normalizeWhitespace(text)
  if (!cleaned) return ""
  if (cleaned.length <= maxLength) return cleaned
  const trimmed = cleaned.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(" ")
  if (lastSpace === -1) return cleaned.slice(0, cleaned.indexOf(" ") === -1 ? cleaned.length : cleaned.indexOf(" ")) + "…"
  return trimmed.slice(0, lastSpace) + "…"
}
