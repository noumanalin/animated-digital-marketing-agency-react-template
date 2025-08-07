import React from "react";

const homeLight = [
  { name: "Digital Marketing", url: "/" },
  { name: "Design Studio", url: "/" },
  { name: "Digital Agency", url: "/" },
  { name: "Creative Agency", url: "/" },
  { name: "Modern Agency", url: "/" },
  { name: "Startup Agency", url: "/" },
  { name: "Personal Portfolio", url: "/" },
];

const homeDark = [
  { name: "Digital Marketing", url: "/" },
  { name: "Design Studio", url: "/" },
  { name: "Digital Agency", url: "/" },
  { name: "Creative Agency", url: "/" },
  { name: "Modern Agency", url: "/" },
  { name: "Startup Agency", url: "/" },
  { name: "Personal Portfolio", url: "/" },
];

const portfolioLight = [
  { name: "Portfolio Showcase", url: "/" },
  { name: "Showcase Carousel", url: "/" },
  { name: "Interactive Link", url: "/" },
  { name: "Portfolio Masonry", url: "/" },
  { name: "Vertical Grid", url: "/" },
  { name: "Interactive Image Slider", url: "/" },
  { name: "Showcase Parallax", url: "/" },
  { name: "Logo Showcase", url: "/" },
  { name: "Interactive Hover Showcase", url: "/" },
  { name: "Showcase Slider", url: "/" },
];

const portfolioDark = [
  { name: "Portfolio Showcase", url: "/" },
  { name: "Showcase Carousel", url: "/" },
  { name: "Interactive Link", url: "/" },
  { name: "Portfolio Masonry", url: "/" },
  { name: "Vertical Grid", url: "/" },
  { name: "Interactive Image Slider", url: "/" },
  { name: "Showcase Parallax", url: "/" },
  { name: "Logo Showcase", url: "/" },
];

const Demos = () => (
  <section className="min-w-[786px] max-w-[1300px] bg-white mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left ">
    {/* Home Light */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Home Light
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {homeLight.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>

    {/* Home Dark */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Home Dark
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {homeDark.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>

    {/* Portfolio Light */}
    <article>
      <h3 className="px-4 pt-4 text-md  font-bold uppercase mb-4 text-black">
        Portfolio Light
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {portfolioLight.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>

    {/* Portfolio Dark */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Portfolio Dark
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {portfolioDark.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  </section>
);

export default Demos;
