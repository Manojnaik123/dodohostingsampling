import Image from 'next/image'
import Link from 'next/link'
import UserCard from './components/UserCard/UserCard'
export default function Home() {
  return (
    <main>
      <h1>hello world</h1>

      <Link href="/users">users</Link>
      <UserCard/>
    </main>
  )
}
