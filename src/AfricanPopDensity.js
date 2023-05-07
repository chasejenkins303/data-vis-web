import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "191348882c05c051";

function Notebook() {
  const legendRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "legend") return new Inspector(legendRef.current);
      if (name === "map") return new Inspector(mapRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={legendRef} />
      <div ref={mapRef} />
      {/* <p>Credit: <a href="https://observablehq.com/d/191348882c05c051@206">Project 4 by Dynamic Data Visualization 373</a></p> */}
    </>
  );
}

export default Notebook;