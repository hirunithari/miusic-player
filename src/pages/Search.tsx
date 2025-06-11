
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Music, Play, User } from "lucide-react";
import { Link } from "react-router-dom";

interface SearchResult {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
    artwork: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    duration: "6:30",
    artwork: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    duration: "8:02",
    artwork: "/placeholder.svg"
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Simulate search API call
    setTimeout(() => {
      setSearchResults(mockSearchResults);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">
              ← Back to Player
            </Link>
            <Link to="/login" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <User size={20} />
              Login
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Search Music</h1>
          <p className="text-purple-200">Find your favorite songs and artists</p>
        </div>

        {/* Search Form */}
        <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-6 mb-8 shadow-2xl">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for songs, artists, or albums..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button
              type="submit"
              disabled={isSearching}
              className="bg-white text-black hover:bg-white/90 transition-all duration-200"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </form>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={result.artwork}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{result.title}</h3>
                    <p className="text-purple-200 truncate">{result.artist}</p>
                    <p className="text-white/60 text-sm truncate">{result.album}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-white/60 text-sm">{result.duration}</span>
                    <Button
                      size="icon"
                      className="bg-white text-black hover:bg-white/90 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <Play size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Empty State */}
        {searchQuery && !isSearching && searchResults.length === 0 && (
          <Card className="bg-black/20 backdrop-blur-lg border-white/10 p-12 text-center shadow-2xl">
            <Music className="h-16 w-16 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-white/60">Try searching with different keywords</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Search;
