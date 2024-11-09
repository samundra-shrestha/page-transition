"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TransitionLink({ children, href, className }) {
  const [clicked, setClicked] = useState(false);  // Track the clicked card
  const ref = useRef(null);  // Reference to the current card
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true); // Mark the card as clicked
    router.prefetch(href);
    // Get all cards
    const allCards = document.querySelectorAll(`.${className}`);

    // Set the clicked card width to 100% and hide other cards by setting their width to 0
    allCards.forEach((card) => {
      if (card === ref.current) {
        // Expand clicked card
        card.style.width = "100%";
        card.style.opacity = "1";
        card.style.visibility = "visible"; // Ensure visibility is set
      } else {
        // Collapse other cards
        card.style.width = "0";
        card.style.opacity = "0";
        card.style.visibility = "hidden"; // Hide the card after transition
        setTimeout(() => {card.style.display = "none"}, 2000)
      }
    });

    // After 5 seconds, navigate to the clicked card's page
    setTimeout(() => {
      router.push(href);
    }, 2500); // Delay the navigation for 5 seconds
  };

  return (
    <Link
    href={href}
      className={className}
      ref={ref} // Set the ref to the current card
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
