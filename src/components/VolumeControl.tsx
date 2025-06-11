
import { Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
}

const VolumeControl = ({ volume, isMuted, onVolumeChange, onToggleMute }: VolumeControlProps) => {
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeOff;
    if (volume < 30) return Volume;
    if (volume < 70) return Volume1;
    return Volume2;
  };

  const VolumeIcon = getVolumeIcon();

  return (
    <div className="flex items-center space-x-2 w-20">
      <button
        onClick={onToggleMute}
        className="text-white/70 hover:text-white transition-colors"
      >
        <VolumeIcon size={20} />
      </button>
      <div className="hidden sm:block w-16">
        <Slider
          value={[isMuted ? 0 : volume]}
          onValueChange={(value) => onVolumeChange(value[0])}
          max={100}
          step={1}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VolumeControl;
