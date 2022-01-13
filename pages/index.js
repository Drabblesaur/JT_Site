import Card from "../components/Card";
export default function Home() {
  return (
    <div className="bg-back_svg  bg-contain bg-no-repeat bg-right">
      <div className="font-rubik-MonoOne text-base grid place-content-center w-full">
        <div className=" mb-16 text-lg">
          <p>HI! I'm Johnny! I'm a UCR Computer Science<br></br>Student with a passion for Design and Code.</p>
        </div>
        <div className=" mb-20">
          <h1>Current Projects</h1>
          <div className="py-4 grid grid-cols-2 gap-x-8 place-content-center">
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
