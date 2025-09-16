import { Github, Linkedin, Twitter, Download, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alok-maurya-iitr',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/alok-8303',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Alok225411?t=uvYoZaGhzgYMxi-_Y4OCow',
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>+91 8303499901</p>
              <p>alok_m@mt.iitr.ac.in</p>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>Roorkee, Uttrakhand-247667, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="/resume"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Alok Maurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
