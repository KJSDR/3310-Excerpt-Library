import { normalizeWhitespace } from "./normalizeWhitespace";
/**
 * Returns a readable summary trimmed to the last complete word within `maxLength`
 * characters. Normalizes whitespace internally before truncating.
 * @param text - The input string to excerpt
 * @param maxLength - Maximum character length of the result (before the `"…"`).
 *   `0` returns `""`.
 * @returns The cleaned text if it fits within `maxLength`, otherwise the text cut
 *   at the last word boundary within `maxLength`, followed by `"…"`. If
 *   `maxLength` is shorter than the first word, that word is returned with `"…"`
 *   (result may exceed `maxLength`). Returns `""` for empty or whitespace-only input.
 * @example
 * createExcerpt("This is a long post body that keeps going.", 30) // "This is a long post body that…"
 * createExcerpt("Hello world", 100) // "Hello world"
 * createExcerpt("Hello world", 0) // ""
 */
export function createExcerpt(text, maxLength) {
    if (maxLength === 0)
        return "";
    const cleaned = normalizeWhitespace(text);
    if (!cleaned)
        return "";
    if (cleaned.length <= maxLength)
        return cleaned;
    const trimmed = cleaned.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    if (lastSpace === -1)
        return cleaned.slice(0, cleaned.indexOf(" ") === -1 ? cleaned.length : cleaned.indexOf(" ")) + "…";
    return trimmed.slice(0, lastSpace) + "…";
}
