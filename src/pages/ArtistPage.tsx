import { useParams } from "react-router-dom"
import { allLikedSongs } from "../data/songs"
import SongCard from "../components/SongCard"

export default function ArtistPage() {
  const { artistName } = useParams()

  const artist = decodeURIComponent(artistName ?? "")

  const artistSongs = allLikedSongs.filter(
    (song) =>
      song.artist.toLowerCase() === artist.toLowerCase() &&
      (song.rating === "like" || song.rating === "love")
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-8 pt-24">
      {/* Artist header */}
      <h1 className="text-4xl font-bold mb-8">
        {artist}
      </h1>

      {artistSongs.length === 0 ? (
        <p className="text-zinc-400">
          You haven’t liked or loved any songs from this artist yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artistSongs.map((song, index) => (
           <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  )
}
