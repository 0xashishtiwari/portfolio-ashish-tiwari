'use client';

import { useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import avatar from "../../assets/avatar.png";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";

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

      {/* Profile Image */}
      <div className="rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 border-4 border-secondary shrink-0">
        <Image
          src={avatar}
          alt="Ashish Tiwari"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 text-center sm:text-left">

        <h1 className="text-2xl sm:text-3xl font-bold font-serif">
          Ashish Tiwari
        </h1>

        <p className="text-sm text-muted-foreground font-medium">
          Programmer • Developer • Blogger
        </p>

        {/* Status + Email */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">

          {/* Online Badge */}
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs flex items-center gap-2 w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            <span className="text-green-500 text-sm font-semibold">
              Online
            </span>
          </Badge>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm max-w-full">

            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:underline break-all"
            >
              {email}
            </a>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopyEmail}
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;