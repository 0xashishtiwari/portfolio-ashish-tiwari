import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { GithubIcon, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-full border-t border-border mt-12 text-muted-foreground bg-foreground/5">
      <div className="max-w-2xl mx-auto p-15 flex flex-col md:flex-row justify-between gap-6  ">
        
        {/* Navigation */}
        <div>
          <h2 className="font-semibold mb-2">Navigate</h2>
          <div className="flex gap-4 text-sm">
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
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://x.com/1xashishtiwari" target="_blank">
                <X size={16} />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/ashiishtiwarii" target="_blank">
                <Linkedin size={16} />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/0xashishtiwari" target="_blank">
                <GithubIcon size={16} />
              </Link>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <Link href="https://instagram.com/1xashishtiwari" target="_blank">
                <Instagram size={16} />
              </Link>
            </Button>
          </div>
        </div>

      </div>

      <div className=" max-w-2xl mx-auto p-8 border-t border-border">
        <p className="text-center text-sm font-semibold text-muted-foreground/80 ">
          © {new Date().getFullYear()} Ashish Tiwari. All rights reserved.
        </p>
      </div>

      <div className="bottom-0 mx-auto right-0 left-0 bg-background/65 fixed h-8 w-full z-50" />   

    </footer>
  );
};

export default Footer;