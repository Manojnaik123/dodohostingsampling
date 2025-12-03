import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Overview from './components/Overview'

export default function Home() {
  return (
    <main className='h-screen flex flex-col  sm:flex sm:flex-row'>
      <NavBar/>
      <Overview/>
    </main>
  )
}
