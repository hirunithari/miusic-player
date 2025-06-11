
import { useState } from "react";
import { Card } from "@/components/ui/card";
import PlayButton from "./PlayButton";
import VolumeControl from "./VolumeControl";
import ProgressBar from "./ProgressBar";
import TrackInfo from "./TrackInfo";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    skipNext,
    skipPrevious,
    setVolume,
    toggleMute,
    seekTo
  } = useMusicPlayer();

  return (
    <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-6 shadow-2xl">
      <div className="space-y-6">
        {/* Album Art */}
        <div className="relative group">
          <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-lg">
            <img
              src={currentTrack.artwork}
              alt={currentTrack.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Track Info */}
        <TrackInfo track={currentTrack} />

        {/* Progress Bar */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={seekTo}
        />

        {/* Controls */}
        <div className="flex items-center justify-between">
          <VolumeControl
            volume={volume}
            isMuted={isMuted}
            onVolumeChange={setVolume}
            onToggleMute={toggleMute}
          />
          
          <div className="flex items-center space-x-4">
            <button
              onClick={skipPrevious}
              className="text-white/70 hover:text-white transition-colors"
            >
              <SkipBack size={24} />
            </button>
            
            <PlayButton isPlaying={isPlaying} onToggle={togglePlay} />
            
            <button
              onClick={skipNext}
              className="text-white/70 hover:text-white transition-colors"
            >
              <SkipForward size={24} />
            </button>
          </div>

          <div className="w-20" /> {/* Spacer for symmetry */}
        </div>
      </div>
    </Card>
  );
};

// Import icons at the top
import { SkipBack, SkipForward } from "lucide-react";

export default MusicPlayer;
