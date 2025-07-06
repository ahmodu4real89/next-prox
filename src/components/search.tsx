import Form from "next/form"
export const Search=()=>{
return(
    <Form action={"/product-db"} className="flex gap-2">
       <input
        name="query"
        className="w-full h-16 rounded-xl px-6 py-4 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300" 
        placeholder="Search products"/>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
      </Form>
)
}