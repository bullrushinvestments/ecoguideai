import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoGuideAI',
  description: 'EcoGuideAI is an AI-driven platform that offers personalized sustainability advice to e-commerce businesses and shoppers, helping them reduce their carbon footprint through actionable insights and product recommendations.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoGuideAI</h1>
      <p className="mt-4 text-lg">EcoGuideAI is an AI-driven platform that offers personalized sustainability advice to e-commerce businesses and shoppers, helping them reduce their carbon footprint through actionable insights and product recommendations.</p>
    </main>
  )
}
