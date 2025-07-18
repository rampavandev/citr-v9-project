import { createRoot } from "react-dom/client";
import Order from "./Order";

const APP = () => {
  return (
    <div>
      <h1>Padre Ginos</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<APP />);
