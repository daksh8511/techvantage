import React from 'react'

import waving from "/assets/waving.png";

const ThirdService = () => {
  return (
    <section>
          <div className="p-5 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 gap-5 my-20 items-center">
            <div className="left">
              <img src={waving} alt="" />
            </div>
            <div className="right">
              <h2 className="text-[#18216d] font-bold text-3xl mb-3">
              That's about it!
              </h2>
              <p className="mb-5 text-[#18216d]">
              If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.
              </p>
            </div>
          </div>
        </section>
  )
}

export default ThirdService