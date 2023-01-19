function CardBasic(props) {
  return (
    <a className="z-10" href={props.href} target="_blank">
      <div style={{ backgroundImage: `url(${props.bgImage})` }} className="card text-xl rounded shadow-md shadow-black/30 relative cursor-pointer text-white bg-slate-50 opacity-90 bg-center bg-unzoom hover:bg-zoom transition-all bg-blend-multiply aspect-square max-w-none m-3">
        <div className="title w-full bottom-0 pointer-events-none absolute p-2 border-t-2 border-slate-700 bg-slate-50 dark:bg-slate-500 rounded-b bg-opacity-40 z-10 font-bold text-2xl">{props.cardTitle}</div>
        <div className="overlay w-full rounded bg-black/30 absolute"></div>
        <div className="content rounded font-semibold p-10 h-full hover:opacity-100 md:opacity-0 transition-opacity w-full text-white bg-black bg-opacity-60 absolute top-0 left-0">{props.cardInfo}</div>
      </div>
    </a>
  );
}

export default CardBasic;