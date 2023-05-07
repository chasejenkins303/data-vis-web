import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "c1100fa2f73228e7";

function Notebook() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      {/* <p>Credit: <a href="https://observablehq.com/d/c1100fa2f73228e7@419">Jail Deaths Final Project by Dynamic Data Visualization 373</a></p> */}
    </>
  );
}

export default Notebook;