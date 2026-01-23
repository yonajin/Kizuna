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
    genres: ["synthpop", "pop rock", "p-pop"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["synthpop", "pop rock", "p-pop"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["synthpop", "pop rock", "p-pop"],
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
    title: "Nightcall",
    artist: "Kavinsky",
    rating: "like",
    genres: ["synthpop", "electro"],
    cover: "/covers/nightcall.jpg",
    variant: "favorite",
  },
  {
    title: "Sofia",
    artist: "Clairo",
    rating: "like",
    genres: ["eurodisco", "dance-rock", "soft rock"],
    cover: "/covers/immunity.jpg",
    variant: "favorite",
  },
  {
    title: "Huwag Ka Sanang Magagalit",
    artist: "Unique Salonga",
    rating: "like",
    genres: ["alternative/indie"],
    cover: "/covers/pangalan.jpg",
    variant: "favorite",
  },
  {
    title: "Twilight",
    artist: "bôa",
    rating: "like",
    genres: ["alternative/rock"],
    cover: "../covers/twilight.jpg",
    variant: "favorite",
  },
  {
    title: "We Don't Talk Anymore",
    artist: "Charlie Puth, Selena Gomez",
    rating: "love",
    genres: ["pop"],
    cover: "../covers/nine_track_mind.jpg",
    variant: "favorite",
  },
  {
    title: "Let Down",
    artist: "Radiohead",
    rating: "love",
    genres: ["alternative/rock"],
    cover: "../covers/okcomputer.jpg",
    variant: "favorite",
  },
]

export const songs = [
  { id: 1, title: "Creep", artist: "Radiohead" },
  { id: 2, title: "No Surprises", artist: "Radiohead" },
  { id: 3, title: "Lowkey", artist: "NIKI" },
  { id: 4, title: "Karma Police", artist: "Radiohead" },
  { id: 5, title: "Valentine", artist: "Laufey" },
]

