
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const THEME_KEY = "theme";

const getPreferredTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "light";
  // 优先本地设置
  const local = localStorage.getItem(THEME_KEY);
  if (local === "dark" || local === "light") return local;
  // 跟随系统
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">(getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const handleSwitch = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="fixed z-50 right-5 top-5 flex items-center gap-1">
      <Sun className="w-5 h-5 text-yellow-500" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleSwitch}
        aria-label="切换暗色模式"
        className="mx-1 data-[state=checked]:bg-blue-500"
      />
      <Moon className="w-5 h-5 text-blue-900 dark:text-yellow-400" />
    </div>
  );
};

export default ThemeToggle;
