import Link from "next/link";
import "./page.css";
import Image from "next/image";
import dots from '../public/dots.png'
import AnimatedBackground from "./component/Animation/animation";


export default function Home() {
  return (
    <main className="mainContainer">
      <header className="header">
        <div>
          <Link href="/">
            LOGO
          </Link>
          <nav className="nav">
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
      {/* <div className="backgroundImg">
      <Image 
      src={dots}
      alt="computriage background"
      sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}

      >

      </Image>
      </div>
    */}
      
    </main>
  );
}
