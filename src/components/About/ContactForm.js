"use client";

import { useState } from "react";

const ImagePreview = () => {
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setPreview(null);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto ">

      {/* Upload Card */}
      {!preview && (
        <label className="group relative flex flex-col items-center justify-center h-56 rounded-2xl border border-dashed border-gray-300 bg-white shadow-sm hover:shadow-md transition cursor-pointer">

          <div className="flex flex-col items-center gap-2 mb-32">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-gray-200 transition">
              +
            </div>

            <p className="text-sm font-medium text-gray-700">
              Upload Image
            </p>

            <p className="text-xs text-gray-400">
              PNG, JPG up to 10MB
            </p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      )}

      {/* Preview Card */}
      {preview && (
        <div className="mt-5 rounded-2xl border bg-white shadow-md overflow-hidden">

          {/* Image */}
          <div
            onClick={() => setOpen(true)}
            className="relative h-64 cursor-pointer overflow-hidden"
          >
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between p-4 border-t bg-gray-50">

            <button
              onClick={() => setOpen(true)}
              className="text-sm font-medium text-gray-700 hover:text-black transition"
            >
              Preview
            </button>

            <button
              onClick={removeImage}
              className="text-sm font-medium text-red-500 hover:text-red-600 transition"
            >
              Remove
            </button>

          </div>
        </div>
      )}

      {/* ShadCN-like Modal */}
      {open && preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-4xl h-[80vh] rounded-2xl bg-white shadow-2xl overflow-hidden">

            <img
              src={preview}
              alt="full preview"
              className="w-full h-full object-contain bg-black"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white text-black shadow-md hover:scale-105 transition"
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;