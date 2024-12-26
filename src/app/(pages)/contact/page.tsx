"use client"

import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500" />
              <Link href="tel:+254700123456" className="text-gray-700 hover:text-blue-600">
                +254 700 123 456
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" />
              <Link href="mailto:info@firstdripadventures.com" className="text-gray-700 hover:text-blue-600">
                info@firstdripadventures.com
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <MessageCircle className="text-green-500" />
              <Link
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600"
              >
                Chat on WhatsApp
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-red-500" />
              <p className="text-gray-700">Ukunda, Kwale, Kenya</p>
            </div>

            <div className="flex items-center space-x-4">
              <Globe className="text-blue-500" />
              <Link
                href="https://firstdripadventures.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                firstdripadventures.com
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com/firstdripadventures" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-blue-600 hover:text-blue-800 text-2xl" />
              </Link>
              <Link href="https://twitter.com/firstdripadventures" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-blue-400 hover:text-blue-600 text-2xl" />
              </Link>
              <Link href="https://instagram.com/firstdripadventures" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 hover:text-pink-700 text-2xl" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full p-3 border rounded-lg ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message?.toString()}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127887.70034811958!2d39.50895624734273!3d-4.308078910000488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184838dc29af5b73%3A0x7db6f6d4bd7693b5!2sUkunda%2C%20Kenya!5e0!3m2!1sen!2sus!4v1691416512529!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
