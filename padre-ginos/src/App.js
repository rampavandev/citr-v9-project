import React from "react";
import { createRoot } from "react-dom/client";
import  Pizza  from "./Pizzaa";


const APP = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Ginos"),
    React.createElement(Pizza, {
      name: '"The Pepperoni Pizza',
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(APP));
