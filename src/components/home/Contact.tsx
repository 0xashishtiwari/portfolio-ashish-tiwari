import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Contact = () => {
    return (
        <div className="flex p-6 flex-col gap-2 justify-center">
            <p className="text-muted-foreground text-sm">
                Love to build amazing things!
            </p>

            <div className="flex items-center gap-3 text-foreground">

                <Tooltip >
                    <TooltipTrigger asChild>
                        <Link
                            href="https://github.com/0xashishtiwari"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Github
                                size={20}
                                className="text-muted-foreground hover:text-foreground transition-all scale-100 hover:scale-115 "
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>GitHub</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip >
                    <TooltipTrigger asChild>
                        <Link
                            href="https://www.linkedin.com/in/ashiishtiwarii/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin
                                size={20}
                                className="text-muted-foreground hover:text-foreground transition-all scale-100 hover:scale-115"
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip >
                    <TooltipTrigger asChild>
                        <Link
                            href="https://twitter.com/1xashishtiwari"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <X
                                size={20}
                                className="text-muted-foreground hover:text-foreground transition-all scale-100 hover:scale-115 "
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>X</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip >
                    <TooltipTrigger asChild>
                        <Link
                            href="mailto:ashishinrewa@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail
                                size={20}
                                className="text-muted-foreground hover:text-foreground transition-all scale-100 hover:scale-115"
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Mail</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip >
                    <TooltipTrigger asChild>
                        <Link href={'https://instagram.com/1xashishtiwari'} target="_blank" rel="noopener noreferrer">
                            <Instagram
                                size={20}
                                className="text-muted-foreground hover:text-foreground transition-all scale-100 hover:scale-115"
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Instagram</p>
                    </TooltipContent>
                </Tooltip>

            </div>
        </div>
    );
};

export default Contact;