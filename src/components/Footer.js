import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full h-auto grid grid-cols-4 md:grid-cols-2 gap-4
    sm:grid-cols-1 bottom-0 justify-around shadow-lg border-2
    border-transparent/5 py-5 px-10"
    >
      <div className="flex-col justify-center">
        <h4>Products</h4>
        <ul className="text-xs mt-4 text-white/80 hover:cursor-pointer">
          <li>Caption Generator</li>
          <li>Caption Generator</li>
          <li>Caption Generator</li>
          <li>Caption Generator</li>
          <li>Caption Generator</li>
          <li>Caption Generator</li>
        </ul>
      </div>
      <div className="flex-col justify-center">
        <h4>Company</h4>
        <ul className="text-xs mt-4 text-white/80 hover:cursor-pointer">
          <li>About</li>
          <li>Programs</li>
          <li>Careers</li>
          <li>API</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="flex-col justify-center">
        <h4>Contact</h4>
        <ul className="text-xs mt-4 text-white/80 hover:cursor-pointer">
          <li>autocapgen@gmail.com</li>
          <li>+91 6739382926</li>
          <li>New York Office</li>
          <li>New York, 108921</li>
        </ul>
      </div>
      <div className="flex-col justify-center">
        <h2>Join Our Newsletter</h2>
        <p className="text-xs mt-4 text-white/80">
          Subscribe to the Coohom Weekly and enjoy seven days of Interior Design
          news in one newsletter with worldwide delivery.
        </p>
        <label for="hs-trailing-button-add-on" className="sr-only">
          Label
        </label>
        <div className="flex text-center justify-begin mt-5">
          <input
            type="email"
            placeholder="Your email..."
            id="hs-trailing-button-add-on"
            name="hs-trailing-button-add-on"
            className="shrink-0 max-w-[70%] py-3 px-4 block w-full border-gray-200 shadow-sm 
        rounded-s-lg text-sm focus:z-10 focus:border-blue-500 
        focus:ring-blue-500 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-slate-900 
        dark:border-gray-700 dark:text-gray-400 
        dark:focus:ring-gray-600"
          />
          <button
            type="submit"
            className="shrink max-w-[35%] py-3 px-4 inline-flex justify-center items-center 
        gap-x-2 text-sm font-semibold rounded-e-md border 
        border-transparent bg-gradient-to-tl from-rose-600 via-fuchsia-600 to-indigo-700 text-white 
        hover:bg-blue-700 disabled:opacity-50 
        disabled:pointer-events-none dark:focus:outline-none 
        dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// className="mt-5 py-2 px-4 rounded-xl text-gray-800 w-full z-0"
export default Footer;

/*

<div>
  <label for="hs-trailing-button-add-on" class="sr-only">Label</label>
  <div class="flex rounded-lg shadow-sm">
    <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
    <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      Button
    </button>
  </div>
</div>

*/
