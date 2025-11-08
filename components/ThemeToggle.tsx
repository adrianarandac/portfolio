import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button type="button" className="theme-toggle" aria-label="Toggle theme" disabled>···</button>;
  }

  const isNight = theme === "night";

  return (
    <button type="button" className="theme-toggle" aria-label={`Switch to ${isNight ? "light" : "night"} theme`} onClick={() => setTheme(isNight ? "light" : "night")}>
      {isNight ? "Night" : "Light"}
    </button>
  );
};

export default ThemeToggle;
