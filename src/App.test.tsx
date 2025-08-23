import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders with initial count 0", () => {
  render(<App />);
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("increments count on button click", () => {
  render(<App />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});
