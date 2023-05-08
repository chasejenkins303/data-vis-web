import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "5001234c0a22dff4";

function Notebook() {
  const viewofSliderRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof slider") return new Inspector(viewofSliderRef.current);
      if (name === "map") return new Inspector(mapRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofSliderRef} />
      <div ref={mapRef} />
      {/* <p>Credit: <a href="https://observablehq.com/d/5001234c0a22dff4@56">Maps US Population Density by Dynamic Data Visualization 373</a></p> */}
    </>
  );
}

export default Notebook;