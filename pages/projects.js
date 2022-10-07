import Image from "next/image"

export default function Projects() {
    return(
      <div className="flex flex-col justify-center pt-2.5">
      <Image src="/Project.svg" alt="Project Title" width="744" height="160" layout="intrinsic" />
    </div>
    )
  }