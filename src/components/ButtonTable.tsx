import React from "react";
import { Button, button } from "./Button";
const buttonTypes = [
  "Primary Button",
  "Secondary Button",
  "Tertiary Button",
  "Cursor",
];
const buttonEffects = [
  "Default",
  "Hover",
  "Focus",
  "Disabled",
  "Loading",
  "Movable",
];

const test = ["test", "test", "test", "test", "test", "test"];

function ButtonTable() {
  return (
    <section className=" min-w-full max-w-[920px] h-[920px] rounded-lg grid grid-cols-5 border-4 border-[#1C162C] overflow-hidden">
      <div className="grid grid-rows-7">
        <div className="bg-[#1C162C]"></div>
        {buttonEffects.map((effects) => (
          <div key={effects}>
            <span className="grid justify-center items-center text-sm uppercase bg-[#1C162C] h-full">
              {effects}
            </span>
          </div>
        ))}
      </div>
      {buttonTypes.map((buttonType) => (
        <div className="grid grid-rows-7">
          <span
            key={buttonType}
            className="grid justify-center items-center text-sm uppercase bg-[#1C162C]"
          >
            {buttonType}
          </span>
          {test.map((_, index) => (
            <div key={index} className="grid items-center justify-center">
              <Button intent={buttonType.split(' ')[0].toLowerCase()}>Button Type</Button>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default ButtonTable;
