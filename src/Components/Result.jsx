debugger;

export default function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        title={item.title}
        rating={item.vote_average}
        image={item.poster_path}
        key={index}
      />
    );
  });
  return <div className="w-full grid grid-cols-4 gap-3 ">{boxes}</div>;
}

const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="shadow min-h-[200px] border border-black mt-3">
      <img className="w-full" src={IMGPATH + props.image} alt="" />
      <div className="flex justify-between px-2 py-2">
        <span className="text-white">{props.title}</span>{" "}
        <span className="text-yellow-600">{props.rating}</span>
      </div>
    </div>
  );
};
