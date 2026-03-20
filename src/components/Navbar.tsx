'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import {  MoonIcon, SearchIcon, SunIcon } from 'lucide-react'
import useThemeStore from '@/store/usetThemeStore'
import { Tooltip , TooltipContent , TooltipTrigger } from './ui/tooltip'
const Navbar = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <div className=" bg-background/95 max-w-2xl mx-auto p-4 fixed top-0 left-0 right-0 z-50 border-b  border-border flex items-center justify-between">
  
  <div className="flex items-center gap-5 text-sm text-muted-foreground/80 font-bold">
    <Link href="/" className="hover:text-foreground transition-colors">
      Home
    </Link>
    <Link href="/blog" className="hover:text-foreground transition-colors">
      Blog
    </Link>
    <Link href="/projects" className="hover:text-foreground transition-colors">
      Projects
    </Link>
    <Link href="/resume" className="hover:text-foreground transition-colors">
      Resume
    </Link>
  </div>

  <div className="flex items-center text-foreground">
    <Button variant="outline" size="sm" className="mr-2 border-secondary border-opacity-50 hover:bg-secondary/10">
      <SearchIcon className="mr-1" size={16} />
      <div className='hidden md:flex '>Search</div>
      
    </Button>
    
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
    )
}

export default Navbar