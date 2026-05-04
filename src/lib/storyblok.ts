import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import FaqSection from "@/components/FaqSection"
import FaqItem from   "@/components/FaqItem"

export const getStoryblok = () => {
    console.log("Storyblok token exists:", Boolean(process.env.STORYBLOK_ACCESS_TOKEN))
    console.log("Storyblok token length:", process.env.STORYBLOK_ACCESS_TOKEN?.length)
  return storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    components:{
      hero:HeroSection,
      about:AboutSection,
      faq:FaqSection,
      faq_item:FaqItem
    }
  })
}