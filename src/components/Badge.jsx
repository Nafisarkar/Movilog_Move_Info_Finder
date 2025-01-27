import React from "react";

const Badge = ({ children, variant = "adventure" }) => {
  let veriantx = variant.toLowerCase();
  veriantx = veriantx.replace(/\s/g, "");

  const variants = {
    nan: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    action: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    adventure:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    animation:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    comedy: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    crime:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    documentary:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    drama: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    family:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    fantasy: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    history: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    horror: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    music: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    mystery:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    romance: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
    sciencefiction:
      "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",
    tvMovie:
      "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    thriller:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    war: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    western:
      "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300",
  };

  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ${variants[veriantx]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
