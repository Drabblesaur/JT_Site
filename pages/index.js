import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <div className="bg-brand-gray"></div>
    </div>
  )
}
