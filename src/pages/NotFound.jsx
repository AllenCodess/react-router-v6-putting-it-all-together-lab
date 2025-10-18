import React from "react";
import NavBar from "../components/NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </main>
    </>
  );
}
