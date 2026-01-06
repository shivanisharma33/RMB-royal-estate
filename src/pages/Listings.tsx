import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= SINGLE IMAGE IMPORT ================= */

import listingImg from "@/assets/1.jpg";

/* ================= FILTER OPTIONS ================= */

const MIN_PRICES = [
  "$600,000",
  "$800,000",
  "$1,000,000",
  "$1,200,000",
  "$1,400,000",
  "$1,600,000",
  "$1,800,000",
  "$2,000,000",
  "$2,200,000",
];

const MAX_PRICES = [
  "$1,600,000",
  "$1,800,000",
  "$2,000,000",
  "$2,200,000",
  "$2,400,000",
  "$2,600,000",
  "$2,800,000",
  "$3,000,000+",
];

const COUNT_OPTIONS = ["1+", "2+", "3+", "4+", "5+", "6+"];

/* ================= LISTINGS DATA ================= */

const listings = [
  { id: 1, title: "80 Elizabeth Place, Eden Park", img: listingImg, large: true },
  { id: 2, title: "7 & 8 Cordell Court, Whittlesea", img: listingImg, large: true },

  { id: 3, title: "63 Ford Drive, Mansfield", img: listingImg, wide: true },

  { id: 4, title: "31 Baden Drive, Wandong", img: listingImg },
  { id: 5, title: "224 Edenvale Crescent, Kinglake West", img: listingImg },
  { id: 6, title: "253 Hidden Valley Boulevard", img: listingImg },

  { id: 7, title: "37 Baden Drive, Wandong", img: listingImg },
  { id: 8, title: "88 King Street, Wallan", img: listingImg },
  { id: 9, title: "1 Nez Avenue, Eltham", img: listingImg },

  { id: 10, title: "15 Thornbill Drive, Plenty", img: listingImg },
  { id: 11, title: "120 Dolomite Rise, Hidden Valley", img: listingImg },
  { id: 12, title: "11 The Heights, Hidden Valley", img: listingImg },

  { id: 13, title: "645 Glenburnie Road, Whittlesea", img: listingImg },
];

/* ================= PAGE ================= */

const Listings = () => {
  return (
    <main className="bg-black text-white min-h-screen pt-28">
      <Navbar />

      {/* ================= FILTER BAR ================= */}
      <section className="px-10 py-6 border-b border-white/20 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-sm">

          {/* SEARCH */}
          <input
            placeholder="Search for a listing"
            className="col-span-2 bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 outline-none text-white placeholder-white/60"
          />

          {/* MIN PRICE */}
          <select className="bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 text-white">
            <option>Min Price</option>
            {MIN_PRICES.map((price) => (
              <option key={price}>{price}</option>
            ))}
          </select>

          {/* MAX PRICE */}
          <select className="bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 text-white">
            <option>Max Price</option>
            {MAX_PRICES.map((price) => (
              <option key={price}>{price}</option>
            ))}
          </select>

          {/* BED */}
          <select className="bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 text-white">
            <option>Bed</option>
            {COUNT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          {/* BATH */}
          <select className="bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 text-white">
            <option>Bath</option>
            {COUNT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          {/* CAR */}
          <select className="bg-gradient-to-b from-[#111] to-[#000] border border-white/20 px-4 py-3 text-white">
            <option>Car</option>
            {COUNT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </section>

      {/* ================= LISTINGS ================= */}
      <section className="px-10 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
          {listings.filter(l => l.large).map(item => (
            <ListingCard key={item.id} {...item} ratio="16/9" />
          ))}
        </div>

        {listings.filter(l => l.wide).map(item => (
          <ListingCard key={item.id} {...item} ratio="21/9" />
        ))}

        <div className="grid md:grid-cols-3 gap-8">
          {listings.filter(l => !l.large && !l.wide).map(item => (
            <ListingCard key={item.id} {...item} ratio="4/3" />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Listings;

/* ================= CARD ================= */

const ListingCard = ({
  title,
  img,
  ratio,
}: {
  title: string;
  img: string;
  ratio: "16/9" | "21/9" | "4/3";
}) => {
  const aspect =
    ratio === "21/9"
      ? "aspect-[21/9]"
      : ratio === "16/9"
      ? "aspect-[16/9]"
      : "aspect-[4/3]";

  return (
    <div className={`relative overflow-hidden ${aspect} group`}>
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <div className="absolute top-4 left-4 text-xs uppercase tracking-wide transition-transform duration-500 group-hover:translate-y-1">
        {title}
      </div>
    </div>
  );
};
