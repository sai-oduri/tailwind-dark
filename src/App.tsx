import { useState } from "react"

export default function App() {

  const [dark, setDark] = useState(false);

  return (

    <div className={`${dark && "dark"}`}>
      <div className="h-screen bg-white dark:bg-black w-screen flex justify-center items-center">
        <div className="bg-black dark:bg-white h-80 w-80 flex items-center justify-center rounded-xl">
          <p className="text-white dark:text-black text-3xl font-bold">Tailwind CSS</p>
        </div>
      </div>
      <button className={`bg-blue-500 font-extralight absolute rounded-full p-2 w-16 h-16 bottom-2 right-2 ${dark ? "text-white" : "text-black"}`} onClick={() => setDark(!dark)}>
        {dark ? "LIGHT" : "DARK"}
      </button>
    </div>

  )
}