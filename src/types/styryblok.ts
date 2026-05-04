
export type AboutBlockT = {
  _uid:string,
  title:string,
  text:string,
    eyebrow:string,
    component:'about',
    _editable:string
}

export type HeroBlockT = {
  _uid:string,
  title:string,
    eyebrow:string,
  ctaLabel:string,
    component:'hero',
  description:string,
    _editable:string
    features?: string[]
}

export type FaqItemT = {
    _uid: string,
    answer:string,
    question:string,
    component:'faq_item',
    _editable:string
}

export type FaqBlockT = {
    _uid: string,
    items:FaqItemT[],
    title:string,
    eyebrow:string,
    component:'faq',
    _editable:string
}