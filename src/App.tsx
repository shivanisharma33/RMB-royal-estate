import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";

import Index from "./pages/Index";
import Listings from "./pages/Listings";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Index />} />

            {/* PAGES */}
            <Route path="/pages/team" element={<Team />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/listings" element={<Listings />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
