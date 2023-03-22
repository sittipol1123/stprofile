import React from "react";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";

export default function Skill() {
  let [isShowing, setIsShowing] = useState(false);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  const skill = [
    {
      skillname: "react",
      skilldetail: "detai;",
    },
    {
      skillname: "react",
      skilldetail: "detai;",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center">
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skill.map((val, index) => (
          <div key={index}>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {val.skillname}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {val.skilldetail}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
