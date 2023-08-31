import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import TextButton from "../text";

// all test case are not written
describe("TextButton props checking", async () => {
  beforeAll(() => {
    render(<TextButton text="text" onClick={() => {}} />);
  });

  afterAll(cleanup);

  it("check text", async () => {
    const search_node = await screen.queryByText("text");
    expect(search_node).not.toBeNull();
  });
});
