import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function Email() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email address (e.g. name@example.com)";
      return "";
    }
    if (name === "message") {
      if (!value.trim()) return "Message is required";
      return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);
    setErrors({ email: emailError, message: messageError });
    if (emailError || messageError) return;

    setLoading(true);
    const response = await fetch("https://formspree.io/f/mkgjvgkw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ email: "", message: "" });
      setErrors({ email: "", message: "" });
    } else if (response.status === 422) {
      setStatus("The server couldn't process your request. Check your email address and try again.");
    } else {
      setStatus("Something went wrong. Please try again in a moment.");
    }
    setLoading(false);
  };
  return (
    <main
      className="font-mono text-primary flex"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="p-6 md:p-6 lg:p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl max-sm:text-2xl font-bold mb-2 md:mb-5 font-kanit">
          Send Me Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative mb-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border pl-12 pr-4 py-2 border-gray-300 rounded-md relative w-full md:w-64 lg:w-96 outline-none focus-visible:ring-2 focus-visible:ring-primary max-sm:placeholder:text-xs ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`}
              />
              <MdOutlineEmail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 border-r-2 border-gray-200 h-full pr-2"
                size={30}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mb-3 mt-1" role="alert">{errors.email}</p>}
          </div>

          <label htmlFor="message" className="sr-only">Your message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mb-1 p-2 border rounded !h-32 md:!h-52 lg:!h-64 outline-none focus-visible:ring-2 focus-visible:ring-primary max-sm:placeholder:text-xs ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}`}
          />
          {errors.message && <p className="text-red-500 text-xs mb-2" role="alert">{errors.message}</p>}
          <button type="submit" className="bg-primary hover:bg-primary/90 transition duration-200 ease-in-out text-white p-2 rounded focus-visible:ring-2 focus-visible:ring-morning mt-2" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {status && <p className={`mt-2 ${status.includes("successfully") ? "text-green-600" : "text-red-500"}`} role="status">{status}</p>}
      </div>
    </main>
  );
}
