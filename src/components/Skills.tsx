



import React from 'react'
import { descSkill } from '@/lib/dynamicSkill'
import Link from 'next/link'

const Skill = () => {
  return (
    <section className="py-10 px-4 w-full bg-gradient-to-tr from-gray3100 to-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">My Skills</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {descSkill.map((item) => (
          <Link href={`/descSkill/${item.id}`} key={item.id}>
            <div className="p-4 rounded-xl border border-orange-500 bg-gradient-to-tr from-sky-600 to-indigo-700 text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer h-full flex flex-col justify-between">
              
              <p className="text-lg font-semibold text-center border border-white py-2 rounded-tl-full rounded-br-full">
                {item.skill}
              </p>
              
              <p className="text-sm text-gray-200 mt-3 text-center line-clamp-2">
                {item.desc}
              </p>
              
              <div className="flex justify-center mt-4">
                <button className="border border-white px-4 py-1 rounded-bl-full rounded-tr-full text-sm bg-white text-blue-700 hover:bg-blue-100 transition">
                  View Details
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Skill



