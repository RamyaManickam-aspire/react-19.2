import { useRef } from "react";
import { useUserSearch } from "./hooks/useUserSearch";

const users = [
  { id: 1, name: "Ramya" },
  { id: 2, name: "John" },
  { id: 3, name: "Priya" },
  { id: 4, name: "David" },
];

export default function UserList() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { filteredUsers, handleSearch } = useUserSearch(users);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>User Search</h2>
      <input
        ref={inputRef}
        placeholder="Search user..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
