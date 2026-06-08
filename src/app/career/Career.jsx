"use client";
import React from "react";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { UploadCloud } from "lucide-react";

const Career = () => {
  const [cvFileName, setCvFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const handleCvFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setCvFileName(file.name);
  };

  const handleRemoveCvFile = () => {
    setCvFileName("");
    // @ts-ignore
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    try {
      const res = await fetch(
        "https://backend-interior.onrender.com/api/career/career-submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      Swal.fire({
        title: "Application Submitted 🎉",
        text: "We’ll get back to you soon.",
        icon: "success",
      });

      event.target.reset();
      setCvFileName("");
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Join Our Team 🚀
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Fill in your details and upload your resume
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <Input name="email_address" label="Email Address" type="email" required />

          <div className="grid md:grid-cols-2 gap-4">
            <Input name="first_name" label="First Name" required />
            <Input name="last_name" label="Last Name" required />
          </div>

          <Input name="phone_number" label="Phone Number" required />
          <Input name="location" label="Location" required />
          <Input name="job_title" label="Current / Previous Job Title" required={undefined} />

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Resume <span className="text-red-500">*</span>
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition bg-gray-50">
              <input
                type="file"
                ref={fileRef}
                name="resume_file"
                onChange={handleCvFileChange}
                required
                className="hidden"
                id="fileUpload"
              />

              <label
                htmlFor="fileUpload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <UploadCloud className="w-8 h-8 text-blue-500" />
                <p className="text-gray-600 text-sm">
                  Drag & drop or{" "}
                  <span className="text-blue-600 font-medium">
                    browse file
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  PDF, DOC up to 5MB
                </p>
              </label>
            </div>

            {cvFileName && (
              <div className="flex items-center justify-between mt-3 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <span className="text-sm text-green-700 truncate">
                  {cvFileName}
                </span>
                <button
                  type="button"
                  onClick={handleRemoveCvFile}
                  className="text-red-500 font-bold text-lg"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gray-900 hover:bg-gray-800 transition text-white py-2  font-semibold flex items-center justify-center gap-2 disabled:opacity-60 shadow-md"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* Reusable Input Component */
const Input = ({ name, label, type = "text", required }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
  </div>
);

export default Career;