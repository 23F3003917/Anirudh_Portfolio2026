import { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";
import SplitIntro from "@/components/portfolio/SplitIntro";

const queryClient = new QueryClient();

const INTRO_FLAG = "ast_intro_played";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.sessionStorage.getItem(INTRO_FLAG) === "1") {
        setIntroDone(true);
      }
    } catch {
      // ignore storage failures
    }
  }, []);

  // Lock body scroll while the intro overlay is showing
  useEffect(() => {
    if (introDone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [introDone]);

  const handleIntroComplete = () => {
    try {
      window.sessionStorage.setItem(INTRO_FLAG, "1");
    } catch {
      // ignore storage failures
    }
    setIntroDone(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        {!introDone && <SplitIntro onComplete={handleIntroComplete} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
