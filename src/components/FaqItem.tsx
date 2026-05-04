import {FaqItemT} from '@/types/styryblok'

export default function FaqItem({ blok }: { blok: FaqItemT }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-blue-400/30 hover:bg-white/[0.07]">
      <h3 className="mb-3 text-lg font-semibold text-white">
        {blok.question}
      </h3>

      <p className="leading-7 text-slate-300">
        {blok.answer}
      </p>
    </div>
  )
}