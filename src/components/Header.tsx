"use client";
import { Info } from "lucide-react";
import React, { useRef } from "react";

export default function Header() {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
      if (dialogRef.current) dialogRef.current.showModal();
    };
  
    const closeDialog = () => {
      if (dialogRef.current) dialogRef.current.close();
    };
  
    const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
      if (event.target === dialogRef.current) {
        closeDialog();
      }
    };
  
    return (
      <div className="flex flex-row justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md max-w-screen-lg mx-auto lg:space-x-6 lg:px-8 lg:py-6">
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Todo List - NextJs
        </div>
        <button
          onClick={openDialog}
          className="transition duration-150 ease-in-out transform bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700 rounded-md p-2"
        >
          <Info />
        </button>
  
        {/* Native HTML Dialog */}
        <dialog
          ref={dialogRef}
          onClick={handleDialogClick} /* Detect clicks outside dialog content */
          className="centered-dialog rounded-lg p-6 max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            This is an informational alert dialog for the Info button.
          </p>
          <button
            onClick={closeDialog}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Close
          </button>
        </dialog>
      </div>
    );
}

//This is an simple todolist app built with nextjs + tailwind + postgres
