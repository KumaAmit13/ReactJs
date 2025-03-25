import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HelpSupport() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const faqs = [
    { question: "How do I reset my password?", answer: "Click on 'Forgot Password' and follow the instructions." },
    { question: "How can I contact support?", answer: "You can reach us via email or phone listed below." },
    { question: "Where can I find my order details?", answer: "Go to 'My Account' > 'Orders' to view your purchase history." },
  ];
  const handleSubmit = () => {
    if (!email || !message) {
      alert("Please fill in both fields before submitting.");
      return;
    }
    else{
        alert("Email send successfully")
        navigate("/");
    }
}

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Help & Support</h1>
      
      <div className="mb-6 p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <div>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-2 border-b pb-2">
              <summary className="cursor-pointer font-medium">{faq.question}</summary>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2 flex items-center gap-2"><Mail size={18} /> support@example.com</p>
        <p className="mb-4 flex items-center gap-2"><Phone size={18} /> +1 234 567 890</p>
        
        <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
        <input
          type="email"
          placeholder="Your email"
          className="mb-2 p-2 w-full border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your message"
          className="mb-2 p-2 w-full border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
}
