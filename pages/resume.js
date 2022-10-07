import Image from "next/image"
export default function Resume() {
    return(
      <div className="flex flex-col justify-center pt-2.5">
        <Image src="/Resume.svg" alt="Resume Title" width="744" height="160" layout="intrinsic" />
      </div>
    )
  }