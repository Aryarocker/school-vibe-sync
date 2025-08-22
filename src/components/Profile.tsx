import { Settings, Trophy, Calendar, Users, Medal, Star, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const userStats = [
    { label: "Events Joined", value: "24", icon: Calendar, color: "text-blue-600" },
    { label: "Certificates", value: "8", icon: Trophy, color: "text-yellow-600" },
    { label: "House Points", value: "450", icon: Star, color: "text-purple-600" },
    { label: "Friends", value: "32", icon: Users, color: "text-green-600" },
  ];

  const achievements = [
    { title: "Event Enthusiast", description: "Participated in 20+ events", icon: "🎯" },
    { title: "Team Player", description: "Joined 10 team events", icon: "🤝" },
    { title: "Cultural Star", description: "Won 3 cultural competitions", icon: "🎭" },
    { title: "Sports Champion", description: "First place in sports day", icon: "🏆" },
  ];

  const recentEvents = [
    { title: "Science Fair", status: "Certificate Earned", date: "Dec 10, 2024", color: "text-green-600" },
    { title: "Basketball Tournament", status: "Participated", date: "Dec 5, 2024", color: "text-blue-600" },
    { title: "Art Exhibition", status: "2nd Place", date: "Nov 28, 2024", color: "text-yellow-600" },
  ];

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Profile Header */}
      <div className="event-card text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full app-gradient flex items-center justify-center shadow-floating">
            <span className="text-3xl font-bold text-white">AS</span>
          </div>
          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-card">
            <Edit size={14} className="text-primary-foreground" />
          </button>
        </div>
        
        <div>
          <h1 className="text-xl font-bold text-foreground">Alex Smith</h1>
          <p className="text-muted-foreground">Grade 11, Blue House</p>
          <p className="text-sm text-primary font-medium">Student ID: 2024-BS-101</p>
        </div>

        <Button variant="outline" className="rounded-xl">
          <Settings size={16} className="mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label}
              className={`event-card text-center animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon size={24} className={`${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Achievements</h2>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`event-card text-center animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{achievement.title}</h3>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <div className="space-y-3">
          {recentEvents.map((event, index) => (
            <div 
              key={event.title}
              className={`event-card animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">{event.title}</h3>
                  <p className={`text-sm font-medium ${event.color}`}>{event.status}</p>
                </div>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* House Points Progress */}
      <div className="event-card space-y-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Trophy size={20} className="text-yellow-600" />
          <span>House Progress</span>
        </h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">Blue House Ranking</span>
            <span className="text-sm font-bold text-primary">#2</span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-smooth" style={{ width: '75%' }}></div>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>450 points</span>
            <span>Goal: 600 points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;