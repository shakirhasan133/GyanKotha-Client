import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark via-primary to-primary-darkest text-primary-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary-light inline-block pb-1">
              About GyanKotha
            </h3>
            <p className="text-sm text-primary-lightest">
              GyanKotha is your one-stop solution for sharing and discovering
              knowledge. Explore, learn, and grow with our collaborative
              platform.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary-light inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary-light transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-sm hover:text-primary-light transition duration-200"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary-light transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary-light transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary-light inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:support@gyankotha.com"
                  className="hover:text-primary-light transition duration-200"
                >
                  support@gyankotha.com
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-primary-light transition duration-200"
                >
                  +123 456 789
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Address:</span> 123 Knowledge
                Street, IdeaCity, Planet Earth
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary-light inline-block pb-1">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition duration-200"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition duration-200"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-primary-light pt-4 text-center">
          <p className="text-sm text-primary-lightest">
            &copy; {new Date().getFullYear()} GyanKotha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
