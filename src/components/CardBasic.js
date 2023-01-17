function CardBasic(props) {
  return (
    <>
      <div className="rounded-xl shadow-md shadow-black/30 relative text-white bg-slate-50 opacity-90 bg-cm-3d-card bg-cover bg-blend-multiply h-80 w-80">
        <div className="title bottom-0 absolute p-2 border-t-2 border-slate-700 bg-slate-50 dark:bg-slate-500 rounded-b-xl bg-opacity-40 z-10 w-full font-bold text-2xl">{props.cardTitle}</div>
        <div className="w-80 h-80 rounded-xl bg-black/30 absolute"></div>
        <div className="opacity-0 rounded-xl font-semibold p-2 hover:opacity-100 transition-opacity w-80 h-80 text-white bg-black bg-opacity-60 absolute top-0 left-0">{props.cardInfo}</div>
      </div>
    </>
  );
}

export default CardBasic;