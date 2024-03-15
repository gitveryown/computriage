import Link from "next/link";
import Navbar from "./component/Navbar/homeNavBar";
import './page.css'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>This is the home page!</h1>
    </div>
  );
}
