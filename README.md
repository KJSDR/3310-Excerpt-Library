# postkit-excerpt

**Purpose:** Generates short summaries from post content. Used to create excerpts for post cards, previews, and search results.

---

## Exports

### `createExcerpt`
- **Input:** `text: string`, `maxLength: number`
- **Output:** `string`
- **Description:** Returns a readable summary trimmed to the last complete word within `maxLength` characters. Appends `"…"` if truncated.

### `truncateByWords`
- **Input:** `text: string`, `maxWords: number`
- **Output:** `string`
- **Description:** Shortens text to a maximum number of words. Appends `"…"` if truncated.

### `normalizeWhitespace`
- **Input:** `text: string`
- **Output:** `string`
- **Description:** Collapses extra spaces, tabs, and line breaks into single spaces and trims the result.

---

## Example Usage

```ts
import { createExcerpt, truncateByWords, normalizeWhitespace } from 'postkit-excerpt'

createExcerpt('This is a long post body that keeps going.', 30)
// → "This is a long post body that…"

truncateByWords('The quick brown fox jumped over the lazy dog', 5)
// → "The quick brown fox jumped…"

normalizeWhitespace('  Hello   world\n\nfoo  ')
// → "Hello world foo"
```


## Edge Cases

- Empty string → `""`
- `maxLength` or `maxWords` of `0` → `""`
- Text already within limit → returned as-is, no `"…"` appended
- Whitespace-only input → `""`
- `maxLength` smaller than the first word → returns that word + `"…"` 🤔 If the word is longer than max length adding the ellipes will only make the word longer! That means that this could return something longer than max length. Which might be okay since we wouldn;t be truncating a word, if this is case you should make that clear in your docs! 

---

## Design Notes

- `createExcerpt` calls `normalizeWhitespace` internally so callers don't need to clean input first.
- `createExcerpt` and `truncateByWords` are separate because they solve different layout problems — character limits for fixed-width containers, word limits for more natural reading flow.
- Truncation always breaks at word boundaries. Cutting mid-word looks like a bug.
