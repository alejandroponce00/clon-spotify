"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-lightBlack border-t border-spotify-darkGray p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-spotify-darkGray rounded-md mr-4"></div>
          <div>
            <h4 className="font-semibold">Song Title</h4>
            <p className="text-sm text-spotify-darkGray">Artist Name</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <Button variant="ghost" size="icon" className="text-spotify-white">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="mx-2 text-spotify-white" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-spotify-white">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <Slider className="w-80" />
        </div>
        <div className="flex items-center">
          <Volume2 className="h-5 w-5 mr-2 text-spotify-white" />
          <Slider className="w-24" />
        </div>
      </div>
    </div>
  );
}