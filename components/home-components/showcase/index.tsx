import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import ShowcaseImg from '@/public/project-img/showcase.jpg'
import versace from '@/public/project-svg/versace.svg'
import zara from '@/public/project-svg/zara.svg'
import gucci from '@/public/project-svg/gucci.svg'
import prada from '@/public/project-svg/prada.svg'
import clein from '@/public/project-svg/clein.svg'


export function Showcase() {
  return (
    <section className="relative overflow-hidden bg-[#f2f0f1]">
      <div className="containerr px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="text-muted-foreground max-w-md">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>
            <Button size="lg" className="rounded-full px-8 bg-black text-white hover:bg-gray-800">
              Shop Now
            </Button>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold">200+</h3>
                <p className="text-sm text-muted-foreground">International Brands</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold">2,000+</h3>
                <p className="text-sm text-muted-foreground">High-Quality Products</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold">30,000+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={ShowcaseImg}
                alt="Fashion models wearing stylish clothing"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="absolute top-1/4 -left-4 w-8 h-8">
              <Star className="w-8 h-8 text-black" fill="black" />
            </div>
            <div className="absolute bottom-1/4 -right-4 w-8 h-8">
              <Star className="w-8 h-8 text-black" fill="black" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8 bg-black">
        <div className="containerr flex flex-wrap justify-between items-center gap-8">
          <Image
            src={versace}
            alt="Versace"
            width={120}
            height={40}
            className="opacity-80 grayscale"
          />
          <Image
            src={zara}
            alt="Zara"
            width={120}
            height={40}
            className="opacity-80 grayscale"
          />
          <Image
            src={gucci}
            alt="Gucci"
            width={120}
            height={40}
            className="opacity-80 grayscale"
          />
          <Image
            src={prada}
            alt="Prada"
            width={120}
            height={40}
            className="opacity-80 grayscale"
          />
          <Image
            src={clein}
            alt="Calvin Klein"
            width={120}
            height={40}
            className="opacity-80 grayscale"
          />
        </div>
      </div>
    </section>
  )
}
