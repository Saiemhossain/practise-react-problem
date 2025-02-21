import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react"


function DarkMode() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#000' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';

  },[darkMode])
  return (
    <div>
      <button onClick={toggleMode}>
        {darkMode ? <Sun width={'20px'} /> : <Moon width={'20px'} />}
      </button>
    </div>
  );
}

export default DarkMode