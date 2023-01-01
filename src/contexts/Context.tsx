import data from "../../data.json";
import React from "react";

const context = {
  products: data,
};

export const Context = React.createContext(context);
