import Link from "next/link"
import {HeroBlockT} from "@/types/styryblok"


export default function HeroSection({blok}:{blok: HeroBlockT}){
  console.log('-=-==-+_+wwa_+',blok)
    return(
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_420px]">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
    
          {blok.eyebrow}
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
      
          {blok.title}
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          {blok.description}

        </p>

        <Link
          href="/quiz"
          className="
          inline-flex rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white
          shadow-lg shadow-blue-500/25 transition
          hover:bg-blue-400
          active:scale-95 active:bg-blue-600
          "
        > 
          {blok.ctaLabel}
     
        </Link>
        <div  className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
            {blok.features?.map((el:string)=>(<span key={el}className="rounded-full border border-white/10 px-4 py-2">{el}</span> ))}
         </div>
      </div>

    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 to-cyan-500/10 blur-3xl" />
        <img
          src="/andrey1.png"
          alt="Калоша Андрей"
          className="relative h-[360px] w-full rounded-[2rem] border border-white/10 object-cover object-top shadow-2xl shadow-blue-950/70 md:h-[520px]"
        />
    </div>
    </section>
    )
}