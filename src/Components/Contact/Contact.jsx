import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="p-5 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 items-center">
        <div className="left">
          <h2 className="text-[#18216d] text-5xl font-bold mb-4">
            Contact form
          </h2>
          <p className="font-light">
            The following form demonstrates form validation in action. Contact
            form component reduces the amount of time it is being re-rendered by
            the user as it embraces uncontrolled form validation to reduce any
            unnecessary performance penalty.
          </p>
        </div>
        <div className="p-5">
          <form action="">
            <div className="mb-4">
                <label htmlFor="name" className="block">Name</label>
                <input type="text" placeholder="Your Name" className="border-1 outline-0 p-2 w-full rounded mt-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" placeholder="Your Email" className="border-1 outline-0 p-2 w-full rounded mt-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block">Message</label>
                <textarea name="message" id="messae" placeholder="Enter Message" rows={7} className="border-1 outline-0 p-2 w-full rounded mt-2"></textarea>
            </div>
            <input type="submit" className="bg-[#18216d] text-white px-7 py-3 rounded cursor-pointer duration-300 hover:shadow-xl capitalize" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
