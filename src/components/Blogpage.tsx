


import { Blog } from '@/lib/blog'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className="py-10 px-4 w-full bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Blogs on Important Topics in Tech Fields
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Blog.map((val) => (
            <div
              key={val.id}
              className="bg-white border shadow-md p-6 rounded-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{val.title}</h2>
              <h3 className="text-md font-medium text-gray-700 mb-1">{val.subTitle}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{val.para}
              

              </p>
              <Link href={`/Blog/${val.id}`} className=' flex items-center justify-center' >
              <button className=' text-white font-extralight text-xl bg-blue-500 border py-1 px-4 pb-3 border-neutral-200 capitalize mt-4  border-t-[10px] rounded-br-[100px] rounded-tl-[100px] animate-pulse shadow-lg shadow-blue-500'>see more</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
