import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"

type NavbarProps = {
  selectedArtist: string | null
  setSelectedArtist: (artist: string) => void
}

const artists = [
  "Radiohead",
  "Billie Eilish",
  "Joji",
  "The 1975",
  "IV of Spades",
]

const genres = ["Pop", "R&B", "Indie", "Synthpop", "P-pop"]
const ratings = ["❤️", "💖"]
const sortOptions = [
  "Artist A–Z",
  "Artist Z–A",
]

export default function Navbar({ selectedArtist, setSelectedArtist }: NavbarProps) {
  const navigate = useNavigate()
  const [open, setOpen] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("Artist A–Z")

  /* 🔽 NEW: scroll logic */
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    if (latest > previous && latest > 80) {
      setHidden(true)   // scrolling down
    } else {
      setHidden(false)  // scrolling up
    }
  })

  return (
    <motion.nav
      /* 🔽 NEW: animation */
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-black text-white px-12 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide">
        Kizuna
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8 relative">

          {/* 🎤 Artist */}
<Dropdown
  label={selectedArtist ? `Artist: ${selectedArtist}` : "Artist"}
  items={artists}
  open={open}
  setOpen={setOpen}
  onSelect={(artist) => {
    setSelectedArtist(artist)
    navigate(`/artist/${encodeURIComponent(artist)}`)
  }}
  showSeeMore
/>


        <Dropdown
  label="Genre"
  items={genres}
  open={open}
  setOpen={setOpen}
  showSeeMore
  onSelect={(value) => {
    console.log("Selected genre:", value)
  }}
/>
        <Dropdown label="Rating" items={ratings} open={open} setOpen={setOpen} />

          {/* 🔽 NEW: Sort */}
  <Dropdown
    label={`Sort by `}
    items={sortOptions}
    open={open}
    setOpen={setOpen}
    onSelect={(value) => setSortBy(value)}
  />

        {/* Search */}
        <input
          type="text"
          placeholder="Search music..."
          className="ml-4 px-4 py-2 rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </motion.nav>
  )
}

/* ---------- Dropdown Component ---------- */

type DropdownProps = {
  label: string
  items: string[]
  open: string | null
  setOpen: (value: string | null) => void
  onSelect?: (value: string) => void
  showSeeMore?: boolean
}

function Dropdown({
  label,
  items,
  open,
  setOpen,
  onSelect,
  showSeeMore,
}: DropdownProps) {
  const isOpen = open === label

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(label)}
      onMouseLeave={() => setOpen(null)}
    >
      <button className="text-sm font-medium hover:text-pink-400 transition">
        {label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-8 left-0 w-48 bg-zinc-900 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {items.map((item) => (
              <motion.button
                key={item}
                whileHover={{ backgroundColor: "#27272a" }}
                onClick={() => {
                  onSelect?.(item)
                  setOpen(null)
                }}
                className="block w-full text-left px-4 py-2 text-sm"
              >
                {item}
              </motion.button>
            ))}

            {/* 👇 See more */}
            {showSeeMore && (
              <>
                <div className="h-px bg-zinc-800 my-1" />
                <button
                  onClick={() => {
                    setOpen(null)
                    console.log("Open artist modal / page")
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-pink-400 hover:bg-zinc-800 transition"
                >
                  See more…
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


