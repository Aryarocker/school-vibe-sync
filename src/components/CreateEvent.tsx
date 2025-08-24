import { useState } from "react";
import { Calendar, MapPin, Users, Clock, FileText, Image, Trophy, Upload, DollarSign, UserCheck, Tag, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    endTime: "",
    venue: "",
    capacity: "",
    eligibility: "",
    registrationDeadline: "",
    rules: "",
    prerequisites: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    registrationFee: "",
    teamMinSize: "",
    teamMaxSize: "",
    tags: "",
    isTeamEvent: "false",
    requiresApproval: "true",
    allowWaitlist: "false",
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

          <div className="grid grid-cols-2 gap-4">
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
            
            <div>
              <Label htmlFor="endTime" className="text-sm font-medium text-foreground">End Time (Optional)</Label>
              <Input
                id="endTime"
                type="time"
                value={formData.endTime}
                onChange={(e) => handleInputChange("endTime", e.target.value)}
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
              <Label htmlFor="registrationFee" className="text-sm font-medium text-foreground flex items-center space-x-1">
                <DollarSign size={14} />
                <span>Registration Fee</span>
              </Label>
              <Input
                id="registrationFee"
                type="number"
                placeholder="0 (Free event)"
                value={formData.registrationFee}
                onChange={(e) => handleInputChange("registrationFee", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
          </div>

          {/* Team Event Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-border">
            <div>
              <Label className="text-sm font-medium text-foreground">Team Event</Label>
              <p className="text-xs text-muted-foreground">Participants can register as teams</p>
            </div>
            <Switch
              checked={formData.isTeamEvent === "true"}
              onCheckedChange={(checked) => handleInputChange("isTeamEvent", checked.toString())}
            />
          </div>

          {/* Team Size Fields (shown only if team event) */}
          {formData.isTeamEvent === "true" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="teamMinSize" className="text-sm font-medium text-foreground">Min Team Size</Label>
                <Input
                  id="teamMinSize"
                  type="number"
                  placeholder="e.g., 2"
                  value={formData.teamMinSize}
                  onChange={(e) => handleInputChange("teamMinSize", e.target.value)}
                  className="mt-1 rounded-xl"
                />
              </div>
              
              <div>
                <Label htmlFor="teamMaxSize" className="text-sm font-medium text-foreground">Max Team Size</Label>
                <Input
                  id="teamMaxSize"
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.teamMaxSize}
                  onChange={(e) => handleInputChange("teamMaxSize", e.target.value)}
                  className="mt-1 rounded-xl"
                />
              </div>
            </div>
          )}
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

        {/* Additional Details */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <FileText size={20} className="text-primary" />
            <span>Additional Details</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="rules" className="text-sm font-medium text-foreground">Event Rules & Requirements</Label>
              <Textarea
                id="rules"
                placeholder="Describe the rules, requirements, and guidelines for this event..."
                value={formData.rules}
                onChange={(e) => handleInputChange("rules", e.target.value)}
                className="mt-1 rounded-xl min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="prerequisites" className="text-sm font-medium text-foreground">Prerequisites</Label>
              <Textarea
                id="prerequisites"
                placeholder="Any skills, equipment, or preparation required..."
                value={formData.prerequisites}
                onChange={(e) => handleInputChange("prerequisites", e.target.value)}
                className="mt-1 rounded-xl min-h-[60px]"
              />
            </div>

            <div>
              <Label htmlFor="tags" className="text-sm font-medium text-foreground flex items-center space-x-1">
                <Tag size={14} />
                <span>Event Tags</span>
              </Label>
              <Input
                id="tags"
                placeholder="e.g., science, competition, fun, creative (comma separated)"
                value={formData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
            <UserCheck size={20} className="text-primary" />
            <span>Contact Information</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="contactName" className="text-sm font-medium text-foreground">Event Coordinator</Label>
              <Input
                id="contactName"
                placeholder="Your full name"
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                className="mt-1 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="contactEmail" className="text-sm font-medium text-foreground flex items-center space-x-1">
                  <Mail size={14} />
                  <span>Email Address</span>
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="coordinator@school.edu"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  className="mt-1 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="contactPhone" className="text-sm font-medium text-foreground flex items-center space-x-1">
                  <Phone size={14} />
                  <span>Phone Number (Optional)</span>
                </Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                  className="mt-1 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Settings */}
        <div className="event-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Event Settings</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl border border-border">
              <div>
                <Label className="text-sm font-medium text-foreground">Requires Approval</Label>
                <p className="text-xs text-muted-foreground">Event needs admin approval before publishing</p>
              </div>
              <Switch
                checked={formData.requiresApproval === "true"}
                onCheckedChange={(checked) => handleInputChange("requiresApproval", checked.toString())}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl border border-border">
              <div>
                <Label className="text-sm font-medium text-foreground">Allow Waitlist</Label>
                <p className="text-xs text-muted-foreground">Allow students to join waitlist when event is full</p>
              </div>
              <Switch
                checked={formData.allowWaitlist === "true"}
                onCheckedChange={(checked) => handleInputChange("allowWaitlist", checked.toString())}
              />
            </div>
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