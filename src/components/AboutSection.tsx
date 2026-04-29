export default function AboutSection(){
    return(
        <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          О консультанте
        </p>

        <h2 className="mb-5 text-3xl font-bold md:text-4xl">
          Калоша Андрей
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Андрей помогает людям навести порядок в личных финансах:
          разобраться с доходами и расходами, сформировать финансовую подушку
          и выстроить понятный план движения к целям.
        </p>
      </div>
    </section>
    )
}