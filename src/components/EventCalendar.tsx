import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Events", color: "bg-gray-500" },
    { id: "academic", label: "Academic", color: "bg-blue-500" },
    { id: "sports", label: "Sports", color: "bg-green-500" },
    { id: "cultural", label: "Cultural", color: "bg-purple-500" },
    { id: "competitions", label: "Competitions", color: "bg-orange-500" },
  ];

  const events = [
    { id: 1, title: "Science Fair", date: 15, category: "academic", time: "10:00 AM" },
    { id: 2, title: "Basketball Finals", date: 18, category: "sports", time: "4:00 PM" },
    { id: 3, title: "Cultural Night", date: 20, category: "cultural", time: "6:00 PM" },
    { id: 4, title: "Math Olympiad", date: 22, category: "competitions", time: "9:00 AM" },
    { id: 5, title: "Art Exhibition", date: 25, category: "cultural", time: "2:00 PM" },
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const getEventForDay = (day: number) => {
    return events.find(event => 
      event.date === day && 
      (selectedFilter === "all" || event.category === selectedFilter)
    );
  };

  const getFilterColor = (category: string) => {
    const filter = filters.find(f => f.id === category);
    return filter?.color || "bg-gray-500";
  };

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Event Calendar</h1>
        <Button variant="outline" size="sm" className="rounded-xl">
          <Plus size={16} className="mr-1" />
          Add Event
        </Button>
      </div>

      {/* Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-smooth ${
              selectedFilter === filter.id
                ? 'bg-primary text-primary-foreground shadow-floating'
                : 'bg-card text-muted-foreground hover:bg-muted'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${filter.color}`}></div>
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Calendar Header */}
      <div className="event-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex space-x-1">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {getDaysInMonth(currentDate).map((day, index) => {
            const event = day ? getEventForDay(day) : null;
            const isToday = day === new Date().getDate() && 
                          currentDate.getMonth() === new Date().getMonth() &&
                          currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div key={index} className="relative">
                {day && (
                  <div 
                    className={`p-2 rounded-lg text-center cursor-pointer transition-smooth hover:bg-muted ${
                      isToday ? 'bg-primary text-primary-foreground font-bold' : 'text-foreground'
                    }`}
                  >
                    <div className="text-sm">{day}</div>
                    {event && (
                      <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${getFilterColor(event.category)}`}></div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event List for Selected Day */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Today's Events</h3>
        {events.filter(event => selectedFilter === "all" || event.category === selectedFilter).map((event, index) => (
          <div 
            key={event.id}
            className={`event-card animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getFilterColor(event.category)}`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </div>
              <button className="text-primary text-sm font-medium hover:text-primary/80 transition-smooth">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;