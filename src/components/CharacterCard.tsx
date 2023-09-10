import React from "react";
import { Link } from "react-router-dom";

interface propsInterface {
  data: {
    name: string;
    thumbnail: { path: string; extension: string };
    id: string;
    description: string;
  };
}

export default function CharacterCard({ data }: propsInterface) {
  console.log(data);
  return (
    <Link
      to={`/Detail/${data.id}`}
      className="flex flex-col items-center justify-center w-11/12 border-2  max-w-[350px]"
    >
      <span className="w-full p-2 text-center bg-gray-200">{data.name}</span>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={`${data.name}'s image`}
        className="object-cover w-full max-w-[350px] h-auto  max-h-[500px]"
      />
      <span>{data.description}</span>
    </Link>
  );
}
