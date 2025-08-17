"use client";
import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";
import { Input } from "../ui/input";

function SearchTable() {
  const [search, setSearch] = useQueryState("search", {
    clearOnDefault: true,
    defaultValue: "",
    shallow: false,
  });

  return (
    <Input
      placeholder={"گەڕان"}
      type="search"
      Icon={SearchIcon}
      value={search}
      onChange={(event) => {
        const value = event.target.value;
        setSearch(value);
      }}
      className="placeholder:text-muted-foreground"
      sizeIcon={20}
    />
  );
}

export default SearchTable;
