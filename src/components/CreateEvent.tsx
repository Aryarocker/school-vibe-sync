import { useState } from "react";
import { Calendar, MapPin, Users, Clock, FileText, Image, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    venue: "",
    capacity: "",
    eligibility: "",
    registrationDeadline: "",
  });

  const categories = [
    { id: "academic", label: "Academic", icon: FileText, color: "text-blue-600" },
    { id: "sports", label: "Sports", icon: Trophy, color: "text-green-600" },
    { id: "cultural", label: "Cultural", icon: Image, color: "text-purple-600" },
    { id: "competitions", label: "Competitions", icon: Trophy, color: "text-orange-600" },
  ];

  const eligibilityOptions = [
    "All Students",
    "Grade 9-10",
    "Grade 11-12", 
    "House Teams Only",
    "Club Members Only"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Data:", formData);
    // Handle form submission
  };

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground animate-fade-in">Create New Event</h1>
        <p className="text-muted-foreground animate-slide-up">
          Organize amazing events for your school community
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <FileText size={20} className="text-primary" />
            <span>Basic Information</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-sm font-medium text-foreground">Event Title</Label>
              <Input
                id="title"
                placeholder="e.g., Annual Science Fair 2024"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-sm font-medium text-foreground">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your event, rules, and what participants can expect..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="mt-1 rounded-xl min-h-[100px]"
              />
            </div>

            {/* Category Selection */}
            <div>
              <Label className="text-sm font-medium text-foreground">Event Category</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleInputChange("category", category.id)}
                      className={`p-3 rounded-xl border-2 transition-smooth ${
                        formData.category === category.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-card hover:bg-muted'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        <Icon size={20} className={category.color} />
                        <span className="text-sm font-medium">{category.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <Calendar size={20} className="text-primary" />
            <span>Event Details</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="text-sm font-medium text-foreground">Event Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
            
            <div>
              <Label htmlFor="time" className="text-sm font-medium text-foreground">Start Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="venue" className="text-sm font-medium text-foreground flex items-center space-x-1">
              <MapPin size={14} />
              <span>Venue</span>
            </Label>
            <Input
              id="venue"
              placeholder="e.g., Main Auditorium, Sports Complex"
              value={formData.venue}
              onChange={(e) => handleInputChange("venue", e.target.value)}
              className="mt-1 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="capacity" className="text-sm font-medium text-foreground flex items-center space-x-1">
                <Users size={14} />
                <span>Max Participants</span>
              </Label>
              <Input
                id="capacity"
                type="number"
                placeholder="e.g., 100"
                value={formData.capacity}
                onChange={(e) => handleInputChange("capacity", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
            
            <div>
              <Label htmlFor="registrationDeadline" className="text-sm font-medium text-foreground flex items-center space-x-1">
                <Clock size={14} />
                <span>Registration Deadline</span>
              </Label>
              <Input
                id="registrationDeadline"
                type="date"
                value={formData.registrationDeadline}
                onChange={(e) => handleInputChange("registrationDeadline", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <Users size={20} className="text-primary" />
            <span>Eligibility</span>
          </h2>
          
          <div className="space-y-2">
            {eligibilityOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleInputChange("eligibility", option)}
                className={`w-full p-3 rounded-xl border-2 text-left transition-smooth ${
                  formData.eligibility === option
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:bg-muted'
                }`}
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex space-x-3">
          <button
            type="button"
            className="flex-1 btn-outline-campus"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="flex-1 btn-campus"
          >
            Submit for Approval
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;