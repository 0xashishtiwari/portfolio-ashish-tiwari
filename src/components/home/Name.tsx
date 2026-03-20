'use client';

import { useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import avatar from "../../assets/avatar.png";
import { Button } from "../ui/button";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import Link from "next/link";

const Name = () => {
  const [copied, setCopied] = useState(false);

  const email = "ashishinrewa@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <div className="py-12 sm:pt-28 lg:pt-28 px-4 flex flex-col sm:flex-row gap-6 items-center sm:items-start mt-6">

      {/* Avatar */}
      <div className="rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 border-2 border-secondary shrink-0 shadow-sm">
        <Image
          src={avatar}
          alt="Ashish Tiwari"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 text-center sm:text-left max-w-xl">

        {/* Name + Badge */}
        <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight ">
            Ashish Tiwari
          </h1>

        <Badge
  variant="outline"
  className="flex items-center gap-2 px-2.5 py-0.5 text-xs font-medium 
  text-emerald-500 border-emerald-200 bg-background/50 rounded-full"
>
  <span className="relative flex h-3 w-3">
    {/* Bigger pulse */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping [animation-duration:1.8s]"></span>

    {/* Inner dot */}
    <span className="relative inline-flex h-2 w-2 m-auto rounded-full bg-emerald-500"></span>
  </span>

  <span className="hidden sm:inline font-semibold py-1">
    On a Mission
  </span>
</Badge>
        </div>

        {/* Role / Tagline */}
        <p className="text-sm text-muted-foreground font-medium">
          Pixels • Logic • Performance
        </p>

        {/* Email */}
        <div className="flex items-center gap-2 text-sm justify-center sm:justify-start flex-wrap">

          <a
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-foreground transition-colors break-all"
          >
            {email}
          </a>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyEmail}
            aria-label="Copy email"
            className="h-8 w-8"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>

        </div>

        {/* CTA (optional but powerful) */}
        <div className="flex justify-center sm:justify-start mt-2">
       <div className="flex gap-3 flex-wrap justify-center sm:justify-start mt-3">

  {/* Primary CTA */}
  <Button
    asChild
    className="text-sm px-5 py-2.5 rounded-lg font-medium
    transition-all duration-200 ease-out
    hover:scale-[1.03] active:scale-[0.98]"
  >
    <Link
      href="https://codolio.com/profile/heyashish"
      target="_blank"
      className="flex items-center"
    >
      Codolio
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>

  {/* Secondary CTA */}
  <Button
    asChild
    variant="outline"
    className="text-sm px-5 py-2.5 rounded-lg
    transition-all duration-200 ease-out
    hover:scale-[1.03] active:scale-[0.98]"
  >
    <Link href="/projects" className="flex items-center">
      Projects
    </Link>
  </Button>

</div>
        </div>

      </div>
    </div>
  );
};

export default Name;