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
export declare function createExcerpt(text: string, maxLength: number): string;
