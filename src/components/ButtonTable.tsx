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
    <section className=" min-w-full max-w-[920px] h-[820px] rounded-lg grid grid-cols-9 border-4 border-[#1C162C] overflow-hidden">
      <div className="grid grid-rows-13 col-span-1">
        <div className="bg-[#1C162C] row-span-1"></div>
        {buttonEffects.map((effects) => (
            <span className="grid row-span-2 justify-center items-center text-sm uppercase bg-[#1C162C] h-full">
              {effects}
            </span>
        ))}
      </div>
      {buttonTypes.map((buttonType) => (
        <div className="grid grid-rows-13 col-span-2">
          <span
            key={buttonType}
            className="grid row-span-1 justify-center items-center text-sm uppercase bg-[#1C162C]"
          >
            {buttonType}
          </span>
          {test.map((_, index) => (
            <div key={index} className="grid row-span-2 items-center justify-center">
              <Button intent={buttonType.split(' ')[0].toLowerCase()}>{buttonEffects[index]+ " " + buttonType.split(' ')[0]}</Button>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default ButtonTable;
