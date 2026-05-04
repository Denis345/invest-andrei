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


export const iconMap = {
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

export type Service = {
  id: string | number
  title: string
  description: string
  order: number
   icon?: keyof typeof iconMap | null
}