import { createRoot } from "react-dom/client";
import  Pizza  from "./Pizzaa";


const APP = () => {
  return (
    <div>
      <h1>Padre Ginos</h1>
      <Pizza name="Margherita" description="Classic pizza with tomato sauce and mozzarella." />
      <Pizza name="Pepperoni" description="Spicy pepperoni slices on a cheesy base." />
      <Pizza name="Vegetarian" description="Loaded with fresh vegetables and herbs." />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<APP/>);
