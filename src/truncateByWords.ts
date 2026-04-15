/**
 * Shortens text to a maximum number of words. Appends `"…"` if truncated.
 * @param text - The input string to truncate
 * @param maxWords - Maximum number of words to keep. `0` returns `""`.
 * @returns The original text (trimmed) if it fits within `maxWords`, otherwise
 *   the first `maxWords` words followed by `"…"`. Returns `""` for empty or
 *   whitespace-only input.
 * @example
 * truncateByWords("The quick brown fox jumped over the lazy dog", 5) // "The quick brown fox jumped…"
 * truncateByWords("Hello world", 10) // "Hello world"
 * truncateByWords("Hello world", 0) // ""
 */
export function truncateByWords(text: string, maxWords: number): string {
  if (!text.trim()) return ""
  if (maxWords === 0) return ""
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text.trim()
  return words.slice(0, maxWords).join(" ") + "…"
}
