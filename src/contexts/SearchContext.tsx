import { createContext } from "react";

const context = {
  searchTerm: "",
};

export const SearchContext = createContext({
  searchTerm: "",
});
