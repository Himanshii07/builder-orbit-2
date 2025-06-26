import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-xr-neon/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-xr-cyber/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-xr-void/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative text-center space-y-8 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-8">
            <Zap className="w-4 h-4 mr-2 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              Reality not found
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-foreground via-xr-neon to-xr-cyber bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Lost in the Metaverse
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The reality you're looking for seems to have been teleported to
              another dimension. Let's get you back to familiar territory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground"
              onClick={() => window.history.back()}
            >
              <span>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </span>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Error code: <span className="font-mono text-xr-neon">XR_404</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
