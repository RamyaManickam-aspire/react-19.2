import { useState, useMemo, useCallback } from "react";

type User = {
  id: number;
  name: string;
};

export const useUserSearch = (users: User[]) => {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return { search, filteredUsers, handleSearch };
};
