import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main>
      <header>
        <div className="headerTop">
          <Link href="/">
            LOGO
          </Link>
          <nav>
            <button className="notSelected">
              <Link href="/about">
                About
              </Link>
            </button>
            <button className="notSelected">
              <Link href="/contact">
                Contact
              </Link>
            </button>
            <button className="selected">
              <Link href="/services">
                Services
              </Link>
            </button>
          </nav>
        </div>
      </header>
    </main>
  );
}
