'use client'
import Link from "next/link";
import "./navHome.css";
import {ArrowRightIcon}  from '@chakra-ui/icons';

export default function nav() {
  return (
    <main>
      <nav>
        <div>
          <Link className="logo" href="/">Logo</Link>
        </div>
        <div className="navLink mobileLink">
          <ul>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="selected">
              <Link className="selected" href="/about">About
              </Link>
              <ArrowRightIcon/>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
