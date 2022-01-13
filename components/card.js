const Card = () => {
  return (
    <div className="bg-white p-6 rounded w-80 h-52 flex flex-col justify-between">
      <div>
        <h1 className=" text-m">Card Name</h1>
        <p className="font-rubik text-base text-brand-gray">Terminal-Based C++ Task Manager created for CS100 Final Project.</p>
      </div>
      <div>
        <a className="font-rubik text-sm">Link to Project</a>
      </div>
    </div>
  )
}

export default Card;