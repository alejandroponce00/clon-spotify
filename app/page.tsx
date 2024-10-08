import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Spotify</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-spotify-lightBlack p-4 rounded-lg hover:bg-spotify-darkGray transition-colors">
            <div className="w-full aspect-square bg-spotify-darkGray mb-4 rounded-md"></div>
            <h3 className="font-semibold mb-1">Playlist {i}</h3>
            <p className="text-sm text-spotify-darkGray">Artist Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}