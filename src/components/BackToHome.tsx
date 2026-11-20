import Link from "next/link";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="fixed left-4 top-24 z-40 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-gray-900/85 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/70 hover:bg-purple-500/20 hover:text-pink-200 hover:shadow-xl hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 sm:left-6 sm:px-5 sm:text-base"
      aria-label="Back to home page"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back to Home
    </Link>
  );
}
