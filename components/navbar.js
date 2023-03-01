import Link from 'next/link'
import Image from "next/image"
const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-start p-8 min-w-[770px]">
        <Link href="/">
          <a>
          <Image src="/JT_Home_Button.svg" alt="Home Button" width="110" height="110" layout="intrinsic"/>
          </a>
        </Link>
        <ul className="flex items-center space-x-6">
          <li className="ml-12">
            <Link href="/about">
              <a className="font-rubik-MonoOne text-sm no-underline hover:underline ">About</a>
            </Link>
          </li>
          <li >
            <Link href="/projects">
              <a className="font-rubik-MonoOne text-sm no-underline hover:underline">Projects</a>
            </Link>
          </li>
          <li >
            <Link href="/portfolio">
              <a className="font-rubik-MonoOne text-sm no-underline hover:underline">Portfolio</a>
            </Link>
          </li>
          <li >
            <Link href="/resume">
              <a className="font-rubik-MonoOne text-sm no-underline hover:underline">Resume</a>
            </Link>
          </li>
          <li >
            <Link href="/contact">
              <a className="font-rubik-MonoOne text-sm no-underline hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;