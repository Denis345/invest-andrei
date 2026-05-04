import { getPayload } from "payload"
import config from '@/payload.config'
export const dynamic = 'force-dynamic'
import ServicesSection from "@/components/ServicesSection"

import './styles.css'
import {getStoryblok} from "@/lib/storyblok"
import { getStoryblokApi } from "@storyblok/react/rsc"
import { StoryblokServerComponent } from "@storyblok/react/rsc"



export default async function HomePage() {
  const payload = await getPayload({config})
  const services = await payload.find({
    collection:"services",
  })

  getStoryblok()
  const storyblokApi = getStoryblokApi()


  const {data} = await storyblokApi.get("cdn/stories/home", {
    version:"draft"
  })


   const body = data.story.content.body
    

  return (
<main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
  <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative">
      {body.map((el)=>{
        if(el.component==="faq"){
          return(
             <>
              <ServicesSection services={services.docs} />
              <StoryblokServerComponent key={el._uid} blok={el} />
            </>
          )
        }
        return <StoryblokServerComponent key={el._uid} blok={el} />
        })}
   
  </div>

</main>
)
}
