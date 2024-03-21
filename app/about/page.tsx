'use client'
import React from "react";
import NavBar from "../component/Navbar/pageNavBar";


export default function Page() {
    return (
      <div>
        {/* Will transfer Nav page component into layout page  */}
        <NavBar></NavBar>
        <h1>This Is The About Page!</h1>
      </div>
    );
  }