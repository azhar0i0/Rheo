import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
// Services
import AllServices from "./pages/AllServices";
import WebServices from "./pages/Services/WebServices";
import AppServices from "./pages/Services/AppServices";
import BackendServices from "./pages/Services/BackendServices";
import SaasServices from "./pages/Services/SaasServices";
import APIIntegrationServices from "./pages/Services/APIIntegrationsServices";
// Other Pages
import Blog from "./pages/Blog";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";
import CustomSoftwareServices from "./pages/Services/CustomSoftwareServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Services */}
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/web-services" element={<WebServices />} />
          <Route path="/app-services" element={<AppServices />} />
          <Route path="/backend-services" element={<BackendServices />} />
          <Route path="/saas-services" element={<SaasServices />} />
          <Route path="/custom-software-services" element={<CustomSoftwareServices />} />
          <Route path="/api-integration-services" element={<APIIntegrationServices />} />
          {/* other pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/start-project" element={<StartProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
