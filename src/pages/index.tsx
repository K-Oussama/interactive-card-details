import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '../components/Card'
import Form from '../components/Form'
import { useState   } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cardData, setCardData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null })
  
  return (
<main className="flex md:flex-row flex-col min-h-screen justify-center items-center">
  <Card cardData={cardData} />
  <Form setCardData={setCardData} CardData={cardData} />
</main>
  )
}
