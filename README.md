# postkit-excerpt

**Purpose:** Generates short summaries from post content.

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
code
```

---

## Edge Cases

- ...
- ...
- ...

---

## Design Notes

- explain key decisions