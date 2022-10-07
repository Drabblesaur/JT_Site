import Image from "next/image"

export default function Portfolio() {
  return(
    <div className="flex flex-col justify-center pt-2.5">
    <Image src="/Portfolio.svg" alt="Portfolio Title"  width="744" height="160" layout="intrinsic" />
    
  </div>
  )
  }