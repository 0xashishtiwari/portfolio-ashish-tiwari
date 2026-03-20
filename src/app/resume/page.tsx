import React from "react";
import { Button } from "@/components/ui/button";

const Resume = () => {


    return (


        <div className="min-h-screen max-w-2xl mx-auto py-24">

            {/* Header */}
            <div className="px-4">
                <div className="flex flex-col gap-2 tracking-tight">
                    <h1 className="text-3xl text-foreground">Resume</h1>
                    <p className="text-muted-foreground font-medium">
                        View and download my professional resume.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-6 border-t border-border" />

            {/* PDF Viewer */}
            <div className="mt-6 px-4 w-full">
                <iframe
                    src="https://drive.google.com/file/d/1cwr6LhiYNLkMPAFEB6vAHincvSXVNu9c/preview"
                    className="w-full h-[600px] rounded-md border"
                    allow="autoplay"
                ></iframe>
            </div>

           
        </div>
    );
};

export default Resume;