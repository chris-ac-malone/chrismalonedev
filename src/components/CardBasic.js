function CardBasic(props) {
  return (
    <div className="card rounded-xl shadow-md shadow-black/30 relative cursor-pointer text-white bg-slate-50 opacity-90 bg-unzoom hover:bg-zoom transition-all bg-cm-3d-card bg-cover bg-blend-multiply aspect-square max-w-none m-3">
      <div className="title w-full bottom-0 pointer-events-none absolute p-2 border-t-2 border-slate-700 bg-slate-50 dark:bg-slate-500 rounded-b-xl bg-opacity-40 z-10 font-bold text-2xl">{props.cardTitle}</div>
      <div className="w-fullrounded-xl bg-black/30 absolute"></div>
      <div className="opacity-0 rounded-xl font-semibold p-2 h-full hover:opacity-100 transition-opacity w-full text-white bg-black bg-opacity-60 absolute top-0 left-0">{props.cardInfo}</div>
    </div>
  );
}

export default CardBasic;