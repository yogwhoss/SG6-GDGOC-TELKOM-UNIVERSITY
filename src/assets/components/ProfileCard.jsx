import { useEffect, useState } from "react";
import Profile from "../image/profile.webp";

function ProfileCard() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  useEffect(() => {
    localStorage.setItem("darkMode", dark);

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 w-80 rounded-2xl shadow-md p-6 space-y-4 transition">

      <div className="flex items-center gap-4">
        <img
          src={Profile}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h2 className="font-semibold text-lg">Yogi Permana Jati</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Frontend Developer
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Dolorem voluptates eius nisi iusto error, quo illo,
        reprehenderit eum maiores facilis.
      </p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm">
          Dark Mode
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-gray-300 dark:bg-zinc-600
            rounded-full transition
            peer-checked:bg-blue-500"
          ></div>
          <div
            className="absolute left-1 top-1 w-4 h-4 bg-white
            rounded-full transition
            peer-checked:translate-x-5"
          ></div>
        </label>
      </div>

    </div>
  );
}

export default ProfileCard;
