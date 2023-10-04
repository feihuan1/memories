"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      width={120}
      height={120}
      ariaLabel="Loader"
      borderColor="#000"
      barColor="#fff" 
      wrapperStyle={{display: 'block', margin: 'auto'}}
    />
  );
}
