export default function OrdersPage() {
  const items = [
    {
      id: "BKG12345",
      type: "Booking",
      status: "Scheduled",
      steps: [
        { label: "Requested", done: true },
        { label: "Confirmed", done: true },
        { label: "Stylist Assigned", done: true },
        { label: "Scheduled", done: true },
        { label: "Completed", done: false },
      ],
      date: "21 Sep 2025",
    },
    {
      id: "ORD98765",
      type: "Order",
      status: "Shipped",
      steps: [
        { label: "Placed", done: true },
        { label: "Packed", done: true },
        { label: "Shipped", done: true },
        { label: "Out for Delivery", done: false },
        { label: "Delivered", done: false },
      ],
      date: "18 Sep 2025",
    },
  ];

  return (
    <div className="section-py">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="display-title text-3xl text-maroon">My Orders & Bookings</h1>
        <p className="mt-2 text-neutral-700">Track the status of your trial bookings and purchases.</p>

        <div className="mt-6 grid gap-4">
          {items.map((o) => (
            <div key={o.id} className="rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="font-medium text-maroon">{o.type} • #{o.id}</div>
                <div className="text-sm text-neutral-700">{o.date}</div>
              </div>
              <div className="mt-3 text-sm text-neutral-800">Current status: <span className="font-medium text-maroon">{o.status}</span></div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {o.steps.map((s, i) => (
                  <div key={i} className={`text-center px-2 py-2 rounded-md border ${s.done ? "bg-pastel-mint border-maroon/15" : "bg-white border-maroon/10"}`}>
                    <div className={`text-xs ${s.done ? "text-maroon" : "text-neutral-600"}`}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
