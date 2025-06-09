'use client';
import { XIcon } from 'lucide-react';
import React, { useState } from 'react';

// Email Icon
const EmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

// Phone Icon
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

// GitHub Icon
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 250;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'message') {
      if (value.length <= maxChars) {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="flex items-center">
            <div className="">
              {/* Header */}
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#C0D5FF] mb-3">
                  Contact Me
                </p>
                <h2 className="mb-6 text-5xl font-bold text-white md:text-[40px]">
                  Get in Touch
                </h2>
                <p className="text-lg text-[#B0B3B5] leading-[24px] mb-6">
                  I&apos;m always open to new opportunities and collaborations.
                  Whether you have a question or just want to say hi, feel free
                  to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="">
                {/* Email */}
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0))',
                    }}
                  >
                    <EmailIcon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-lg font-normal text-gray-400">
                      Email Me
                    </p>
                    <a
                      href="mailto:ogochukwuodom@gmail.com"
                      className="text-base text-semibold text-[#C0D5FF] hover:text-blue-400 transition-colors"
                    >
                      ogochukwuodom@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0))',
                    }}
                  >
                    <PhoneIcon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-400">Phone</p>
                    <a
                      href="tel:+2348067488682"
                      className="text-base font-semibold text-[#C0D5FF] hover:text-[#C0D5FF] transition-colors"
                    >
                      (+234) 8067488682
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <GitHubIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <XIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="rounded-2xl border border-[#EDEDED] pt-3 px-5 pb-6 backdrop-blur-sm">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Full Name"
                    className="w-full text-sm rounded-lg border border-[#99A0AE] bg-black  px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <EmailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
                      className="w-full text-sm rounded-lg border border-[#99A0AE] bg-black  px-4 py-3 pl-10 text-white placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here...."
                      rows={6}
                      className="w-full resize-none text-sm rounded-lg border border-[#99A0AE] bg-black px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {charCount}/{maxChars}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary p-[10px] text-sm font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
