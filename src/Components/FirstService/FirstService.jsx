import React from "react";

import notes from "/assets/notes.png";
import graphs from "/assets/graphs.png";

const FirstService = () => {

  return (
    <section>
      <div className="p-5 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 gap-5">
        <div className="left">
          <img src={graphs} alt="Graphs" />
        </div>
        <div className="right">
          <h2 className="text-[#18216d] font-bold text-3xl mb-3">
            Light, fast & responsive
          </h2>
          <p className="mb-5 text-[#18216d]">
            This template is ready to use, so you don't need to change anything
            at a component level, unless you want to customize the default
            styling.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img src={notes} alt="Notes" />
              <h3 className="font-light my-2">Why Antd?</h3>
              <p className="font-light text-[#18216d]">
                Ant Design is a React UI library that has a lot of easy-to-use
                components for building elegant UI.
              </p>
            </div>
            <div>
              <img src={notes} alt="Notes" />
              <h3 className="font-light my-2">Why styled-components?</h3>
              <p className="font-light text-[#18216d]">
                Styled Components gives you total control over your components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstService;
