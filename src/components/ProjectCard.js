function ProjectCard(props) {
  return (
    <div className="shadow shadow-inner rounded-xl max-w-2xl bg-gradient-to-tr from-gray-50 to-gray-100 backdrop-blur-sm text-neutral-800">
      <div className="flex shadow-inner rounded-t-xl">
        <div className="flex-col w-1/3 border-r p-2 shadow-inner rounded-tl-xl">
          <ul className="font-extrabold text-left">
            <li>Web Dev</li>
            <li>PHP</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="flex-col w-2/3 p-2 shadow-inner rounded-tr-xl text-left">{props.cardText}</div>
      </div>
      <div className="border-t p-2 text-center shadow-inner rounded-b-xl">
        <h3>{props.cardTitle}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;