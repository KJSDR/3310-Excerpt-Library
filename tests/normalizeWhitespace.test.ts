import { describe, it, expect } from "vitest"
import { normalizeWhitespace } from "../src/index"

describe("normalizeWhitespace", () => {
  it("collapses multiple spaces into one", () => {
    expect(normalizeWhitespace("hello   world")).toBe("hello world")
  })

  it("collapses newlines and tabs", () => {
    expect(normalizeWhitespace("hello\n\nworld\t foo")).toBe("hello world foo")
  })

  it("returns empty string for empty input", () => {
    expect(normalizeWhitespace("")).toBe("")
  })

  it("returns empty string for whitespace only input", () => {
    expect(normalizeWhitespace("   ")).toBe("")
  })
})