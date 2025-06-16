
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import React, { useState } from "react";

const email = "frankieliu97@gmail.com";
const linkedin = "frankieliu97";
const github = "deadpoolcnn";
const twitter = "frankieliu97";
const phone = "+1 (437) 435-6387";
const address = "935 Ramsey Lake Rd, Sudbury, ON";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1300);
  };

  return (
    <div className="w-full bg-[#fbfaf7] text-black px-6 md:px-16 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Side - Quick Links */}
          <div className="space-y-12">
            <div>
              <h2 className="text-lg font-timesroman font-bold mb-6 text-gray-600">Quick links</h2>
              {/* <div className="flex flex-wrap gap-3">
                <span className="px-6 py-2 bg-pink-400 text-white rounded-full text-sm font-semibold">
                  BIO
                </span>
                <span className="px-6 py-2 bg-pink-400 text-white rounded-full text-sm font-semibold">
                  WORK
                </span>
                <span className="px-6 py-2 bg-pink-400 text-white rounded-full text-sm font-semibold">
                  PROJECTS
                </span>
                <span className="px-6 py-2 bg-pink-400 text-white rounded-full text-sm font-semibold">
                  SERVICES
                </span>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <button
                onClick={handleCopy}
                className="flex items-center gap-3 text-black hover:text-pink-500 transition-colors group"
                title="Copy email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg font-timesroman">{email}</span>
                {copied && <span className="text-pink-500 text-sm font-semibold">Copied!</span>}
              </button>

              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-pink-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-lg font-timesroman">LinkedIn</span>
              </a>

              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-pink-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-lg font-timesroman">GitHub</span>
              </a>

              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-pink-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-lg font-timesroman">Twitter</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            <div>
             <h2 className="text-lg font-timesroman font-bold mb-6 text-gray-600">Contact</h2>
              <div className="space-y-4">
                <div className="text-lg font-timesroman">{phone}</div>
                <div className="text-lg font-timesroman leading-relaxed">
                  {address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <div className="text-8xl md:text-[12rem] font-bold text-black mb-2 leading-none">
            Creative is
          </div>
          
          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500 space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl">&copy;</span>
              <span>2025 Creative Studio.</span>
            </div>
            <div className="flex gap-8">
              <span>Terms and Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
