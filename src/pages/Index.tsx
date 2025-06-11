
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/search">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <User size={20} className="mr-2" />
              Login
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Music Player</h1>
          <p className="text-purple-200">Enjoy your favorite tracks</p>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Index;
