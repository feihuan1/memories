'use client'

import { useTheme } from "next-themes"
import {MdDarkMode, MdLightMode} from 'react-icons/md'

export default function ThemeToggler() {

    const {theme, setTheme} = useTheme();

    return (
        <button
            onClick={()=> setTheme(theme === 'dark'? 'light' : 'dark')}
        >
        <div>
            {theme === 'dark' ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
        </div>
        </button>
    )

}