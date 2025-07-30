export default function AboutPage() {
  return (
    <section className="w-full mx-auto bg-gradient-to-br from-gray-400 to-gray-300">
      <main className="max-w-4xl mx-auto px-6 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

        <p className="text-lg text-gray-800 mb-6">
          Hello! 👋 I&apos;m <strong>Afzal Soomro</strong>, a passionate Full Stack Developer from Pakistan with hands-on experience in modern web technologies including <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Python</strong>. I build beautiful, fast, and scalable applications.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          I specialize in frontend development and love creating clean UI/UX. Currently, I&apos;m diving deep into <strong>Agentic AI</strong> and exploring tools like <strong>OpenAI Agents SDK</strong>, <strong>LangGraph</strong>, and <strong>Swarm</strong> to build intelligent, autonomous apps.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          My learning never stops — I continuously explore backend technologies like Node.js, MongoDB, and REST APIs. I also share my journey through blogging and open-source contributions.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Outside of coding, I enjoy helping others grow in tech, writing educational content, and building tools that solve real-world problems.
        </p>

        <div className="mt-10 text-center">
          <a
            href="/resumes/yasir-soomro.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download My Resume
          </a>
        </div>
      </main>
    </section>
  )
}
