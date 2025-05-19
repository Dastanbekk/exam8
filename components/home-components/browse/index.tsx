import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import browse1 from '@/public/project-img/browse1.png'
import browse2 from '@/public/project-img/browse2.png'
import browse3 from '@/public/project-img/browse3.png'
import browse4 from '@/public/project-img/browse4.png'



export function BrowseStyles() {
  return (
    <section className="py-16">
      <div className="containerr">
        <div className="bg-[#f0f0f0] rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            BROWSE BY
            <br className="md:hidden" /> DRESS STYLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <Link href="/categories/casual" className="no-underline md:col-span-4">
              <Card className="overflow-hidden border-none rounded-2xl h-[200px] bg-white md:h-[250px] hover:shadow-md transition-shadow">
                <div className="relative h-full w-full">
                  <Image src={browse1} alt="Casual" fill className="object-cover" />
                  <CardContent className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">Casual</h3>
                  </CardContent>
                </div>
              </Card>
            </Link>

            <Link href="/categories/formal" className="no-underline md:col-span-8">
              <Card className="overflow-hidden border-none rounded-2xl h-[200px] bg-white md:h-[250px] hover:shadow-md transition-shadow">
                <div className="relative h-full w-full">
                  <Image src={browse2} alt="Formal" fill className="object-cover" />
                  <CardContent className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">Formal</h3>
                  </CardContent>
                </div>
              </Card>
            </Link>

            <Link href="/categories/party" className="no-underline md:col-span-8">
              <Card className="overflow-hidden border-none rounded-2xl h-[200px] bg-white md:h-[250px] hover:shadow-md transition-shadow">
                <div className="relative h-full w-full">
                  <Image src={browse3} alt="Party" fill className="object-cover" />
                  <CardContent className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">Party</h3>
                  </CardContent>
                </div>
              </Card>
            </Link>

            <Link href="/categories/gym" className="no-underline md:col-span-4">
              <Card className="overflow-hidden border-none rounded-2xl h-[200px] bg-white md:h-[250px] hover:shadow-md transition-shadow">
                <div className="relative h-full w-full">
                  <Image src={browse4} alt="Gym" fill className="object-cover" />
                  <CardContent className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">Gym</h3>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
