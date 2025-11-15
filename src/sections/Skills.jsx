export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Git"];

  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
