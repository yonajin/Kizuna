import type { Song } from "../data/songs"

// type SongCardProps = {
//   title: string
//   artist: string
//   lyric: string
//   rating: "like" | "love"
//   genres: string[]
//   cover?: string
//   variant: "midnight" | "lyric" | "favorite"
// }

type SongCardProps = {
  song: Song
}

export default function SongCard( { song }: SongCardProps) {
  const {
    title,
    artist,
    lyric,
    rating,
    genres,
    cover,
    variant,
  } = song

  // 📜 LYRICS THAT STAYED — FEATURED LYRIC CARD
  if (variant === "lyric") {
    return (
     <div className="bg-neutral-800 rounded-2xl p-8 min-h-[240px] flex flex-col justify-between">
  <div className="relative bg-neutral-900/70 rounded-xl p-6">
  <span className="absolute -top-3 left-4 text-4xl text-neutral-600">“</span>
  <p className="text-xl md:text-2xl italic leading-relaxed text-neutral-200 text-center">
    {lyric}
  </p>
  <span className="absolute -bottom-7 right-4 text-4xl text-neutral-600">”</span>
</div>


  <div className="flex items-center justify-between mt-6">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-neutral-400">{artist}</p>
    </div>

    <span className="text-2xl">
      {rating === "love" ? "💖" : "❤️"}
    </span>
  </div>
</div>

    )
  }

  // ❤️💖 LOVED & LIKED — COMPACT FAVORITE CARD
if (variant === "favorite") {
  return (
    <div className="bg-neutral-800 rounded-xl p-4 space-y-4">
      {cover && (
        <img
          src={cover}
          alt={`${title} album cover`}
          className="w-full aspect-square object-cover rounded-lg"
        />
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-neutral-400">{artist}</p>
        </div>

        <span className="text-xl">
          {rating === "love" ? "💖" : "❤️"}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <span
            key={genre}
            className="text-xs px-2 py-1 rounded-full bg-neutral-700 text-neutral-300"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  )
}

  // 🌙 MIDNIGHT PLAYS — WITH ALBUM IMAGE
  return (
    <div className="bg-neutral-800 rounded-xl p-4 space-y-4">
      {cover && (
        <img
          src={cover}
          alt={`${title} album cover`}
          className="w-full aspect-square object-cover rounded-lg"
        />
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-neutral-400">{artist}</p>
        </div>

        <span className="text-xl">
          {rating === "love" ? "💖" : "❤️"}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <span
            key={genre}
            className="text-xs px-2 py-1 rounded-full bg-neutral-700 text-neutral-300"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  )

}
