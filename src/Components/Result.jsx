import React from "react";

export default function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return <Box key={index} />;
  });
  return <div className="w-full grid grid-cols-4 gap-3 ">{boxes}</div>;
}

const Box = () => {
  return (
    <div className="shadow min-h-[200px] border border-black mt-3">
      <img
        className="w-ful"
        src="https://i5.walmartimages.com/asr/9032725b-a21f-41ff-9a7b-ab9d39c86fc2.7b2569ebad4724826b7b71915becd10f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        alt=""
      />
    </div>
  );
};
