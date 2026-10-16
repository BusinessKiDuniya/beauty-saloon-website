"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "Hair Stylist",
    interestType: "Booth Rental",
    yearsExperience: "3-5 years",
    portfolio: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMsg(json.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          specialty: "Hair Stylist",
          interestType: "Booth Rental",
          yearsExperience: "3-5 years",
          portfolio: "",
          message: ""
        });
      } else {
        setStatus("error");
        setFeedbackMsg(json.error || "Failed to submit application.");
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMsg("Network error. Please email pranabeautyandwellness@gmail.com.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="p-4 rounded-xl bg-[#2B4035] text-[#FFFDF8] text-sm flex items-start gap-3 border border-[#A8B39F]">
          <CheckCircle2 className="w-5 h-5 text-[#A8B39F] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Application Submitted</span>
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
          <label htmlFor="careers-full-name" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Full Name *
          </label>
          <input
            id="careers-full-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="careers-email-address" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Email Address *
          </label>
          <input
            id="careers-email-address"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.com"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="careers-phone-number" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Phone Number
          </label>
          <input
            id="careers-phone-number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(303) 000-0000"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="careers-specialty-select" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Your Specialty *
          </label>
          <select
            id="careers-specialty-select"
            aria-label="Select your specialty"
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          >
            <option value="Hair Stylist">Hair Stylist / Colorist</option>
            <option value="Lash Artist">Lash Artist / Esthetician</option>
            <option value="Nail Artist">Nail Artist</option>
            <option value="Massage Therapist">Massage Therapist</option>
            <option value="Makeup Artist">Makeup Artist</option>
          </select>
        </div>

        <div>
          <label htmlFor="careers-arrangement-type" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Arrangement Type *
          </label>
          <select
            id="careers-arrangement-type"
            aria-label="Select arrangement type"
            value={formData.interestType}
            onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          >
            <option value="Booth Rental">Booth Rental (Established Client Base)</option>
            <option value="Commission">Commission Stylist / Support</option>
            <option value="Either">Open to Discussion</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="careers-years-experience" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Years in the Industry
          </label>
          <select
            id="careers-years-experience"
            aria-label="Select years in industry"
            value={formData.yearsExperience}
            onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          >
            <option value="1-2 years">1 – 2 years</option>
            <option value="3-5 years">3 – 5 years</option>
            <option value="6-10 years">6 – 10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="careers-instagram-portfolio" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
            Instagram or Portfolio Link
          </label>
          <input
            id="careers-instagram-portfolio"
            type="text"
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            placeholder="@yourhandle or website"
            className="w-full bg-[#FFFDF8] border border-[#EDE7DD] text-[#292A27] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2B4035] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="careers-cover-note" className="block text-xs uppercase tracking-wider text-[#5C5E58] font-semibold mb-1.5">
          Tell Us About You & Your Goals *
        </label>
        <textarea
          id="careers-cover-note"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="What kind of environment are you looking for? What excites you about Prana's sustainable and holistic approach?"
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
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-[#B5A18D]" />
            <span>Submit Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
