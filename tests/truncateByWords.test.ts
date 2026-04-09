import { describe, it, expect } from "vitest"
import { truncateByWords } from "../src/index"

describe("truncateByWords", () => {
  it("truncates to the correct number of words", () => {
    expect(truncateByWords("the quick brown fox jumped", 3)).toBe("the quick brown…")
  })

  it("returns text as-is if within word limit", () => {
    expect(truncateByWords("hello world", 5)).toBe("hello world")
  })

  it("returns empty string for empty input", () => {
    expect(truncateByWords("", 5)).toBe("")
  })

  it("returns empty string when maxWords is 0", () => {
    expect(truncateByWords("hello world", 0)).toBe("")
  })
})