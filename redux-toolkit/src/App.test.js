import React from "react";
import { render } from "@testing-library/react";
import AppProvider from "store/AppProvider";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
