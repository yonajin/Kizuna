export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 px-6 py-12 text-center text-sm text-neutral-400">
      <p className="mb-4">
        Made by <span className="text-neutral-200">Yonajin</span>
      </p>

      <p className="mb-6">
        © 2026 Fiona Gene
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/about"
          className="hover:text-neutral-200 transition"
        >
          About
        </a>

        <a
          href="https://github.com/yonajin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-200 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
