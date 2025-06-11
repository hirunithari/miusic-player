
import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlayButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const PlayButton = ({ isPlaying, onToggle }: PlayButtonProps) => {
  return (
    <Button
      onClick={onToggle}
      size="lg"
      className="w-16 h-16 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-lg"
    >
      {isPlaying ? (
        <Music size={24} className="animate-pulse" />
      ) : (
        <Play size={24} className="ml-1" />
      )}
    </Button>
  );
};

export default PlayButton;
