import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    gender: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // send data to server or do something with it
  };

  return (
    <form className="flex flex-col w-[40%] ml-[25.5rem] " onSubmit={handleSubmit}>
      <label className="mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="birthdate">
        Birthdate
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="gender">
        Gender
      </label>
      <select
        className="px-4 py-2 mb-4 border-2 rounded-md"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select a gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="mb-2" htmlFor="address">
        Address
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="zipcode">
        Zipcode
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="text"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="city">
        City
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label className="mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="px-4 py-2 mb-4 border-2 rounded-md"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default Form
