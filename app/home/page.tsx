import { BrowseStyles } from '@/components/home-components/browse'
import { TestimonialsSection } from '@/components/home-components/comments'
import { NewArrivals } from '@/components/home-components/new-arrivals'
import { Showcase } from '@/components/home-components/showcase'
import { TopSelling } from '@/components/home-components/top-selling'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Showcase />
        <NewArrivals />
        <TopSelling />
        <BrowseStyles />
        <TestimonialsSection />
    </div>
  )
}

export default HomePage