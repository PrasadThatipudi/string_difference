import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { strCommon } from "../src/str_common.js";

describe("strCommon", () => {
  it("should return empty array if nothing is common", () => {
    const str1 = "a";
    const str2 = "b";
    const expected = [];

    assertEquals(strCommon(str1, str2), expected);
  });
  it("should return common string from two strings", () => {
    const str1 = "a";
    const str2 = "a";
    const expected = ["a"];

    assertEquals(strCommon(str1, str2), expected);
  });
});
