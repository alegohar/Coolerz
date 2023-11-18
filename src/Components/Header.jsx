import { Link } from "react-router-dom";

export const Header = () => (
  
    
  <header style={{ backgroundColor: "skyblue" }}>
    <ul className="flex items-center gap-10" style={{ gap: "15px"}}>
    <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/contactUs">contact us</Link>
      </li>
      
      <li>
        <Link to="/about"> Tasks Home</Link>
      </li>
      <li>
        <Link to="/careers">careers</Link>
      </li>
      <li>
        <Link to="/form-sweetalert">Form</Link>
      </li>
      <li>
        <Link to="/StopWatch">Stop Watch</Link>
      </li>
    </ul>
  </header>
);
