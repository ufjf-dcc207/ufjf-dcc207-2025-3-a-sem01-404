import React from "react";

export default function Button({ texto }: { texto: string }) {
  return (
    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
      {texto}
    </button>
  );
}
