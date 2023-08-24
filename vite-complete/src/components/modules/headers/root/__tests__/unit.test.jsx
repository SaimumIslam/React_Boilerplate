// Imports
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import RootHeader from "../index";

// Tests
describe("modules root header", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<RootHeader title="Hello" button_title="Button" />);

    const h1 = await screen.queryByText("Hello");
    const button = await screen.queryByText("Hello");

    // Expectations
    expect(h1).not.toBeNull();
    expect(button).not.toBeNull();
  });
});
