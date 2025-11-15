export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center text-center py-24 px-4">
      <img 
        src="/profile.png" 
        alt="profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
      />

      <h1 className="text-4xl font-bold mb-4">Hi, I'm Amine</h1>
      <p className="text-gray-600 text-lg max-w-xl">
        Front-end Developer passionate about building modern and interactive web experiences.
      </p>
    </section>
  );
}
