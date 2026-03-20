import React from 'react'

const SpotifySkeleton = () => {
  return (
     <div className="px-4 py-6 flex flex-col gap-4">
    
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 bg-muted rounded-md animate-pulse" />
            <div className="h-6 w-20 bg-muted rounded-md animate-pulse" />
          </div>
    
          {/* Card */}
          <div className="flex items-center gap-4 rounded-xl border border-border p-3">
            <div className="w-16 h-16 rounded-lg bg-muted animate-pulse" />
    
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 w-3/4 bg-muted rounded-md animate-pulse" />
              <div className="h-3 w-1/2 bg-muted rounded-md animate-pulse" />
              <div className="h-3 w-1/3 bg-muted rounded-md animate-pulse" />
            </div>
          </div>
        </div>
  )
}

export default SpotifySkeleton