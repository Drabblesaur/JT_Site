const Card = (props) => {
  return (
    <div className="bg-white p-6 rounded w-80 h-52 flex flex-col justify-between">
      <div>
        <h1 className=" text-m">{props.name}</h1>
        <p className="font-rubik text-base text-brand-gray">{props.text}</p>
      </div>
      <div>
        <a href={props.href}className="font-rubik text-sm">Link to Project</a>
      </div>
    </div>
  )
}

export default Card;