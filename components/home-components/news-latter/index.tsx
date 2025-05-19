"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section className="">
      <div className="containerr">
        <div className="bg-black rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">
              STAY UP TO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
          </div>

          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full md:w-[300px] bg-white text-black rounded-full px-4 py-2 h-10"
              />
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full md:w-[300px] bg-white text-black hover:bg-gray-100 rounded-full font-medium"
              >
                {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe to Newsletter"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
