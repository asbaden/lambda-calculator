import React, {useState} from "react";
import { tsPropertySignature } from "@babel/types";
import SpecialButton from "../ButtonComponents/SpecialButtons/SpecialButton";

const Display = (props) => {
  const[display, setDisplay] = useState(0);
  return <div className="display">{display}</div>;
};

export default Display;