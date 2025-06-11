
import { useState, useEffect } from "react";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
}

const sampleTracks: Track[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    artist: "Luna Sound",
    album: "Night Vibes",
    artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    duration: 240
  },
  {
    id: "2",
    title: "Electric Pulse",
    artist: "Neon Waves",
    album: "Digital Horizon",
    artwork: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    duration: 195
  },
  {
    id: "3",
    title: "Ocean Breeze",
    artist: "Calm Collective",
    album: "Serenity",
    artwork: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    duration: 210
  }
];

export const useMusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);

  const currentTrack = sampleTracks[currentTrackIndex];
  const duration = currentTrack.duration;

  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    const nextIndex = (currentTrackIndex + 1) % sampleTracks.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const skipPrevious = () => {
    const prevIndex = currentTrackIndex === 0 ? sampleTracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const seekTo = (time: number) => {
    setCurrentTime(time);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    skipNext,
    skipPrevious,
    setVolume: handleVolumeChange,
    toggleMute,
    seekTo
  };
};
