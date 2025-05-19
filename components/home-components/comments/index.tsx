import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"
export function TestimonialsSection() {
  return (
    <section className="w-full py-16 ">
      <div className="containerr">
        <h2 className="text-2xl font-bold mb-10 text-center">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 border-gray-200 border rounded-lg">
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
