
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-koze-offwhite flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-koze-green">404</h1>
        <p className="text-xl text-koze-green/90 mb-6">
          Sorry, this page does not exist
        </p>
        <p className="text-koze-green/80 mb-8">
          The page you are looking for does not exist. It may have been moved, deleted, or you may have typed incorrectly.
        </p>
        <Button 
          className="bg-koze-green hover:bg-koze-green/90 text-white font-medium px-8"
          size="lg"
          onClick={() => window.location.href = "/"}
        >
          Go to homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
