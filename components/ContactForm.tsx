"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { serviceCategories } from "@/data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "hair",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMsg(json.message || "Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "hair", message: "" });
      } else {
        setStatus("error");
        setFeedbackMsg(json.error || "There was an error sending your message.");
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMsg("Network error. Please call (303) 304-8077 directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="p-4 rounded-xl bg-[#2B4035] text-[#FFFDF8] text-sm flex items-start gap-3 border border-[#A8B39F]">
          <CheckCircle2 className="w-5 h-5 text-[#A8B39F] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Inquiry Received</span>
            <span className="text-xs text-[#DDE3D9]">{feedbackMsg}</span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-900/10 text-red-800 text-sm flex items-start gap-3 border border-red-300">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs">{feedbackMsg}</div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-full-name" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Full Name *
          </label>
          <input
            id="contact-full-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-email-address" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Email Address *
          </label>
          <input
            id="contact-email-address"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@example.com"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone-number" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Phone Number
          </label>
          <input
            id="contact-phone-number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(303) 000-0000"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-service-category" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Service of Interest
          </label>
          <select
            id="contact-service-category"
            aria-label="Select service of interest"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors cursor-pointer"
          >
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.title}
              </option>
            ))}
            <option value="membership">Prana Plan Membership</option>
            <option value="general">General Inquiries & Consultations</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message-body" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
          Your Message or Consultation Details *
        </label>
        <textarea
          id="contact-message-body"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about what you're hoping to achieve, preferred days, or questions about our treatments..."
          className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8 py-3.5 bg-[#2B4035] hover:bg-[#1E2D25] text-[#FFFDF8] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#B5A18D]" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
