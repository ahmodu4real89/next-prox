import Link from "next/link"

type User = {
    id: string,
    name: string,
    username: string,
    email: string
    phone: string
}

export default async function fetctApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await response.json()


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 p-8">
                <Link
                    href={"/"}
                    className="inline-block px-8 py-3 mb-8 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:scale-105"
                >
                    ← Back
                </Link>

                <ul className="space-y-6 max-w-3xl mx-auto">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="p-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl text-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                        >
                            <Link href={`/users/${user.id}`} className="block space-y-2">
                                <div className="font-extrabold text-xl text-purple-700">{user.name}</div>
                                <div className="text-md space-y-1">
                                    <div><span className="font-semibold text-gray-600">Username:</span> {user.username}</div>
                                    <div><span className="font-semibold text-gray-600">Email:</span> {user.email}</div>
                                    <div><span className="font-semibold text-gray-600">Phone:</span> {user.phone}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>


    )
}