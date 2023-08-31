import { afterAll } from "vitest";
import { cleanup } from "@testing-library/react";

import "@testing-library/jest-dom"; //import all jest dom query such as toBeInTheDocument

// @see vite.config test

afterAll(() => {
  cleanup();
});
