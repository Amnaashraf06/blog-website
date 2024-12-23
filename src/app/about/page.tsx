import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-purple-200'>
      <h1 className='font font-semibold text-center text-4xl pt-10'>About Us</h1>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex items-center justify-center flex-col">
    <Image
      className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded pt-10"
      alt="hero"
      src={require("../../../public/aboutpic.jpg")}

    />
    <div className="text-center lg:w-2/3 w-full">
      
      <p className="mb-8 leading-relaxed">
Welcome to Stunning Collection your destination for fashion inspiration and style tips.
We help you express your unique style and navigate trends confidently. Fashion is for everyone,
and our mission is to empower you to embrace your personal style and feel your best. Our content
includes trend updates, practical style guides, eco-friendly fashion choices, and industry insights.
Founded in 2024 by Amna Ashraf, Stunning Collection has grown into a global fashion community.
Follow us for daily inspiration and exclusive updates. Thank you for visiting!
We are committed to fostering a welcoming space where fashion enthusiasts can connect, share ideas,
and celebrate individuality. Join our growing community and explore how fashion can be a powerful tool
for self-expression and creativity.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default page

