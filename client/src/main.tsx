import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Custom CSS for parallax effect and smooth scrolling
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  
  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .person-card:hover .person-details {
    opacity: 1;
  }
  
  .person-details {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
