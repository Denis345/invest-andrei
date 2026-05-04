import { StoryblokServerComponent } from "@storyblok/react/rsc"
import {FaqBlockT}  from '@/types/styryblok'


export default function FaqSection({ blok }: { blok: FaqBlockT }) {
    console.log('blok,   ',blok)

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          {blok.eyebrow}
        </p>

        <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          {blok.title}
        </h2>
      </div>

      <div className="grid gap-4">
        {blok.items?.map((el: any) => (
          <StoryblokServerComponent key={el._uid} blok={el} />
        ))}
      </div>
    </section>
  )
}