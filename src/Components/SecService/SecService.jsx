import React from "react";

import product_launch from "/assets/product_launch.png";

const SecService = () => {
  return (
    <section>
      <div className="p-5 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 gap-5 my-10 items-center">
        <div className="right">
          <h2 className="text-[#18216d] font-bold text-3xl mb-3">
            Ready made sections
          </h2>
          <p className="mb-5 text-[#18216d]">
            Landy comes with a set of ready to use sections to help you easily
            create a landing page for your own brand, with all the content your
            startup desires. In order to replace any dummy elements (text,
            image, etc..) all you need to do is go to content folder and input
            your real content.
          </p>
        </div>

        <div className="left">
          <img src={product_launch} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SecService;
