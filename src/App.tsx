import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* GLOBAL NAVBAR */}
         

          <Routes>
            {/* HOME */}
            <Route path="/" element={<Index />} />

            {/* LISTINGS */}
            <Route path="pages/Listings" element={<Listings />} />

            {/* SOLD (TEMP PAGE) */}
            <Route
              path="/sold"
              element={
                <div className="min-h-screen bg-black text-white flex items-center justify-center">
                  <h1 className="text-3xl tracking-wide">
                    Sold Listings Coming Soon
                  </h1>
                </div>
              }
            />

          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
