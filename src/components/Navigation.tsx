"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    opacity: 0,
  });
  const navItemsRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Research" },
    { href: "#team", label: "Team" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" },
  ];

  // Effect for handling scroll events to update active section and scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 50;
      if (newScrolled !== scrolled) {
        setScrolled(newScrolled);
      }

      let currentSectionId = "";
      const sections = document.querySelectorAll("section[id]");
      const navHeightOffset = 120; // Offset for sticky header height

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - navHeightOffset;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = sectionElement.id;
        }
      });

      if (currentSectionId && currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      } else if (!currentSectionId && activeSection !== "") {
        setActiveSection(""); // Clear active section if scrolled out of all sections
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeSection]);

  // Effect for updating the highlight style based on the active section
  useEffect(() => {
    const updateHighlight = () => {
      if (navItemsRef.current && activeSection) {
        const activeLink = navItemsRef.current.querySelector(
          `.nav-link[href="#${activeSection}"]`,
        ) as HTMLElement;
        if (activeLink) {
          setHighlightStyle({
            left: navItemsRef.current.offsetLeft + activeLink.offsetLeft,
            width: activeLink.offsetWidth,
            top: navItemsRef.current.offsetTop,
            height: navItemsRef.current.offsetHeight,
            opacity: 1,
          });
          return;
        }
      }
      // Hide highlight if no active section or link not found
      setHighlightStyle((prev) => ({ ...prev, opacity: 0, width: 0 })); // Keep position for smoother transition out
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);

    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeSection]); // Depends only on activeSection as navItemsRef and navItems are stable

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);

    // Set active section immediately for quick UI update
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 100; // Adjust if your sticky nav height is different
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className={`sticky-nav ${scrolled ? "scrolled" : ""}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center w-1/6 min-w-[120px]">
          <Image
            src={scrolled ? "/aipllogolight.png" : "/aipllogo.png"}
            alt="AI Research Lab Logo"
            width={55}
            height={55}
            className={`nav-logo ${scrolled ? "scrolled-logo" : ""}`} // Added scrolled-logo for specific logo scroll effects
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center relative flex-grow">
          <div className="nav-dynamic-island relative">
            {" "}
            {/* Ensure this parent has appropriate height */}
            {/* Sliding Highlight */}
            <div
              className="absolute rounded-full bg-[#e5d049] transition-all duration-300 ease-in-out" // Color from original, ensure it's in your config or use arbitrary value
              style={{
                left: `${highlightStyle.left}px`,
                width: `${highlightStyle.width}px`,
                top: `${highlightStyle.top}px`,
                height: `${highlightStyle.height}px`,
                opacity: highlightStyle.opacity,
                zIndex: 0,
              }}
            ></div>
            {/* Navigation Links */}
            <div
              className="flex items-center space-x-1 relative z-10"
              ref={navItemsRef}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link relative transition-colors duration-300 ease-in-out ${
                    activeSection === item.href.substring(1)
                      ? "text-secondary"
                      : ""
                  }`}
                  style={{ 
                    padding: "0.75rem 1.5rem",
                    color: activeSection === item.href.substring(1) ? undefined : "#ede8d9"
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button - Right Side (Desktop) */}
        <div className="hidden md:flex items-center justify-end w-1/6 min-w-[120px]">
          <a
            href="#apply"
            onClick={(e) => handleNavClick(e, "#apply")}
            className="apply-btn"
            style={{
              backgroundColor: scrolled ? "#ede8d9" : "#253943",
              color: scrolled ? "#253943" : "#ede8d9"
            }}
          >
            Apply
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end flex-1">
          <button
            onClick={toggleMobileMenu}
            className="text-secondary focus:outline-none p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glassmorphism-subtle rounded-b-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-2 hover:text-primary transition-colors duration-200 ${
                activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-secondary"
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apply"
            className="apply-btn block w-full text-center mt-2"
            onClick={(e) => handleNavClick(e, "#apply")}
            style={{
              backgroundColor: scrolled ? "#ede8d9" : "#253943",
              color: scrolled ? "#253943" : "#ede8d9"
            }}
          >
            Apply
          </a>
        </div>
      </div>
    </header>
  );
}
