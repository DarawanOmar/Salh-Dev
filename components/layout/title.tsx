import React from "react";

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <h1 className=" lg:text-lg 2xl:text-xl border-b-2 border-primary font-medium">
      {title}
    </h1>
  );
}

export default Title;
