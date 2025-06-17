'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const EmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [charCount, setCharCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true);

    emailjs
      .send(
        'service_5i19qsi', // e.g. service_xyz
        'template_wo34lma', // e.g. template_abc
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        'LjJ3YfnA0rSIIeviO' // e.g. tGX123456_ab
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
          setFormData({ fullName: '', email: '', message: '' });
          setCharCount(0);
          setIsSending(false);
        },
        (error) => {
          console.error('Email sending failed:', error);
          toast.error('Failed to send email. Try again later.');
          setIsSending(false);
        }
      );
  };

  return (
    <div>
      {' '}
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
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
