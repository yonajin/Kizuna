type Song = {
  id: number
  title: string
  artist: string
}

type Props = {
  songs: Song[]
  selectedArtist: string | null
}

export default function SongList({ songs, selectedArtist }: Props) {
  const filteredSongs = selectedArtist
    ? songs.filter(song => song.artist === selectedArtist)
    : songs

  return (
    <div className="px-8 grid gap-4">
      {filteredSongs.map(song => (
        <div
          key={song.id}
          className="rounded-lg bg-zinc-900 p-4 text-white"
        >
          <p className="font-medium">{song.title}</p>
          <p className="text-sm text-zinc-400">{song.artist}</p>
        </div>
      ))}
    </div>
  )
}
