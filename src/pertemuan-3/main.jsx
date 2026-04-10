import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserFrom";
import HitungGajiFrom from "./HitungGajiForm";

createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <TailwindCSS/> */}
      {/* <UserForm/> */}
      <HitungGajiFrom/>
    </div>
  )