export type Song = {
  id: number
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
    id: 1,
    title: "Multo",
    artist: "Cup of Joe",
    rating: "love",
    genres: ["synthpop", "pop rock", "p-pop"],
    cover: "../covers/silakbo.jpg",
    variant: "midnight",
  },
  {
    id: 2,  
    title: "Space Song",
    artist: "Beach House",
    rating: "love",
    genres: ["dream pop"],
    cover: "../covers/depression_cherry.jpg",
    variant: "midnight",
  },
  {
    id: 3,
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
    id: 10,
    title: "Multo",
    artist: "Cup of Joe",
    lyric: "Hindi na makalaya, dinadalaw mo'ko bawat gabi.",
    rating: "like",
    genres: ["pop", "sad"],
    variant: "lyric",
  },
  {
    id: 11,
    title: "Multo",
    artist: "Cup of Joe",
    lyric: "Hindi na makalaya, dinadalaw mo'ko bawat gabi.",
    rating: "like",
    genres: ["pop", "sad"],
    variant: "lyric",
  },
  {
    id: 12,
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
    id: 4,
    title: "Nightcall",
    artist: "Kavinsky",
    rating: "like",
    genres: ["synthpop", "electro"],
    cover: "/covers/nightcall.jpg",
    variant: "favorite",
  },
  {
    id: 5,
    title: "Sofia",
    artist: "Clairo",
    rating: "like",
    genres: ["eurodisco", "dance-rock", "soft rock"],
    cover: "/covers/immunity.jpg",
    variant: "favorite",
  },
  {
    id: 6,
    title: "Huwag Ka Sanang Magagalit",
    artist: "Unique Salonga",
    rating: "like",
    genres: ["alternative/indie"],
    cover: "/covers/pangalan.jpg",
    variant: "favorite",
  },
  {
    id: 7,
    title: "Twilight",
    artist: "bôa",
    rating: "like",
    genres: ["alternative/rock"],
    cover: "../covers/twilight.jpg",
    variant: "favorite",
  },
  {
    id: 8,
    title: "We Don't Talk Anymore",
    artist: "Charlie Puth, Selena Gomez",
    rating: "love",
    genres: ["pop"],
    cover: "../covers/nine_track_mind.jpg",
    variant: "favorite",
  },
  {
    id: 9,
    title: "Let Down",
    artist: "Radiohead",
    rating: "love",
    genres: ["alternative/rock"],
    cover: "../covers/okcomputer.jpg",
    variant: "favorite",
  },
]

export const allLikedSongs: Song[] = [
  ...midnightPlays,
  ...lyricsThatStayed,
  ...lovedAndLiked,
]


