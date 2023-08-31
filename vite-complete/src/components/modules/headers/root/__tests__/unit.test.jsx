import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import RootHeader from "../index";

// All test case are not written
describe("props checking", async () => {
  beforeAll(() => {
    render(<RootHeader title="title" button_title="button_title" items_count={0} />);
  });

  afterAll(cleanup);

  it("check title", async () => {
    const search_node = await screen.queryByText("title");
    expect(search_node).not.toBeNull();
  });

  it("check items_count", async () => {
    const search_node = await screen.queryByText("Total:", { exact: false });
    expect(search_node).not.toBeInTheDocument();
  });

  it("check button title", async () => {
    const search_node = await screen.queryByText("button_title");
    expect(search_node).not.toBeInTheDocument();
  });
});
