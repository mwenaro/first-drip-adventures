import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              At First Drip Adventures, we specialize in crafting unforgettable experiences
              that connect people to the beauty of Kenya and beyond.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              Learn more about us
            </Link>
          </div>

          {/* Essential Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Essential Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-blue-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-300">Stay connected with us on social media:</p>
            <ul className="flex space-x-4 mt-4">
              <li>
                <Link
                  href="https://facebook.com/firstdripadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/firstdripadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/firstdripadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/firstdripadventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} First Drip Adventures. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Designed and built with ❤️ by First Drip Adventures Team.
          </p>
        </div>
      </div>
    </footer>
  );
};


