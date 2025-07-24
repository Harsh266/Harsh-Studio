import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

const Contact = () => {

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#F6F6F6] px-4 relative">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Contact Form */}
        <form
          className="w-[90%] max-w-md bg-white p-8 rounded-lg shadow-md opacity-0 transform scale-95 transition-all duration-500 ease-out animate-fadeIn relative"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-transform duration-300 ease-out hover:scale-105"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-transform duration-300 ease-out hover:scale-105"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-transform duration-300 ease-out hover:scale-105"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md transition-transform duration-300 ease-out hover:scale-105 hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>

        {/* Animation Keyframes */}
        <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
