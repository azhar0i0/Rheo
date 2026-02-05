import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react"; // Optional: Icons add a huge pro touch

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the error for internal tracking
    console.error(`404 Error: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Subtle Background Element for Depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(var(--primary-rgb),0.08)_0%,transparent_100%)]" />
      
      <div className="w-full max-w-md text-center">
        {/* Visual Badge */}
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
          404 Error
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Lost in space?
        </h1>
        
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Sorry, we couldn’t find the page <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{location.pathname}</code>. 
          It might have been moved or deleted.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Professional Footer Links */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Think this is a mistake? Try searching or return to the homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;