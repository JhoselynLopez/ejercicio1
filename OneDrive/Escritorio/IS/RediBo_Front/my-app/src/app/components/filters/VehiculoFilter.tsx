"use client";

import React from "react";

const VehiculoFilter = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 mb-6">
      {/* Grupo: input + select "Todos los estados" */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Buscar por nombre o placa..."
          disabled
          className="px-3 py-2 border rounded-md w-60 bg-gray-100 text-gray-500"
        />

        <div className="relative">
          <select
            disabled
            className="appearance-none px-4 py-2 pr-8 border rounded-md bg-[#FCA311] text-white font-semibold cursor-not-allowed"
          >
            <option>Todos los estados</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <svg
              className="w-4 h-4 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5h10l-5 5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Ordenar por nombre a la derecha */}
      <div className="relative">
        <select
          disabled
          className="appearance-none px-4 py-2 pr-8 border rounded-md bg-[#FCA311] text-white font-semibold cursor-not-allowed"
        >
          <option>Ordenar por nombre</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
          <svg
            className="w-4 h-4 text-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-5-5h10l-5 5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VehiculoFilter;