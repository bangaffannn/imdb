"use client";

import { ThemeProvider } from 'next-themes';
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
            {mounted && (currentTheme === "dark" ? (
                <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("light")}/>
            ) : (
                <IoMdMoon className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("dark")}/>
            ))}
        </>
    );
}