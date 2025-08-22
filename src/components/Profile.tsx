import { Settings, Trophy, Calendar, Users, Medal, Star, Edit, Share2, Award, BookOpen, Target, TrendingUp, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileProps {
  onSettingsClick: () => void;
}

const Profile = ({ onSettingsClick }: ProfileProps) => {
  const userProfile = {
    name: "Alex Smith",
    studentId: "2024-BS-101",
    grade: "Grade 11",
    house: "Blue House",
    rank: 2,
    bio: "Passionate about science and sports. Love participating in school events!",
    joinedDate: "Sep 2023",
    location: "New York, USA"
  };

  const userStats = [
    { label: "Events Joined", value: "24", icon: Calendar, color: "text-blue-600", trend: "+3 this month" },
    { label: "Certificates", value: "8", icon: Trophy, color: "text-yellow-600", trend: "+2 this month" },
    { label: "House Points", value: "450", icon: Star, color: "text-purple-600", trend: "+50 this week" },
    { label: "Friends", value: "32", icon: Users, color: "text-green-600", trend: "+5 this month" },
  ];

  const achievements = [
    { title: "Event Enthusiast", description: "Participated in 20+ events", icon: "🎯", rarity: "Epic", date: "Dec 2024" },
    { title: "Team Player", description: "Joined 10 team events", icon: "🤝", rarity: "Rare", date: "Nov 2024" },
    { title: "Cultural Star", description: "Won 3 cultural competitions", icon: "🎭", rarity: "Legendary", date: "Oct 2024" },
    { title: "Sports Champion", description: "First place in sports day", icon: "🏆", rarity: "Epic", date: "Sep 2024" },
  ];

  const recentEvents = [
    { title: "Science Fair", status: "Certificate Earned", date: "Dec 10, 2024", color: "text-green-600", points: 50 },
    { title: "Basketball Tournament", status: "Participated", date: "Dec 5, 2024", color: "text-blue-600", points: 25 },
    { title: "Art Exhibition", status: "2nd Place", date: "Nov 28, 2024", color: "text-yellow-600", points: 35 },
  ];

  const skillLevels = [
    { skill: "Leadership", level: 85, color: "bg-blue-500" },
    { skill: "Creativity", level: 92, color: "bg-purple-500" },
    { skill: "Teamwork", level: 78, color: "bg-green-500" },
    { skill: "Communication", level: 88, color: "bg-orange-500" },
  ];

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Enhanced Profile Header */}
      <div className="event-card text-center space-y-6">
        <div className="relative">
          <div className="w-28 h-28 mx-auto rounded-full app-gradient flex items-center justify-center shadow-floating animate-scale-in">
            <span className="text-4xl font-bold text-white">AS</span>
          </div>
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-card transition-smooth hover:scale-110">
            <Edit size={16} className="text-primary-foreground" />
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{userProfile.name}</h1>
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <BookOpen size={14} />
              <span>{userProfile.grade} • {userProfile.house}</span>
            </p>
            <p className="text-sm text-primary font-medium">ID: {userProfile.studentId}</p>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin size={12} />
              <span>{userProfile.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>Joined {userProfile.joinedDate}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm mx-auto">{userProfile.bio}</p>

          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="rounded-xl">
              <Trophy size={12} className="mr-1" />
              House Rank #{userProfile.rank}
            </Badge>
            <Badge variant="outline" className="rounded-xl">
              <Target size={12} className="mr-1" />
              Rising Star
            </Badge>
          </div>
        </div>

        <div className="flex space-x-2 justify-center">
          <Button variant="outline" className="rounded-xl flex-1 max-w-32" onClick={onSettingsClick}>
            <Settings size={16} className="mr-2" />
            Settings
          </Button>
          <Button variant="outline" className="rounded-xl flex-1 max-w-32">
            <Share2 size={16} className="mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Enhanced Stats */}
      <div className="grid grid-cols-2 gap-3">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label}
              className={`event-card hover:shadow-floating transition-smooth animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon size={20} className={stat.color} />
                <TrendingUp size={14} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-green-500 font-medium">{stat.trend}</p>
            </div>
          );
        })}
      </div>

      {/* Skills Progress */}
      <div className="event-card space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Skill Development</h2>
        <div className="space-y-3">
          {skillLevels.map((skill, index) => (
            <div key={skill.skill} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`${skill.color} h-2 rounded-full transition-smooth animate-fade-in`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Achievements */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Achievements</h2>
          <Button variant="ghost" size="sm" className="text-primary">View All</Button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`event-card hover:shadow-floating transition-smooth animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs rounded-lg ${
                        achievement.rarity === 'Legendary' ? 'border-yellow-400 text-yellow-600' :
                        achievement.rarity === 'Epic' ? 'border-purple-400 text-purple-600' :
                        'border-blue-400 text-blue-600'
                      }`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock size={10} />
                    <span>Earned {achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
        <div className="space-y-3">
          {recentEvents.map((event, index) => (
            <div 
              key={event.title}
              className={`event-card hover:shadow-floating transition-smooth animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">{event.title}</h3>
                  <p className={`text-sm font-medium ${event.color} mb-2`}>{event.status}</p>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={10} className="text-yellow-500" />
                      <span>+{event.points} points</span>
                    </div>
                  </div>
                </div>
                <Award size={20} className={event.color.replace('text-', 'text-')} />
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