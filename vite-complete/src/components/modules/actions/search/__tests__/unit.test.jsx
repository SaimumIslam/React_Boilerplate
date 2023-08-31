import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import SearchAction from "../index";

// All test case are not written
describe("props checking", async () => {
  beforeAll(() => {
    render(
      <SearchAction
        submit_text="submit_text"
        onSubmit={() => {}}
        onCancel={() => {}}
      />,
    );
  });

  afterAll(cleanup);

  it("check submit_text", async () => {
    const search_node = await screen.queryByText("submit_text");
    expect(search_node).not.toBeNull();
  });
});
