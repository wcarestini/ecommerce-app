import data from "../data/data.json";
import React from "react";

export const context = {
  textoTest: "batatinha",
  products: data,
};

export const Context = React.createContext(context);
