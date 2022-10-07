import Image from "next/image"

export default function Contact() {
  return(
    <div className="flex flex-col justify-center pt-2.5">
    <Image src="/Contact.svg" alt="Contact Title"  width="279" height="49" layout="intrinsic" />
    </div>
    )
  }