import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareerServices from "./pages/job-seekers/CareerServices";
import WorkshopsEvents from "./pages/job-seekers/WorkshopsEvents";
import CareerPathways from "./pages/job-seekers/CareerPathways";
import FundingOptions from "./pages/job-seekers/FundingOptions";
import VeteransServices from "./pages/job-seekers/VeteransServices";
import BusinessServices from "./pages/employers/BusinessServices";
import HiringResources from "./pages/employers/HiringResources";
import OnTheJobTraining from "./pages/employers/OnTheJobTraining";
import BoardInformation from "./pages/about/BoardInformation";
import Mission from "./pages/about/Mission";
import LocalPlan from "./pages/about/LocalPlan";
import TrainingProviders from "./pages/about/TrainingProviders";
import News from "./pages/News";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBase}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Job Seekers */}
          <Route path="/job-seekers/career-services" element={<CareerServices />} />
          <Route path="/job-seekers/workshops-events" element={<WorkshopsEvents />} />
          <Route path="/job-seekers/career-pathways" element={<CareerPathways />} />
          <Route path="/job-seekers/funding-options" element={<FundingOptions />} />
          <Route path="/job-seekers/veterans-services" element={<VeteransServices />} />
          
          {/* Employers */}
          <Route path="/employers/business-services" element={<BusinessServices />} />
          <Route path="/employers/on-the-job-training" element={<OnTheJobTraining />} />
          <Route path="/employers/hiring-resources" element={<HiringResources />} />
          
          {/* About */}
          <Route path="/about/board-information" element={<BoardInformation />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/local-plan" element={<LocalPlan />} />
          <Route path="/about/training-providers" element={<TrainingProviders />} />
          
          {/* General */}
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
