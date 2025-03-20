import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Section Components
import Hero from "@/components/sections/Hero";
import Research from "@/components/sections/Research";
import People from "@/components/sections/People";
import Publications from "@/components/sections/Publications";
import News from "@/components/sections/News";
import Resources from "@/components/sections/Resources";
import Collaborators from "@/components/sections/Collaborators";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-body bg-neutral-100 text-neutral-800">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <Research />
          <People />
          <Publications />
          <News />
          <Resources />
          <Collaborators />
        </main>
        
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
