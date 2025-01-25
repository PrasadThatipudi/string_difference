import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("strCommon", () => {
  it("should return common words from two strings", () => {
    const str1 = "a";
    const str2 = "a";
    const expected = "a";

    assertEquals(strCommon(str1, str2), expected);
  });
});
