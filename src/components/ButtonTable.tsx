import React from "react";

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
    <section className=" min-w-full h-3/4 rounded-lg grid grid-cols-5 border-4 border-[#1C162C] overflow-hidden">
      <div className="grid grid-rows-6">
        <div className="bg-[#1C162C]"></div>
        {buttonEffects.map((effects) => (
          <div key={effects}>
            <span className="grid justify-center items-center pt-4 text-sm uppercase bg-[#1C162C] h-full">
              {effects}
            </span>
          </div>
        ))}
      </div>
      {buttonTypes.map((button) => (
        <div className="grid grid-rows-7">
          <span
            key={button}
            className="grid justify-center items-center text-sm uppercase bg-[#1C162C]"
          >
            {button}
          </span>
        </div>
      ))}
    </section>
  );
}

export default ButtonTable;
