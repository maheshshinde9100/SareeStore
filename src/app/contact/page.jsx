"use client";
import { useState } from "react";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";
import Textarea from "../../components/ui/textarea";
import Button from "../../components/ui/button";

export default function ContactPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="section-py">
      <div className="mx-auto max-w-4xl px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="display-title text-3xl text-maroon">Contact & Support</h1>
          <p className="mt-2 text-neutral-700">We'd love to help you choose the perfect saree or schedule your trial.</p>

          <div className="mt-5 rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-maroon underline"
            >Chat on WhatsApp</a>

            <div className="mt-4">
              <div className="font-medium text-maroon">Live Chat</div>
              <p className="text-sm text-neutral-700">Click below to start a quick chat with our stylist.</p>
              <Button className="mt-2" variant="secondary" onClick={() => setChatOpen(true)}>Open Chat</Button>
              {chatOpen && (
                <div className="mt-3 rounded-lg border border-maroon/15 bg-white p-3">
                  <div className="text-sm text-neutral-700">Stylist: Hello! How can I assist you today?</div>
                  <div className="mt-2 text-xs text-neutral-600">(Demo chat UI)</div>
                  <div className="mt-2 text-right"><Button size="sm" variant="outline" onClick={() => setChatOpen(false)}>Close</Button></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="display-title text-2xl text-maroon">Send us a message</h2>
          <form onSubmit={onSubmit} className="mt-3 rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input placeholder="Your Name" required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label>Phone</Label>
              <Input type="tel" placeholder="+91-" />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea placeholder="How can we help?" required />
            </div>
            <div className="text-right">
              <Button type="submit">Send</Button>
            </div>
            {sent && <div className="text-sm text-green-700">Thanks! We will get back to you shortly.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
