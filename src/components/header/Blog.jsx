

const blogItems = [
  { name: "Blog", url: "/" },
  { name: "Blog Dark", url: "/" },
  { name: "Blog Details", url: "/" },
];

const Blog = () => {
  return (
    <section className="min-w-[250px] mx-auto border-t border-l divide-gray-400 text-left py-4">
      {/* Blog Items */}
      <article>
        <ul className="px-4 pt-4 space-y-2">
          {blogItems.map((item) => (
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

export default Blog;