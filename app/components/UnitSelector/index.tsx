import React, { useEffect, useState } from "react";

// interface Props{
//   eventId: string;
//   updateCart: (units: number) => void;
// }

function UnitSelector() {

  const [units, setUnits] = useState(0);
  
  // const [units, setUnits] = useState(() => {
  //   const storedUnits = localStorage.getItem(`ticket_${eventId}`);
  //   return storedUnits ? parseInt(storedUnits, 10) : 0;
  // });

  // useEffect(() => {
  //   localStorage.setItem(`ticket_${eventId}`, units.toString());
  //   updateCart(units);
  // }, [units, eventId, updateCart]);

    const increaseUnits = () => {
      setUnits(units + 1);
    };

    const decreaseUnits = () => {
      if (units > 0) {
        setUnits(units - 1);
      }
    };

    const handleInputChange = (event: any) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setUnits(value);
      }
    };

    return (
      <div className="flex items-center gap-4 p-2 w-fit mx-auto">
        <button
          onClick={increaseUnits}
          className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 active:scale-95"
        >
          +
        </button>
        <input
          type="number"
          value={units}
          onChange={handleInputChange}
          className="w-16 text-center border border-gray-500 rounded bg-gray-900 text-white 
            focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          onClick={decreaseUnits}
          className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 active:scale-95"
        >
          -
        </button>
      </div>
  );
}

export { UnitSelector };

