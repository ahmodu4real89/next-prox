import { Search } from "@/components/search";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-[family-name:var(--font-geist-sans)]">
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 mx-4 mt-4 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 transition-all duration-300">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-2xl font-extrabold tracking-wider hover:scale-105 transition-transform duration-300">
              <Link href="/">ProX</Link>
            </div>
            <div className="flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/users", label: "User" },
                { href: "/post-sequence", label: "Post-sequence" },
                { href: "/product-db", label: "Products" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition"
                >
                  <span className="group-hover:text-gray-200 transition-colors duration-300">{link.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <main className="flex flex-1 items-center justify-center w-full px-8">
          <div className="w-full max-w-2xl">
            <Search />
          </div>
        </main>
      </div>
    </>


  );
}
