

const lightVersionOthers = [
  { name: "Our Team", url: "/" },
  { name: "Team Details", url: "/" },
  { name: "About Us", url: "/" },
  { name: "About Us V.2", url: "/" },
  { name: "Contact Us", url: "/" },
  { name: "Our Careers", url: "/" },
  { name: "Job Details", url: "/" },
  { name: "FAQs", url: "/" },
  { name: "404 Page", url: "/" },
];

const darkVersionOthers = [
  { name: "Our Team", url: "/" },
  { name: "Team Details", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Contact Us", url: "/" },
  { name: "Our Careers", url: "/" },
  { name: "FAQs", url: "/" },
];

const Others = () => {
  return (
    <section className="min-w-[450px] max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left">
      {/* Light Version */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Others Light
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {lightVersionOthers.map((item) => (
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

      {/* Dark Version */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Others Dark
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {darkVersionOthers.map((item) => (
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
};

export default Others;