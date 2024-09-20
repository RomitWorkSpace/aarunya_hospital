import React from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: "Name must contain only alphanumeric characters"
                }
              })}
              className={`mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? "border-red-500" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address"
                }
              })}
              className={`mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.email ? "border-red-500" : ""}`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: "Subject is required",
                maxLength: {
                  value: 100,
                  message: "Subject must be less than 100 characters"
                },
                pattern: {
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: "Subject must contain only alphanumeric characters"
                }
              })}
              className={`mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.subject ? "border-red-500" : ""}`}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: 500,
                  message: "Message must be less than 500 characters"
                }
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.message ? "border-red-500" : ""}`}
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
  );
};

export default ContactForm;
