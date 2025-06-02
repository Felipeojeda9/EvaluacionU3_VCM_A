import React from "react";
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Tejelanas Vivi</small>
      </div>
    </footer>
  );
}
