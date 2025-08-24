import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import EventCalendar from "@/components/EventCalendar";
import CreateEvent from "@/components/CreateEvent";
import Profile from "@/components/Profile";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "calendar":
        return <EventCalendar />;
      case "create":
        return <CreateEvent />;
      case "community":
        return (
          <div className="p-4 pb-20 flex items-center justify-center h-[60vh]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full app-gradient flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground">Community Coming Soon</h2>
              <p className="text-muted-foreground">Connect with classmates and join study groups</p>
            </div>
          </div>
        );
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="animate-fade-in">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
