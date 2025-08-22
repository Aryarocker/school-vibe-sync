import { Calendar, MapPin, Clock, Users, Trophy, TrendingUp } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const Dashboard = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Fair",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      venue: "Main Auditorium",
      participants: 150,
      category: "Academic",
      status: "Open"
    },
    {
      id: 2,
      title: "Inter-House Basketball",
      date: "Dec 18, 2024", 
      time: "4:00 PM",
      venue: "Sports Complex",
      participants: 64,
      category: "Sports",
      status: "Registration Closing"
    },
    {
      id: 3,
      title: "Cultural Night",
      date: "Dec 20, 2024",
      time: "6:00 PM", 
      venue: "Open Theater",
      participants: 200,
      category: "Cultural",
      status: "Open"
    }
  ];

  const quickStats = [
    { label: "Events This Month", value: "24", icon: Calendar, color: "text-blue-600" },
    { label: "Total Participants", value: "1,250", icon: Users, color: "text-purple-600" },
    { label: "House Points", value: "450", icon: Trophy, color: "text-green-600" },
    { label: "Achievements", value: "12", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 app-gradient opacity-80"></div>
          <div className="relative z-10 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2 animate-fade-in">
              Welcome to Campus Connect! 🎓
            </h1>
            <p className="text-white/90 animate-slide-up">
              Discover and join amazing events happening in your school
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label}
              className={`event-card animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                  <Icon size={20} className={stat.color} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Upcoming Events</h2>
          <button className="text-sm text-primary font-medium">View All</button>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`event-card animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{event.participants} joined</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    event.status === 'Open' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {event.status}
                  </span>
                  <span className="text-xs text-primary font-medium">{event.category}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 btn-campus py-2 text-sm">
                  Join Event
                </button>
                <button className="flex-1 btn-outline-campus py-2 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;