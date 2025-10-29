"use client";
import { RegistrationForm } from "@/components/RegistrationForm/RegistrationForm";
import { useFormSubmit } from "@/components/RegistrationForm/useFormSubmit";
import Footer from "../sections/HOME/Footer";
import logo from "@/assets/logo.png";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  profession: "",
};

export default function FormPage() {
  const { form, isSubmitting, error, handleChange, handleSubmit } =
    useFormSubmit(initialFormData);

  return (
    // <RegistrationForm
    //   form={form}
    //   isSubmitting={isSubmitting}
    //   error={error}
    //   onSubmit={handleSubmit}
    //   onChange={handleChange}
    // />
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8 animate-in fade-in duration-700">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
              <img
                src={logo.src}
                alt="Inno Night Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-yellow-400 text-lg md:text-xl font-['Poppins',sans-serif] font-semibold">
              Inno Night
            </p>
          </div>

          {/* Main Message */}
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Poppins',sans-serif]">
            Registration Closed
          </h1>

          <div className="max-w-md mx-auto">
            <p className="text-lg text-gray-300 mb-6 font-['Inter',sans-serif] leading-relaxed">
              Thank you so much for your interest in our networking event. The
              registration form is currently closed as we've reached capacity.
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-6">
              <p className="text-gray-400 text-sm font-['Inter',sans-serif]">
                We're excited about the overwhelming response and look forward
                to connecting with you in future events.
              </p>
            </div>
          </div>

          {/* Event Date Reminder */}
          <div className="inline-block px-6 py-3 bg-gray-900 text-gray-300 rounded-lg border border-gray-800 font-['Inter',sans-serif]">
            31 OCT 2025
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
