import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Seattle",
    },
    {
      id: 2,
      title: "Atlanta",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Kyiv",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white  text-xs sm:text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
