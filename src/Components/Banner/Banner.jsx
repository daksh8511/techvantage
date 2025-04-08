import React from 'react'
import developer from '/assets/developer.png'

const Banner = () => {
  return (
    <section>
        <div className="p-5 py-20 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 items-center">
            <div className="left mb-5 min-sm:mb-5 min-md:mb-0">
                <h2 className='bluetext font-bold text-5xl mb-5'>Landing page template for developers & startups</h2>
                <p className='bluetext mb-5'>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                <div className="flex gap-5">
                    <button className="bg-[#18216d] text-white px-7 py-3 rounded cursor-pointer duration-300 hover:shadow-xl">Explore</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="right">
                <img src={developer} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Banner