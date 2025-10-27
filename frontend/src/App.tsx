import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
