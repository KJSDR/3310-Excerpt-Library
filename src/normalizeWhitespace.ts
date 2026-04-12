export function normalizeWhitespace(text: string): string {
  if (!text.trim()) return ""
  return text.trim().replace(/\s+/g, " ")
}
