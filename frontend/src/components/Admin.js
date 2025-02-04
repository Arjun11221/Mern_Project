import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisines: "",
    rating: "",
    deliveryTime: "",
    location: "",
    imageOfRes: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imageOfRes: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const data = new FormData();
    data.append("name", formData.name);
    data.append("cuisines", formData.cuisines); // Convert cuisines array to string
    data.append("rating", formData.rating);
    data.append("deliveryTime", formData.deliveryTime);
    data.append("location", formData.location);
    data.append("imageOfRes", formData.imageOfRes); // Append the image file

    try {
      const res = await axios.post("http://localhost:4000/api/v1/admin", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for FormData
        },
      });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }

      setFormData({
        name: "",
        cuisines: "",
        rating: "",
        deliveryTime: "",
        location: "",
        imageOfRes: null,
      });
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 mt-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add a New Restaurant
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name Of Restaurant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name of restaurant"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cuisines"
          >
            Cuisines
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="cuisines"
            value={formData.cuisines}
            onChange={handleChange}
            placeholder="Cuisines"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rate the restaurant"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deliveryTime"
          >
            Delivery Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            placeholder="Delivery time"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageOfRes"
          >
            Image of Restaurant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            onChange={handleFileChange}
            name="imageOfRes"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-full mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
