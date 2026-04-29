'use client'
import {useState} from 'react'


export default function QuizForm({questions}:any){
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    function check(){
        for(let i=0; i<questions.length; i++){
    
            if(questions[i].required){
                const requiredId = questions[i].id
                if(!answers[requiredId]){

                    return false
                }
            }
        }
        return true
    }


    const handleSubmit = function(e:any){
        e.preventDefault()

         const arr = Object.entries(answers)

         if (!check()) {
            setError('Заполните обязательные вопросы')
            return
            }
        setError('')

         arr.map((el)=>{
             el[0] = questions.find((elf:any)=>((elf.id===Number(el[0])))).question
         })

        
        const newArr = arr.map((el)=>({
                "question":el[0],
                "answer":el[1]
        }))
       
        
        fetch("/api/leads", 
            {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({
                    "name":newArr[0]?.answer || "",
                    "contact":newArr[1]?.answer || "", 
                    "answers":newArr
                })
            }
        )

             setIsSubmitted(true)
        }

       

    // {4: '323', 5: 'иногда', 6: 'да', 7: 'Ден'}
    //  =>[{question: "...", answeer:"..."}, {...}  ...  ...]



    return (
    isSubmitted ? (
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-white">
        <h1 className="mb-4 text-3xl font-bold">Спасибо!</h1>
        <p className="text-slate-300">
            Мы изучим ваши ответы и свяжемся с вами, если диагностика вам подходит.
        </p>
        </div>
    ) : (
        <form 
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl shadow-black/40 backdrop-blur md:p-8"
        >        
            {
                (questions.sort((a:any, b:any)=>a.order-b.order)).map((el:any)=>(

                    <div key={el.id} className="mb-5">
                        <p className="mb-2 font-medium text-slate-100">
                            {el.question}
                            {el.required && <span className="ml-1 text-blue-400">*</span>}
                        </p>
                        {el.type==="number" && <input type="number" className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10" onChange={(e)=>{setAnswers({...answers, [el.id]:e.target.value})}} />}
                        {el.type==="text" && <input type="text" className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10" onChange={(e)=>{setAnswers({...answers, [el.id]:e.target.value})}} />}
                        {
                            (
                                el.type==="select" &&
                                <select className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10" onChange={(e)=>{setAnswers({...answers, [el.id]:e.target.value})}}>{
                                        el.options.map((opt:any)=>(
                                        
                                                <option key={opt.value} >{opt.value}  </option>
                                        
                                        ))
                                    }
                                </select>
                            )

                        }


                    </div>

                ))
            }
             {error && (
                <p className="mb-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                </p>
                )}
            <button
  type="submit"
  className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
>
  Отправить заявку
</button>
        </form>
)
        
    )
}