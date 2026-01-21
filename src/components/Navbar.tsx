import { useState } from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"

const genres = ["Pop", "Rock", "Hip-Hop", "R&B", "Indie"]
const ratings = ["❤️", "💖"]

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)

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
      className="fixed top-0 left-0 z-50 w-full bg-black text-white px-8 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide">
        Kizuna
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8 relative">
        <Dropdown label="Genre" items={genres} open={open} setOpen={setOpen} />
        <Dropdown label="Rating" items={ratings} open={open} setOpen={setOpen} />

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
}

function Dropdown({ label, items, open, setOpen }: DropdownProps) {
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
            className="absolute top-8 left-0 w-40 bg-zinc-900 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {items.map((item) => (
              <motion.button
                key={item}
                whileHover={{ backgroundColor: "#27272a" }}
                className="block w-full text-left px-4 py-2 text-sm"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
