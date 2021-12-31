const Footer = () => {
    return (
        <div className="bg-brand-gray p-4 grid grid-cols-2">
        <div className="container flex items-center justify-start mx-auto" >
        <img className="w-48" src="/Full_Logo_White.svg" alt="Home Button"  />
      <ul className="text-white">
            <li className="ml-6 ">
              <a className="font-rubik-MonoOne text-ml">Navigation</a>
            </li>
            <li className="ml-6">
              <a className="font-rubik-MonoOne text-sm ">About</a>
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
        <div className=" text-white py-2">
          <div className="flex justify-end">
            <p className="font-rubik-MonoOne text-xs">tojohnny1559@gmail.com</p>
          </div>
          <div className="flex justify-end">
            <p className="font-rubik-MonoOne text-xs">jto015@ucr.edu</p>
          </div>
          <div className=" flex justify-end space-x-4">
            <img src="/github.svg"></img>
            <img src="/linkedin.svg" className="w-8"></img>
          </div>
        </div>
      </div>
    )
}

export default Footer;