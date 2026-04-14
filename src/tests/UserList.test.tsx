import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "../UserList";

test("renders all users initially", () => {
  render(<UserList />);
  expect(screen.getByText("Ramya")).toBeInTheDocument();
  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText("Priya")).toBeInTheDocument();
});

test("filters users when typing in search", async () => {
  render(<UserList />);
  const input = screen.getByPlaceholderText("Search user...");
  await userEvent.type(input, "ra");
  expect(screen.getByText("Ramya")).toBeInTheDocument();
  expect(screen.queryByText("John")).not.toBeInTheDocument();
});

test("focuses input when button clicked", async () => {
  render(<UserList />);
  const input = screen.getByPlaceholderText("Search user...");
  const button = screen.getByText("Focus Input");
  await userEvent.click(button);
  expect(input).toHaveFocus();
});
