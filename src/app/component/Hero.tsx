import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-purple-200'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold text-gray-900">
      Style Yourself 
        <br className="hidden lg:inline-block" />
        with affordable and stylish clothes
      </h1>
      <p className="mb-8 leading-relaxed text-justify">
      Clothing is an essential part of our daily lives, offering both functionality and expression. It serves to protect us from the elements, provide comfort, and reflect our personal style. Fashion trends constantly evolve, but the importance of clothing goes beyond mere appearance—it's a form of self-expression, cultural identity, and even social statement. From casual wear to formal attire, the right clothing can boost confidence and help individuals feel more connected to their communities. As sustainability becomes more of a concern, conscious consumerism is shaping the future of fashion,
       emphasizing ethical production practices and eco-friendly materials.
       </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/logo.jpg")}
        width={760}
        height={400}
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero