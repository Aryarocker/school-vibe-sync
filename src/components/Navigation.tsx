import { useState } from "react";
import { Home, Calendar, Plus, Users, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "create", icon: Plus, label: "Create" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border z-50">
      <div className="flex items-center justify-around p-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "bottom-nav-item min-w-[64px]",
                isActive && "active"
              )}
            >
              <Icon 
                size={20} 
                className={cn(
                  "mb-1 transition-smooth",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )} 
              />
              <span 
                className={cn(
                  "text-xs font-medium transition-smooth",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;