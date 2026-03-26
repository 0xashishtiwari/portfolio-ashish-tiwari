'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import {  MoonIcon, SearchIcon, SunIcon } from 'lucide-react'
import useThemeStore from '@/store/usetThemeStore'
import { Tooltip , TooltipContent , TooltipTrigger } from './ui/tooltip'
import {motion} from 'framer-motion'

const Navbar = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (

       <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-background/95 max-w-2xl mx-auto p-4 fixed top-0 left-0 right-0 z-50 border-b border-border flex items-center justify-between backdrop-blur"
    >
        <div className=" bg-background/95 max-w-2xl mx-auto p-4 fixed top-0 left-0 right-0 z-50 border-b  border-border flex items-center justify-between">
  
  <div className="flex items-center gap-5 text-sm text-muted-foreground/80 font-bold">
    <Link href="/" className="hover:text-foreground transition-colors">
      Home
    </Link>
   
    <Link href="/projects" className="hover:text-foreground transition-colors">
      Projects
    </Link>
    <Link href="/resume" className="hover:text-foreground transition-colors">
      Resume
    </Link>
  </div>

  <div className="flex items-center text-foreground">
   
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost"  onClick={toggleTheme}>
          {theme === "light" ? (
            <SunIcon className="mr-1" size={18} />
          ) : (
            <MoonIcon className="mr-1" size={18} />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle mode</p>
      </TooltipContent>
    </Tooltip>
  </div>

</div>
</motion.div>
    )
}

export default Navbar