export type Song = {
  title: string
  artist: string
  rating: "like" | "love"
  genres: string[]
  cover?: string
  lyric?: string
  variant: "midnight" | "lyric" | "favorite"
}

export const midnightPlays: Song[] = [
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
]

export const lyricsThatStayed: Song[] = [
  {
    title: "Multo",
    artist: "Cup of Joe",
    lyric: "Hindi na makalaya, dinadalaw mo'ko bawat gabi.",
    rating: "like",
    genres: ["pop", "sad"],
    variant: "lyric",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    lyric: "Hindi na makalaya, dinadalaw mo'ko bawat gabi.",
    rating: "like",
    genres: ["pop", "sad"],
    variant: "lyric",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    lyric: "Hindi na makalaya, dinadalaw mo'ko bawat gabi.",
    rating: "like",
    genres: ["pop", "sad"],
    variant: "lyric",
  },
]

export const lovedAndLiked = [
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    rating: "love",
    genres: ["r&b", "chill"],
    cover: "/covers/pink-white.jpg",
    variant: "favorite",
  },
  {
    title: "Tadhana",
    artist: "Up Dharma Down",
    rating: "like",
    genres: ["opm"],
    cover: "/covers/tadhana.jpg",
    variant: "favorite",
  },
  {
    title: "Tadhana",
    artist: "Up Dharma Down",
    rating: "like",
    genres: ["opm"],
    cover: "/covers/tadhana.jpg",
    variant: "favorite",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["indie", "sad"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
]


