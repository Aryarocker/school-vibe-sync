import { useState } from "react";
import { 
  Moon, Sun, Monitor, Bell, Lock, User, Globe, 
  Shield, Smartphone, Mail, Eye, EyeOff, ChevronRight,
  Palette, Volume2, Vibrate, Calendar, Users2
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    events: true,
    reminders: true,
    achievements: false,
    social: true,
    email: false,
    push: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showAchievements: true,
    showActivity: false,
    allowMessages: true,
  });

  const settingSections = [
    {
      title: "Appearance",
      icon: Palette,
      items: [
        {
          label: "Theme",
          description: "Choose your preferred theme",
          component: (
            <div className="flex space-x-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
                className="rounded-xl"
              >
                <Sun size={16} className="mr-1" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
                className="rounded-xl"
              >
                <Moon size={16} className="mr-1" />
                Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("system")}
                className="rounded-xl"
              >
                <Monitor size={16} className="mr-1" />
                Auto
              </Button>
            </div>
          )
        }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          label: "Event Reminders",
          description: "Get notified about upcoming events",
          component: (
            <Switch
              checked={notifications.reminders}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({...prev, reminders: checked}))
              }
            />
          )
        },
        {
          label: "New Events",
          description: "Notifications for newly created events",
          component: (
            <Switch
              checked={notifications.events}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({...prev, events: checked}))
              }
            />
          )
        },
        {
          label: "Achievements",
          description: "Get notified when you earn badges",
          component: (
            <Switch
              checked={notifications.achievements}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({...prev, achievements: checked}))
              }
            />
          )
        },
        {
          label: "Social Updates",
          description: "Friend requests and social activities",
          component: (
            <Switch
              checked={notifications.social}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({...prev, social: checked}))
              }
            />
          )
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        {
          label: "Profile Visibility",
          description: "Make your profile visible to others",
          component: (
            <Switch
              checked={privacy.profileVisible}
              onCheckedChange={(checked) => 
                setPrivacy(prev => ({...prev, profileVisible: checked}))
              }
            />
          )
        },
        {
          label: "Show Achievements",
          description: "Display your achievements publicly",
          component: (
            <Switch
              checked={privacy.showAchievements}
              onCheckedChange={(checked) => 
                setPrivacy(prev => ({...prev, showAchievements: checked}))
              }
            />
          )
        },
        {
          label: "Activity Status",
          description: "Show when you're online",
          component: (
            <Switch
              checked={privacy.showActivity}
              onCheckedChange={(checked) => 
                setPrivacy(prev => ({...prev, showActivity: checked}))
              }
            />
          )
        }
      ]
    }
  ];

  const quickActions = [
    { label: "Edit Profile", icon: User, action: () => {} },
    { label: "Account Security", icon: Lock, action: () => {} },
    { label: "Language & Region", icon: Globe, action: () => {} },
    { label: "Connected Devices", icon: Smartphone, action: () => {} },
  ];

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground animate-fade-in">Settings</h1>
        <p className="text-muted-foreground animate-slide-up">
          Customize your Campus Connect experience
        </p>
      </div>

      {/* Quick Actions */}
      <div className="event-card space-y-3">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="space-y-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                onClick={action.action}
                className={`w-full flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-smooth animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{action.label}</span>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings Sections */}
      {settingSections.map((section, sectionIndex) => {
        const SectionIcon = section.icon;
        return (
          <div 
            key={section.title}
            className={`event-card space-y-4 animate-slide-up`}
            style={{ animationDelay: `${sectionIndex * 0.15}s` }}
          >
            <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <SectionIcon size={20} className="text-primary" />
              <span>{section.title}</span>
            </h2>
            
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-smooth"
                >
                  <div className="flex-1">
                    <Label className="font-medium text-foreground">{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="ml-4">
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Account Actions */}
      <div className="event-card space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Account</h2>
        <div className="space-y-2">
          <button className="w-full p-3 rounded-xl text-left hover:bg-muted transition-smooth">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Export Data</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Download your Campus Connect data</p>
          </button>
          
          <button className="w-full p-3 rounded-xl text-left hover:bg-destructive/10 transition-smooth">
            <div className="flex items-center justify-between">
              <span className="font-medium text-destructive">Delete Account</span>
              <ChevronRight size={16} className="text-destructive" />
            </div>
            <p className="text-sm text-muted-foreground">Permanently delete your account</p>
          </button>
        </div>
      </div>

      {/* App Info */}
      <div className="text-center text-muted-foreground text-sm space-y-1 animate-fade-in">
        <p>Campus Connect v2.1.0</p>
        <p>Made with ❤️ for students</p>
      </div>
    </div>
  );
};

export default Settings;