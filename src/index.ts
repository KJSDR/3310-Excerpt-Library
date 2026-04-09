export function normalizeWhitespace(text: string): string {
    if (!text.trim()) return ""
    return text.trim().replace(/\s+/g, " ")
  }

export function truncateByWords(text: string, maxWords: number): string {
    if (!text.trim()) return ""
    if (maxWords === 0) return ""
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) return text.trim()
    return words.slice(0, maxWords).join(" ") + "…"
  }

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