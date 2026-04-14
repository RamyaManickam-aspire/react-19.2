import { renderHook, act } from "@testing-library/react";
import { useUserSearch } from "../hooks/useUserSearch";
import { test, expect } from "@jest/globals";

const users = [
  { id: 1, name: "Ramya" },
  { id: 2, name: "John" },
  { id: 3, name: "Priya" },
];

test("filters users based on search input", () => {
  const { result } = renderHook(() => useUserSearch(users));
  expect(result.current.filteredUsers.length).toBe(3);
  act(() => {
    result.current.handleSearch("ra");
  });
  expect(result.current.filteredUsers).toEqual([{ id: 1, name: "Ramya" }]);
});
