
interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
}

interface TrackInfoProps {
  track: Track;
}

const TrackInfo = ({ track }: TrackInfoProps) => {
  return (
    <div className="text-center space-y-1">
      <h2 className="text-xl font-bold text-white truncate">{track.title}</h2>
      <p className="text-purple-200 truncate">{track.artist}</p>
      <p className="text-sm text-white/60 truncate">{track.album}</p>
    </div>
  );
};

export default TrackInfo;
