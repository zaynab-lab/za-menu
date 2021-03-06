import { useState } from "react";
import Dots from "@/components/Loaders/Dots";

export default function Button({ content, onclick, color, noLoading }) {
  const [dots, setDots] = useState(false);
  return (
    <>
      <button
        className={`button ${color ? "color" : "black"}`}
        onClick={() => {
          !noLoading && setDots(true);
          !dots && onclick && onclick();
          const clearMessage = setTimeout(() => {
            setDots(false);
          }, 1500);
          return () => clearTimeout(clearMessage);
        }}
      >
        {dots ? <Dots /> : content}
      </button>
      <style>{`
      .button{
        padding:.2rem .8rem;
        border:1px solid black;
        border-radius:.5rem;
        background:white;
        font-size:1.2rem;
        cursor:pointer;
        margin:1rem 0;
        white-space:nowrap;
      }
      .color{
        border:1px solid ${color};
        color: ${color}
      }
      `}</style>
    </>
  );
}
