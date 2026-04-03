# postkit-excerpt
 
Generates short summaries from post content for use in the PostKit ecosystem.

## Installation
```bash
npm install postkit-excerpt
```

## Exports

### createExcerpt
Returns a readable summary trimmed to the last complete word within `maxLength` characters. Appends `"…"` if truncated.

### truncateByWords
Shortens text to a maximum number of words. Appends `"…"` if truncated.

### normalizeWhitespace
Collapses extra spaces, tabs, and line breaks into single spaces and trims the result.

## Edge Cases

