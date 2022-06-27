import React, { useState } from "react";
function Form() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: false,
  //   employment: "",
  //   favColor: "",
  // });

  // // console.log(formData);

  // function handleChange(ev) {
  //   const { name, value, type, checked } = ev.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  //   // submitToApi(formData)
  // }

  // return (
  //   <form onSubmit={handleSubmit} className="m-20 flex flex-col w-60 gap-4">
  //     <input
  //       className="border-2 rounded-md"
  //       type="text"
  //       placeholder="First name"
  //       onChange={handleChange}
  //       name="firstName"
  //       value={formData.firstName}
  //     />
  //     <input
  //       className="border-2 rounded-md"
  //       type="text"
  //       placeholder="Last name"
  //       onChange={handleChange}
  //       name="lastName"
  //       value={formData.lastName}
  //     />
  //     <input
  //       className="border-2 rounded-md"
  //       type="email"
  //       placeholder="mail@example.com"
  //       onChange={handleChange}
  //       name="email"
  //       value={formData.email}
  //     />
  //     <textarea
  //       className="border-2 rounded-md"
  //       value={formData.comments}
  //       placeholder="Comments"
  //       onChange={handleChange}
  //       name="comments"
  //     />
  //     <label htmlFor="isFriendly">Are you friendly?</label>
  //     <input
  //       type="checkbox"
  //       id="isFriendly"
  //       onChange={handleChange}
  //       checked={formData.isFriendly}
  //       name="isFriendly"
  //     />
  //     <fieldset>
  //       <legend>Current employment status</legend>
  //       <input
  //         type="radio"
  //         id="unemployed"
  //         name="employment"
  //         value="unemployed"
  //         onChange={handleChange}
  //         checked={formData.employment === "unemployed"}
  //       />
  //       <label htmlFor="unemployed" className="ml-2">
  //         unemployed
  //       </label>
  //       <br />
  //       <input
  //         type="radio"
  //         id="part-time"
  //         name="employment"
  //         value="part-time"
  //         onChange={handleChange}
  //         checked={formData.employment === "part-time"}
  //       />
  //       <label htmlFor="part-time" className="ml-2">
  //         Part-time
  //       </label>
  //       <br />
  //       <input
  //         type="radio"
  //         id="full-time"
  //         name="employment"
  //         value="full-time"
  //         onChange={handleChange}
  //         checked={formData.employment === "full-time"}
  //       />
  //       <label htmlFor="full-time" className="ml-2">
  //         Full-Time
  //       </label>
  //       <br />
  //     </fieldset>
  //     <label htmlFor="favColor">Waht is your favorite color?</label>
  //     <br />
  //     <select
  //       id="favColor"
  //       value={formData.favColor}
  //       onChange={handleChange}
  //       name="favColor">
  //       <option value="">--Choose--</option>
  //       <option value="red">Red</option>
  //       <option value="orange">Orange</option>
  //       <option value="yellow">Yellow</option>
  //       <option value="blue">Blue</option>
  //     </select>
  //     <button type="submit" className="bg-blue-500 rounded-md">
  //       Submit
  //     </button>
  //   </form>
  // );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribed: false,
  });

  // console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.isSubscribed === true) {
      console.log("Thanks for signing up for our newsletter!");
    }

    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords don't match");
      return;
    }
  }

  return (
    <div className="bg-violet-700 w-full h-screen flex justify-center items-center">
      <div className="w-60 h-80 rounded-md bg-slate-50 flex justify-center items-center mx-auto">
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="border border-slate-400 rounded-md"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="border border-slate-400 rounded-md"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            className="border border-slate-400 rounded-md"
            onChange={handleChange}
          />
          <div className="flex flex-row-reverse items-center ml-6">
            <label htmlFor="newsletter" className="ml-2">
              I want to join the newsletter
            </label>
            <input
              type="checkbox"
              name="isSubscribed"
              checked={formData.isSubscribed}
              onChange={handleChange}
            />
          </div>
          <button className="bg-violet-700 rounded-md text-slate-50 font-semibold px-4 py-2 hover:ring-2 hover:ring-violet-800 hover:ring-offset-2">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
