import React, {useState} from "react";
import { tsPropertySignature } from "@babel/types";
import SpecialButton from "../ButtonComponents/SpecialButtons/SpecialButton";

const Display = (props) => {
  
  return <div 
          className="display">{props.number}
        </div>; 
  
};

export default Display;