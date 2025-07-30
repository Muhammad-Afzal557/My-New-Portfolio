import AboutPage from '@/components/AboutMe'
import Hero from '@/components/Hero'
import SkillPage from './skills/page'
import Contact from './contact/page'
import BlogPage from '@/components/Blogpage'

const Home = () => {
  return (
    <div className='w-full mx-auto bg-gray-400 overflow-hidden '>
      <Hero />
      <AboutPage />
      <SkillPage />
      <Contact/>
      <BlogPage/>
     
    </div>
  )
}

export default Home
