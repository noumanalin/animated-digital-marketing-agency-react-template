import { useEffect, useState } from "react";
import image from "../../assets/analytics-banner.webp";

const data = [
  { id: 1, title: ["Project", "completed"], number: 25, suffix: "K" },
  { id: 2, title: ["Happy", "customers"], number: 8, suffix: "K" },
  { id: 3, title: ["Years", "experience"], number: 15, suffix: "" },
  { id: 4, title: ["Awards", "achievement"], number: 98, suffix: "" },
];

const ProjectAnalytics = () => {
  // Initialize counters state
  const [counts, setCounts] = useState(
    data.map(() => 0)
  );

  useEffect(() => {
    const durations = 2000; // 2 seconds animation
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / durations, 1);

      setCounts(
        data.map((d) => Math.floor(d.number * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="w-screen h-screen center-center bg-dark ">
      <article className="flex flex-col md:flex-row w-full max-w-7xl px-4">
        {/* Numbers */}
        <section className="flex-1 grid grid-cols-2 gap-8">
          {data.map((d, i) => (
            <aside key={d.id} className="flex flex-col">
              <h3 className="text-6xl font-bold text-light">
                {counts[i].toLocaleString()}
                {d.suffix}
              </h3>
              <p className="text-gray-400 text-lg mt-2 leading-tight">
                {d.title[0]}
                <br />
                {d.title[1]}
              </p>
            </aside>
          ))}
        </section>

        {/* Image */}
        <figure className="flex-1 relative mt-12 md:mt-0 hidden md:flex items-center justify-center">
          <img
            src={image}
            alt="Analytics Banner"
            className="object-cover w-full md:max-h-[500px]"
          />
        </figure>
      </article>
    </section>
  );
};

export default ProjectAnalytics;
