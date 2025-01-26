import { useState } from "react";
import { Tilt } from "react-tilt";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../../src/index.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return Toast.fire({
        icon: "error",
        title: "Please fill all the fields!",
      });
    }
    try {
      setLoading(true);
      const response = await emailjs.send(
        "service_z034ppm",
        "template_hzprk8x",
        { from_name: form.name, from_email: form.email, message: form.message },
        "gQiyUzkdtQDOOXto5"
      );

      if (response.text === "OK") {
        console.log(response);
        Toast.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);

      Toast.fire({ icon: "error", title: "Something went wrong!" });
    }

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div
      className="w-screen sm:w-full bg-primary pt-[160px] pb-[60px]"
      id="contact"
    >
      <div className="sm:w-[1440px] mx-auto px-5 sm:px-[150px] flex flex-col justify-center items-center gap-[20px]">
        <div className="w-full flex flex-col justify-center items-center gap-[20px] bg-black-100 rounded-2xl p-8">
          <h1 className="text-[36px] text-white font-bold ">Contact</h1>
          <span className="w-[263px] h-[1px] bg-white"></span>
          <form
            className="w-full flex flex-col sm:flex-row gap-[71px] mt-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full flex flex-col gap-[25px]">
              <label>
                <h1 className="text-white mb-4 font-medium">Your Name</h1>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                  placeholder="What's your good name?"
                  className="w-full bg-tertiary py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary font-medium"
                ></input>
              </label>
              <label>
                <h1 className="text-white mb-4 font-medium">Your Email</h1>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="What's your email address?"
                  className="w-full bg-tertiary py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary font-medium"
                ></input>
              </label>
            </div>
            {/* col 02 */}
            <div className="w-full flex flex-col gap-[15px]">
              <label>
                <h1 className="text-white mb-4 font-medium">Your Message</h1>
                <textarea
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange(e)}
                  rows={6}
                  placeholder="What do you want to say?"
                  className="w-full bg-tertiary py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary font-medium"
                ></textarea>
              </label>
              <Tilt className="sm:ml-auto">
                <button
                  type="submit"
                  className="sm:ml-auto outline-none cursor-pointer w-full sm:w-[202px] px-[35px] py-[10px] rounded-[10px] font-white font-medium bg-tertiary text-white shadow-primary shadow-md"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </Tilt>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
