import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

export default async function user({ params }: { params: Promise <{ id: string }> }) {
  const { id } = await params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user: User = await response.json()

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 p-8">
        <ul className="space-y-6 p-6 max-w-2xl w-full">
          <li
            key={user.id}
            className="p-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl text-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="font-extrabold text-2xl mb-4 text-purple-700">{user.name}</div>
            <div className="text-md space-y-2">
              <div><span className="font-semibold text-gray-600">Username:</span> {user.username}</div>
              <div><span className="font-semibold text-gray-600">Email:</span> {user.email}</div>
              <div><span className="font-semibold text-gray-600">Phone:</span> {user.phone}</div>
              <div><span className="font-semibold text-gray-600">Website:</span> {user.website}</div>
              <div><span className="font-semibold text-gray-600">Street:</span> {user.address.street}</div>
              <div><span className="font-semibold text-gray-600">City:</span> {user.address.city}</div>
            </div>

            <div className="mt-6">
              <Link
                href="/users"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
              >
                ← Back
              </Link>
            </div>
          </li>
        </ul>
      </div>


    </>
  )
}
