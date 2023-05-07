import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "7ed0069f27285f61";

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
      <p>Credit: <a href="https://observablehq.com/d/7ed0069f27285f61@46">Plot of Political Ideologies of Members of Congress by Dynamic Data Visualization 373</a></p>
    </>
  );
}

export default Notebook;