import { getPayload } from "payload"
import  config  from "@payload-config"
import QuizForm from "@/components/QuizForm"
import Link from "next/link"

export default async function QuizPage(){

    const payload = await getPayload({config})

    const questions = await payload.find({
        collection:"quiz-questions"
    })
    
return (
  <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-10 text-white">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-3xl">
        <Link
    href="/"
    className="mb-6 inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-white"
  >
    ← Вернуться на главную
  </Link>
      <div className="mb-10 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Бесплатная диагностика
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Финансовый квиз
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
          Ответьте на несколько вопросов, чтобы Андрей смог оценить вашу ситуацию
          и понять, подходит ли вам диагностика.
        </p>
      </div>

      <QuizForm questions={questions.docs} />
    </div>
  </main>
)
}