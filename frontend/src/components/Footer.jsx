import { FaBehance, FaGithub, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = useCallback(() => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("About");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("About");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location, navigate]);

  return (
    <div className="w-full flex flex-col">
      {/* Gradient Background */}
      <div
        className="h-72 w-full"
        style={{
          background: `linear-gradient(
            to top,
            #000000 0%,
            #29223a 25%,
            #7c5ecb 60%,
            #e0e6f5 85%,
            #ffffff 100%
          )`,
        }}
      />

      {/* Footer Content */}
      <div className="w-full px-6 md:px-14 py-16 text-white bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Elevate Your Presence
              <br />
              With My Portfolio
            </h1>
            <p className="text-gray-400 md:text-lg font-light">
              Discover my projects, skills, and experiences that shape my creative journey.
            </p>
          </div>
        </div>

        {/* Footer Main */}
        <footer className="mt-16 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white rounded-full p-2">
                  <svg width="20" height="20">
                    <text
                      x="4.0"
                      y="17"
                      fontSize="18"
                      fill="black"
                      fontFamily="Arial"
                      fontWeight="bold"
                    >
                      H
                    </text>
                  </svg>
                </span>
                <span className="font-semibold text-lg">Harsh-Studio</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                MERN Stack Developer | Passionate about modern UI/UX & scalable apps
              </p>
              <div className="flex gap-3">
                <a href="#" className="rounded-full bg-white hover:bg-gray-200 p-2 transition">
                  <FaInstagram className="text-black" />
                </a>
                <a href="#" className="rounded-full bg-white hover:bg-gray-200 p-2 transition">
                  <FaBehance className="text-black" />
                </a>
                <a href="#" className="rounded-full bg-white hover:bg-gray-200 p-2 transition">
                  <FaGithub className="text-black" />
                </a>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="flex flex-wrap gap-14 text-sm md:justify-end">
              <div>
                <h4 className="font-bold mb-2 text-white">Navigation</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>
                    <Link
                      to="/"
                      onClick={scrollToTop}
                      className="hover:text-white transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleAboutClick}
                      className="hover:text-white transition bg-transparent p-0 m-0"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      onClick={scrollToTop}
                      className="hover:text-white transition"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="hover:text-white transition"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-zinc-700 pt-6 mt-10 text-xs text-gray-500">
            <p>© 2025 Harsh Vekariya. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
