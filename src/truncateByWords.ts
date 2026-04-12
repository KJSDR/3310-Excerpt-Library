export function truncateByWords(text: string, maxWords: number): string {
  if (!text.trim()) return ""
  if (maxWords === 0) return ""
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text.trim()
  return words.slice(0, maxWords).join(" ") + "…"
}
