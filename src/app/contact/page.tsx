"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, MapPin, Send, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Order or Template Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate support ticket submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-cream-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-forest-200">
            <MessageSquare className="w-3.5 h-3.5 text-forest-700" />
            <span>Genealogist Support</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight">
            Get in Touch with Our Archival Team
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Have a question about our printable binders, digital tablet planners, or custom pedigree orders? We are here to assist your research journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-forest-900 text-cream-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-vault">
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream-50">Support Headquarters</h2>
              <p className="text-xs text-charcoal-300 mt-1">
                FamilyRootsHub is managed by certified lineage researchers and archival keepers.
              </p>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center shrink-0 text-bronze-300 border border-forest-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">Direct Email Support</h3>
                  <a
                    href="mailto:support@familyrootshub.com"
                    className="text-bronze-300 hover:text-bronze-200 underline font-medium"
                  >
                    support@familyrootshub.com
                  </a>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">Average response time: 24–48 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center shrink-0 text-bronze-300 border border-forest-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">Office Working Hours</h3>
                  <p className="text-charcoal-200">Monday – Friday: 9:00 AM – 5:00 PM EST</p>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">Closed on US Federal Holidays</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center shrink-0 text-bronze-300 border border-forest-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">Guaranteed Digital Access</h3>
                  <p className="text-charcoal-200">Need your PDF order resent or a new download link?</p>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">
                    Include your order receipt email and we will reissue instant download links.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center shrink-0 text-bronze-300 border border-forest-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">Mailing & Archival Office</h3>
                  <p className="text-charcoal-200">FamilyRootsHub Research Media</p>
                  <p className="text-charcoal-300">100 Heritage Way, Suite 400</p>
                  <p className="text-charcoal-300">Boston, MA 02108, United States</p>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQs */}
            <div className="p-4 rounded-xl bg-forest-800/80 border border-forest-700/60 text-xs text-charcoal-200 space-y-2">
              <div className="flex items-center space-x-2 text-bronze-300 font-bold">
                <HelpCircle className="w-4 h-4" />
                <span>Looking for Immediate Answers?</span>
              </div>
              <p>
                Check our extensive FAQ library for answers on paper selection, GoodNotes importing, and Ahnentafel charts.
              </p>
              <Link href="/#faq-section" className="inline-block text-cream-100 underline font-semibold hover:text-bronze-300">
                Browse Frequently Asked Questions &rarr;
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-forest-900">Send an Archival Inquiry</h2>
              <p className="text-xs text-charcoal-500 mt-1">
                Fill out the form below and our lineage specialists will get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-forest-100 border border-forest-300 p-8 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-forest-800 text-cream-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-bronze-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900">Message Received!</h3>
                <p className="text-xs text-charcoal-700 max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. A copy of your inquiry has been logged, and our team will reply to <strong>{formData.email}</strong> within 1–2 business days.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Order or Template Inquiry", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Margaret Sullivan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sepiaBorder bg-cream-100 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-sepiaBorder bg-cream-100 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sepiaBorder bg-cream-100 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800"
                  >
                    <option value="Order or Template Inquiry">Order or PDF Download Support</option>
                    <option value="35-Page Master Binder Question">35-Page Master Binder Setup Question</option>
                    <option value="GoodNotes Digital Planner Setup">GoodNotes / Tablet Planner Question</option>
                    <option value="Census Extraction Worksheets">Census Extraction Worksheets</option>
                    <option value="Affiliate or Press Inquiry">Affiliate / Media / Press Inquiry</option>
                    <option value="Other">Other Genealogical Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                    How Can We Help? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about your question, order number, or research topic..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sepiaBorder bg-cream-100 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto"
                    leftIcon={<Send className="w-4 h-4" />}
                  >
                    <span>Send Support Message</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
