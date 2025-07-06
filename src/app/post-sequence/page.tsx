import { Suspense } from "react"
import Author from "./author"
import Link from "next/link"

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}


export default async function userPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await response.json()
  const filteredPost = posts.filter((post) => post.id % 10 === 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href={'/'}
          className="inline-block mb-8 px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition transform hover:scale-105"
        >
          ← Back 
        </Link>

        <h1 className="text-4xl font-extrabold mb-12 text-purple-800 tracking-wide">Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPost.map((post) => (
            <div
              key={post.id}
              className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 leading-tight hover:text-purple-700 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{post.body}</p>

              <Suspense fallback={<div className="text-sm text-gray-500">Loading Author...</div>}>
                <Author userId={post.userId} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
