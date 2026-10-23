"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, MapPin, Send, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/Button";

export const ContactClientView: React.FC = () => {
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
                  <h3 className="font-bold text-cream-100">Physical Scribing Studio</h3>
                  <p className="text-charcoal-200">FamilyRootsHub Archival Media LLC</p>
                  <p className="text-charcoal-300 text-xs">P.O. Box 714, Historic Archives District</p>
                  <p className="text-charcoal-300 text-xs">Albany, NY 12207, United States</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-forest-800 text-xs text-charcoal-400 space-y-2">
              <p className="flex items-center">
                <HelpCircle className="w-3.5 h-3.5 text-bronze-400 mr-1.5" />
                <span>Looking for instant answers? Check our <Link href="/#faq-section" className="text-bronze-300 underline ml-1">General FAQ</Link>.</span>
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center mx-auto border-2 border-forest-700">
                  <CheckCircle2 className="w-8 h-8 text-forest-800" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to FamilyRootsHub. A member of our genealogical archival team will review your inquiry and reply via email within 24 to 48 business hours.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Order or Template Inquiry",
                        message: "",
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest-900">
                    Send an Archival Inquiry
                  </h2>
                  <p className="text-xs text-charcoal-500 mt-1">
                    Fill out the form below. All fields marked with an asterisk are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-charcoal-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Vance"
                      className="w-full text-sm bg-cream-100 border border-sepiaBorder rounded-xl px-4 py-2.5 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-forest-800 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-charcoal-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="robert@example.com"
                      className="w-full text-sm bg-cream-100 border border-sepiaBorder rounded-xl px-4 py-2.5 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-forest-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase text-charcoal-700 mb-1">
                    Inquiry Topic *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-sm bg-cream-100 border border-sepiaBorder rounded-xl px-4 py-2.5 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-forest-800 transition-all"
                  >
                    <option value="Order or Template Inquiry">Order or PDF Download Reissue</option>
                    <option value="Binder System Question">35-Page Master Binder Layout Question</option>
                    <option value="Digital Tablet Support">GoodNotes / Tablet Planner Question</option>
                    <option value="Custom Pedigree Request">Bulk Printing or Custom Pedigree Sizing</option>
                    <option value="Affiliate or Press">Affiliate, AdSense, or Press Inquiry</option>
                    <option value="Other">General Family History Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-charcoal-700 mb-1">
                    Your Message / Research Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can assist with your binders, census worksheets, or digital planning files..."
                    className="w-full text-sm bg-cream-100 border border-sepiaBorder rounded-xl p-4 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-forest-800 transition-all resize-y"
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
                    Send Message to Archival Team
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
