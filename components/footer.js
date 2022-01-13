import Link from 'next/link'
const Footer = () => {
  return (
    <div className="bg-brand-gray p-4 grid grid-cols-2">
      <div className="container flex items-center justify-start mx-auto" >
        <img className="w-48" src="/Full_Logo_White.svg" alt="Home Button" />
        <ul className="text-white">
          <li className="ml-6 ">
            <a className="font-rubik-MonoOne text-ml">Navigation</a>
          </li>
          <li className="ml-6">
          <Link href="/about">
            <a className="font-rubik-MonoOne text-sm ">About</a>
            </Link>
          </li>
          <li className="ml-6">
          <Link href="/projects">
            <a className="font-rubik-MonoOne text-sm">Projects</a>
            </Link>
          </li>
          <li className="ml-6">
          <Link href="/portfolio">
            <a className="font-rubik-MonoOne text-sm">Portfolio</a>
            </Link>
          </li>
          <li className="ml-6">
          <Link href="/resume">
            <a className="font-rubik-MonoOne text-sm">Resume</a>
            </Link>
          </li>
          <li className="ml-6">
          <Link href="/contact">
            <a className="font-rubik-MonoOne text-sm">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className=" text-white py-2">
        <div className="flex justify-end">
          <p className="font-rubik-MonoOne text-xs">tojohnny1559@gmail.com</p>
        </div>
        <div className="flex justify-end">
          <p className="font-rubik-MonoOne text-xs">jto015@ucr.edu</p>
        </div>
        <div className=" flex justify-end space-x-4">
          <a href="https://github.com/Drabblesaur/">
            <img src="/github.svg" />
          </a>
          <Link href = "https://www.linkedin.com/in/johnnyto015/">
          <a>
            <img src="/linkedin.svg" className="w-8"></img>
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;