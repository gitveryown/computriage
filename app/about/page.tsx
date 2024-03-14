'use client'
import React from "react";
import style from '../style/page.module.css'
import NavPage from "../component/Navbar/navPages";


export default function Page() {
    return (
      <body className={style.bodyStyle}>
        <NavPage></NavPage>
        <h1>This Is The About Page!</h1>
      </body>
    );
  }