import Link from "next/link";
import Nav from "./component/Navbar/navHome";
import './page.css'

import About from "./about/page"

export default function Home() {
  return (
    <main>
      <header>
        <Nav></Nav>
      </header>
    </main>
  );
}
