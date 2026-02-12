"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle } from "lucide-react"
import emailjs from "emailjs-com"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        "service_6272bxg", // replace with EmailJS service ID
        "template_vbpnaqf", // replace with EmailJS template ID
        form,
        "PXHZzpSziKhXcwwsX"   // replace with EmailJS public key
      )

      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Something went wrong. Please try again.")
    }

    setIsLoading(false)

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto animate-in fade-in-0 zoom-in-95 duration-300">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4 animate-in zoom-in-50 duration-500" />
            <h3 className="font-serif font-semibold text-lg mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Send a Message
        </CardTitle>
        <CardDescription>I'd love to hear about your project or collaboration ideas.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="user_name" placeholder="Your name" required />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="user_email" type="email" placeholder="your.email@example.com" required />
          </div>

          {/* Subject (Email Title) */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="user_subject" placeholder="Enter subject..." required />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." required />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
