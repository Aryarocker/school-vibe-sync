import { Calendar, MapPin, Clock, Users, Trophy, TrendingUp, Check, Eye, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import campusHero from "@/assets/campus-hero.jpg";

const Dashboard = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [joinedEvents, setJoinedEvents] = useState<number[]>([]);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [eventToJoin, setEventToJoin] = useState<any>(null);

  const handleJoinEvent = (event: any) => {
    setEventToJoin(event);
    setShowJoinDialog(true);
  };

  const confirmJoinEvent = () => {
    if (eventToJoin) {
      setJoinedEvents(prev => [...prev, eventToJoin.id]);
      setShowJoinDialog(false);
      setEventToJoin(null);
    }
  };

  const handleViewDetails = (event: any) => {
    setSelectedEvent(event);
  };
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
                <button 
                  onClick={() => handleJoinEvent(event)}
                  disabled={joinedEvents.includes(event.id)}
                  className={`flex-1 py-2 text-sm rounded-xl transition-smooth ${
                    joinedEvents.includes(event.id)
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'btn-campus'
                  }`}
                >
                  {joinedEvents.includes(event.id) ? (
                    <>
                      <Check size={16} className="inline mr-1" />
                      Joined
                    </>
                  ) : (
                    'Join Event'
                  )}
                </button>
                <button 
                  onClick={() => handleViewDetails(event)}
                  className="flex-1 btn-outline-campus py-2 text-sm"
                >
                  <Eye size={16} className="inline mr-1" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Event Confirmation Dialog */}
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent className="w-[90%] max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Join Event</DialogTitle>
          </DialogHeader>
          {eventToJoin && (
            <div className="space-y-4 py-4">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-lg">{eventToJoin.title}</h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{eventToJoin.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{eventToJoin.time}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>{eventToJoin.venue}</span>
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Are you sure you want to join <strong>{eventToJoin.title}</strong>?
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  You'll receive notifications about this event.
                </p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowJoinDialog(false)}
                  className="flex-1 rounded-xl"
                >
                  <X size={16} className="mr-2" />
                  Cancel
                </Button>
                <Button 
                  onClick={confirmJoinEvent}
                  className="flex-1 rounded-xl"
                >
                  <Check size={16} className="mr-2" />
                  Join Event
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="w-[90%] max-w-md rounded-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Event Details</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4 py-4">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-xl">{selectedEvent.title}</h3>
                <Badge variant="outline" className="rounded-xl">
                  {selectedEvent.category}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar size={18} className="text-primary" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-sm text-muted-foreground">{selectedEvent.date} at {selectedEvent.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-primary" />
                  <div>
                    <p className="font-medium">Venue</p>
                    <p className="text-sm text-muted-foreground">{selectedEvent.venue}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users size={18} className="text-primary" />
                  <div>
                    <p className="font-medium">Participants</p>
                    <p className="text-sm text-muted-foreground">{selectedEvent.participants} students joined</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Trophy size={18} className="text-primary" />
                  <div>
                    <p className="font-medium">Status</p>
                    <Badge variant={selectedEvent.status === 'Open' ? 'default' : 'secondary'} className="rounded-lg">
                      {selectedEvent.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium mb-2">Event Description</h4>
                <p className="text-sm text-muted-foreground">
                  Join us for an exciting {selectedEvent.category.toLowerCase()} event! This is a great opportunity to showcase your talents and connect with fellow students.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium mb-2">Requirements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Open to all students</li>
                  <li>• Bring your student ID</li>
                  <li>• Arrive 15 minutes early</li>
                </ul>
              </div>

              <Button 
                onClick={() => {
                  handleJoinEvent(selectedEvent);
                  setSelectedEvent(null);
                }}
                disabled={joinedEvents.includes(selectedEvent.id)}
                className="w-full rounded-xl"
              >
                {joinedEvents.includes(selectedEvent.id) ? (
                  <>
                    <Check size={16} className="mr-2" />
                    Already Joined
                  </>
                ) : (
                  'Join This Event'
                )}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;