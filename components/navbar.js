import Image from 'next/image'
const Navbar = () => {
    return (
        <header>
        <div className="container flex items-center justify-start mx-auto p-8">
          <Image src="/JT_Home_Button.svg" alt="Home Button" width={95} height={95} />
          <ul className="flex items-center">
            <li className="ml-12">
              <a className="font-rubik-MonoOne text-sm">About</a>
            </li>
            <li className="ml-6">
              <a className="font-rubik-MonoOne text-sm">Projects</a>
            </li>
            <li className="ml-6">
              <a className="font-rubik-MonoOne text-sm">Portfolio</a>
            </li>
            <li className="ml-6">
              <a className="font-rubik-MonoOne text-sm">Resume</a>
            </li>
            <li className="ml-6">
              <a className="font-rubik-MonoOne text-sm">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Navbar;