import { createRoot } from "react-dom/client";
import  Pizza  from "./Pizzaa";


const APP = () => {
  return (
    <div>
      <h1>Padre Ginos</h1>
      <Pizza image={"/public/pizzas/pepperoni.webp"} name="Pepperoni" description="pep, cheesem n stuff" />
      <Pizza image={"/public/pizzas/hawaiian.webp"} name="Hawaiian" description="ham, pineapple n stuff" />
      <Pizza image={"/public/pizzas/big_meat.webp"} name="Big Meat" description="french fries and hot dogs" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<APP/>);
