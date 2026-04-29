import ServicesAbout from "@/components/ServicesAbout"

import {
  Wallet,
  CreditCard,
  PiggyBank,
  Coins,
  TrendingUp,
  LineChart,
  Target,
  Brain,
  Lightbulb,
  Compass,
  Repeat,
  RefreshCw,
  Activity,
  Shield,
  Lock,
} from "lucide-react"

const iconMap = {
  wallet: Wallet,
  creditCard: CreditCard,
  piggyBank: PiggyBank,
  coins: Coins,

  growth: TrendingUp,
  chart: LineChart,
  target: Target,

  brain: Brain,
  lightbulb: Lightbulb,
  compass: Compass,

  repeat: Repeat,
  refresh: RefreshCw,
  activity: Activity,

  shield: Shield,
  lock: Lock,
}

type Service = {
  id: string | number
  title: string
  description: string
  order: number
   icon?: keyof typeof iconMap | null
}

export default function ServiceCard({services}:{services:Service[]}){
    return(
    <section className="mx-auto max-w-6xl px-6 pb-24">

       <ServicesAbout/>
      <div className="grid gap-6 md:grid-cols-3">
        {services
          .sort((a: any, b: any) => a.order - b.order)
          .map((service:Service) => {
            const Icon = service.icon?  iconMap[service.icon]: null

            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
              >
                {Icon && (
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20">
                    <Icon className="h-6 w-6 text-blue-400 transition group-hover:scale-110" />
                  </div>
                )}

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-300">
                  {service.description}
                </p>
              </div>
            )
          })}
      </div>
    </section>
    )
}