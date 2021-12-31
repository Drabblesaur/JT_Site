const Navbar = () => {
    return (
        <header>
        <div className="container flex items-center justify-start p-8">
          <img className=""src="/JT_Home_Button.svg" alt="Home Button"  />
          <ul className="flex items-center space-x-6 md:space-x-3">
            <li className="ml-12">
              <a className="font-rubik-MonoOne text-sm">About</a>
            </li>
            <li >
              <a className="font-rubik-MonoOne text-sm">Projects</a>
            </li>
            <li >
              <a className="font-rubik-MonoOne text-sm">Portfolio</a>
            </li>
            <li >
              <a className="font-rubik-MonoOne text-sm">Resume</a>
            </li>
            <li >
              <a className="font-rubik-MonoOne text-sm">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Navbar;