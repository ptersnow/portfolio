import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

import Head from 'next/head'

export default function Home() {
  return (
        <>
            <Head>
                <title>Pedro's Portfolio</title>
                <meta name="description" content="Pedro's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full h-screen'>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}
