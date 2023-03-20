import React, { useState, useEffect } from "react";

import { HeartIcon } from "@heroicons/react/20/solid";
import "./index.css";

export default function Footer() {
  const [fecha, setFecha] = useState();

  useEffect(() => {
    // Update the document title using the browser API
    const hoy = new Date();
    setFecha(hoy.getFullYear());
  });

  return (
    <>
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:flex">
          © {fecha} Copyright - Desarrollado con
          <p className="heart-content m-auto">
            <HeartIcon className="h-6 h-6 text-purple-500 heart mx-auto" />
          </p>
          por{" "}
          <a
            href="https://rojo95.github.io/portfolio/"
            className="hover:underline"
          >
            Johan Román
          </a>
          .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://rojo95.github.io/portfolio/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Portafolio
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
