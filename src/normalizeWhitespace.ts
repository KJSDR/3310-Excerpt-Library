/**
 * Collapses extra spaces, tabs, and line breaks into single spaces and trims the result.
 * @param text - The input string to normalize
 * @returns A trimmed string with all whitespace runs collapsed to a single space,
 *   or `""` if the input is empty or whitespace-only
 * @example
 * normalizeWhitespace("  Hello   world\n\nfoo  ") // "Hello world foo"
 * normalizeWhitespace("   ") // ""
 */
export function normalizeWhitespace(text: string): string {
  if (!text.trim()) return ""
  return text.trim().replace(/\s+/g, " ")
}
