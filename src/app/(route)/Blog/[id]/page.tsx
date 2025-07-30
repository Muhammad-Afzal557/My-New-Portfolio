



// import { Blog } from '@/lib/blog'
// import React from 'react'

// const Blogdetails = ({params}:{params:{id:string}}) => {
//     const blogData =  Blog.find((B) => B.id === params.id)
    
//   return (
//     <div className=' w-full bg-gray-200 py-10'>
//         <div className=' flex flex-col gap-5'>
//             <div className=' flex flex-col items-center justify-center space-y-1'>
//             <h1 className='text-4xl text-blue-600 transition-transform animate-bounce duration-1000 ease-in-out '>Blogs</h1>
//             <p className='border-b border-[4px] border-sky-600 w-32  rounded-md transition-transform scale-x-150 translate-x-5  duration-1000 ease-in-out'></p>
//             </div>

//             <div className='flex flex-col space-y-3'>
//           <span className='text-3xl'>{blogData?.title}</span>
//           <span>{blogData?.subTitle}</span>
//           <span>{blogData?.para}</span>
//           <span>{blogData?.section1}</span>
//           <span>{blogData?.section2}</span>
//           <span>{blogData?.section3}</span>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Blogdetails


import { Blog } from '@/lib/blog'
import React from 'react'

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const blogData = Blog.find((B) => B.id === params.id)

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Blog Details</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        {/* Blog Content */}
        {blogData ? (
          <article className="bg-white rounded-lg shadow-lg p-6 md:p-10 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">{blogData.title}</h2>
            <h3 className="text-lg font-medium text-gray-600">{blogData.subTitle}</h3>
            <p className="text-gray-700 leading-relaxed">{blogData.para}</p>

            {blogData.section1 && (
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">Section 1</h4>
                <p className="text-gray-700 whitespace-pre-line">{blogData.section1}</p>
              </div>
            )}

            {blogData.section2 && (
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">Section 2</h4>
                <p className="text-gray-700 whitespace-pre-line">{blogData.section2}</p>
              </div>
            )}

            {blogData.section3 && (
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">Section 3</h4>
                <p className="text-gray-700 whitespace-pre-line">{blogData.section3}</p>
              </div>
            )}
          </article>
        ) : (
          <p className="text-center text-red-600 text-lg">Blog not found.</p>
        )}
      </div>
    </div>
  )
}

export default BlogDetails

