import Image from "next/image"

export default function About() {
  return(
    <div className="flex flex-col justify-center pt-2.5">
    <Image src="/About.svg" alt="About Title" width={762} height={128} layout="intrinsic" />
  </div>
  )
  }