export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow">
        <input 
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded mb-4"
        />
        <input 
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded mb-4"
        />
        <textarea 
          rows="5"
          placeholder="Message"
          className="w-full p-3 border rounded mb-4"
        ></textarea>

        <button 
          className="w-full bg-purple-600 text-white py-3 rounded font-medium hover:bg-purple-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
