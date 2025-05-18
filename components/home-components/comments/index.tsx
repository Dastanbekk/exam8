import { Star } from "lucide-react"

const testimonials = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received. The fabric feels luxurious and the fit is perfect. Will definitely be shopping here again!",
  },
  {
    id: "2",
    name: "Alex K.",
    rating: 4,
    comment:
      "Great selection of clothes that are both fashionable and comfortable. The shipping was fast and everything arrived as expected. Very satisfied!",
  },
  {
    id: "3",
    name: "Jamie L.",
    rating: 5,
    comment:
      "The customer service is exceptional! I had an issue with sizing and they helped me sort it out quickly. The clothes are amazing too - stylish and great quality.",
  },
]

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
