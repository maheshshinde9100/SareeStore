"use client";
import { useState } from "react";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";
import Textarea from "../../components/ui/textarea";
import Select from "../../components/ui/select";
import Button from "../../components/ui/button";
import { useTrialBag } from "../../providers/trial-bag";

export default function BookingPage() {
  const { items } = useTrialBag();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="section-py">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="display-title text-3xl text-maroon">Book Your Home Trial</h1>
        <p className="mt-2 text-neutral-700">Choose date, time and address. We'll confirm your slot and a stylist will bring your selected sarees.</p>

        <div className="mt-6 rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm">
          <div className="text-sm text-neutral-700 mb-4">Selected sarees: <span className="font-medium text-maroon">{items.length}</span></div>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Date</Label>
                <Input type="date" required />
              </div>
              <div>
                <Label>Time</Label>
                <Select required>
                  <option value="">Select a slot</option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 2:00 PM</option>
                  <option>3:00 PM - 5:00 PM</option>
                  <option>5:00 PM - 7:00 PM</option>
                </Select>
              </div>
            </div>
            <div>
              <Label>Full Name</Label>
              <Input placeholder="Your Name" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Phone</Label>
                <Input type="tel" placeholder="+91-" required />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label>Address</Label>
              <Textarea placeholder="House no, street, area, city, pincode" required />
            </div>
            <div>
              <Label>Notes (optional)</Label>
              <Textarea placeholder="Any style preferences or special requests" />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="submit" variant="secondary">Confirm Booking</Button>
            </div>
          </form>
          {submitted && (
            <div className="mt-4 text-sm text-green-700">Your booking request has been submitted. We will confirm shortly via WhatsApp/SMS.</div>
          )}
        </div>
      </div>
    </div>
  );
}
