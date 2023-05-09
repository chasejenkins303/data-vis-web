import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "cc4e7c7afe783c84";

function Notebook() {
  const averageSalRef = useRef();
  const viewofChoiceRef = useRef();
  const swatchesRef = useRef();
  const salByTitleRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "averageSal") return new Inspector(averageSalRef.current);
      if (name === "viewof choice") return new Inspector(viewofChoiceRef.current);
      if (name === "swatches") return new Inspector(swatchesRef.current);
      if (name === "salByTitle") return new Inspector(salByTitleRef.current);
      return ["filtered_data_hist","faculty_color"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
        <p>Professor Salaries NC</p>
      <div ref={averageSalRef} />
      <div ref={viewofChoiceRef} />
      <div ref={swatchesRef} />
      <div ref={salByTitleRef} />
      {/* <p>Credit: <a href="https://observablehq.com/d/cc4e7c7afe783c84@164">Project 2 by Dynamic Data Visualization 373</a></p> */}
    </>
  );
}

export default Notebook;