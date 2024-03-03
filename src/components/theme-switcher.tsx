"use client";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return <Switch onClick={toggleTheme} />;
};
export { ThemeSwitcher };
