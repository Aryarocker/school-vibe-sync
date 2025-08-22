import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import EventCalendar from "@/components/EventCalendar";
import CreateEvent from "@/components/CreateEvent";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      case "profile":
        return <Profile onSettingsClick={() => setActiveTab("settings")} />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="campus-connect-theme">
      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="animate-fade-in">
          {renderContent()}
        </main>

        {/* Bottom Navigation */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
