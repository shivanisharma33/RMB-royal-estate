import hero from "@/assets/contact.jpg";
import horse from "@/assets/Horses.jpg";
import logo from "@/assets/rmb.png";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-light">

      {/* ================= HERO (BEHIND NAVBAR) ================= */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        
        {/* Background Image */}
        <img
          src={hero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="w-28 opacity-90"
          />
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-8 md:px-16 py-24">

        {/* List With Us */}
        <div>
          <h4 className="text-xs tracking-widest mb-6 uppercase">
            LIST WITH US
          </h4>
          <p className="text-sm mb-4 max-w-xs">
            If you prefer bold marketing and exceptional results for your property:
          </p>
          <a
            href="tel:0390174848"
            className="underline text-sm hover:text-white/70 transition"
          >
            03 9017 4848
          </a>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-xs tracking-widest mb-6 uppercase">
            LOCATION
          </h4>
          <p className="text-sm mb-4">
            110/95 Hazel Glen Drive, Doreen
          </p>
          <a
            href="tel:0390174848"
            className="underline text-sm hover:text-white/70 transition"
          >
            03 9017 4848
          </a>
        </div>

        {/* Map */}
        <div className="w-full h-[220px] grayscale overflow-hidden">
          <iframe
            title="Hazel Glen Drive Map"
            src="https://www.google.com/maps?q=Hazel%20Glen%20Drive%20Doreen&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= IMAGE + FORM ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-16 py-24">

        {/* Image */}
        <img
          src={horse}
          alt="Lifestyle"
          className="w-full h-full object-cover grayscale"
        />

        {/* Form */}
        <div>
          <h2 className="text-2xl tracking-wide mb-10 uppercase">
            Message Us
          </h2>

          <form className="space-y-6">
            {["Name", "Email", "Phone", "Type of Enquiry"].map((item) => (
              <input
                key={item}
                placeholder={item}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none focus:border-white transition"
              />
            ))}

            <textarea
              placeholder="Enquiry"
              rows={4}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none focus:border-white transition"
            />

            <button
              type="submit"
              className="border border-white px-10 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
