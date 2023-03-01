
function language_color (langauge){
  //creates a color based on the programming language
  switch (langauge) {
    case "javascript":
      return "#F0DB4F";
    case "typescript":
      return "#007acc";
    case "python":
      return "#3572A5";
    case "java":
      return "#E04728";
    case "c++":
      return "#EBA817";
    case "yacc":
      return "#509342";
    case "c":
      return "#555555";
    case "swift":
      return "#F35E2C";
  }
}

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