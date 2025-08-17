import React from "react";

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <h1 className="text-base md:text-lg lg:text-xl 2xl:text-2xl border-b-2 border-primary font-medium">
      {title}
    </h1>
  );
}

export default Title;
