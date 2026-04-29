import { getPayload } from "payload"
import config from '@/payload.config'
export const dynamic = 'force-dynamic'

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"

import './styles.css'



export default async function HomePage() {
  const payload = await getPayload({config})
  const services = await payload.find({
    collection:"services",
  })


  return (
<main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
  <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative">
    <HeroSection />
    <AboutSection />
    <ServicesSection services={services.docs} />
  </div>
</main>
)
}
