// Imports
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import ManageAction from "../index";

// Tests
describe("modules action manage", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<ManageAction submit_text="Hello" />);
    const h1 = await screen.queryByText("Hello");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
