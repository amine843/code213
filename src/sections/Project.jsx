export default function Projects() {
  const projects = [
    { title: "Project One", desc: "Description for project one", link: "#" },
    { title: "Project Two", desc: "Description for project two", link: "#" },
    { title: "Project Three", desc: "Description for project three", link: "#" },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <a 
              href={p.link} 
              className="text-purple-600 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
