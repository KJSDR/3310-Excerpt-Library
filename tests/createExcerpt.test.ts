import { describe, it, expect } from "vitest"
import { createExcerpt } from "../src/index"

describe("createExcerpt", () => {
  it("truncates to the last complete word within maxLength", () => {
    expect(createExcerpt("This is a long post body that keeps going.", 30)).toBe("This is a long post body that…")
  })

  it("returns text as-is if within maxLength", () => {
    expect(createExcerpt("Hello world", 20)).toBe("Hello world")
  })

  it("returns empty string for empty input", () => {
    expect(createExcerpt("", 30)).toBe("")
  })

  it("returns empty string when maxLength is 0", () => {
    expect(createExcerpt("Hello world", 0)).toBe("")
  })

  it("handles first word longer than maxLength", () => {
    expect(createExcerpt("Superlongword hello", 3)).toBe("Superlongword…")
  })

  it("normalizes whitespace internally", () => {
    expect(createExcerpt("  Hello   world  ", 20)).toBe("Hello world")
  })
})