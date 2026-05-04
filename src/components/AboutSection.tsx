
import {AboutBlockT}  from  "@/types/styryblok"

export default function AboutSection({blok}:{blok:AboutBlockT}){
  console.log(blok)
    return(
        <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          {blok.eyebrow}
        </p>

        <h2 className="mb-5 text-3xl font-bold md:text-4xl">
          {blok.title}
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
           {blok.text}
        </p>
      </div>
    </section>
    )
}