export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-purple-600">My Portfolio</h1>

      <ul className="flex gap-6 font-medium">
        <li><a href="#home" className="hover:text-purple-600">Home</a></li>
        <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  );
}

