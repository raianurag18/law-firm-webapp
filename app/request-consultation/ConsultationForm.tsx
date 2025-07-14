"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { practiceAreasWithServices } from "@/lib/practice-area-data";
import { handleFormSubmit } from "@/app/actions";

interface ConsultationFormProps {
  defaultPracticeArea?: string;
  defaultServiceType?: string;
}

export default function ConsultationForm({
  defaultPracticeArea = "",
  defaultServiceType = "",
}: ConsultationFormProps) {
  const router = useRouter();
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(defaultPracticeArea);
  const [selectedService, setSelectedService] = useState(defaultServiceType);
  const practiceAreas = Object.keys(practiceAreasWithServices);
  const services = (selectedPracticeArea && practiceAreasWithServices[selectedPracticeArea]) || [];

  useEffect(() => {
    if (defaultPracticeArea) {
      setSelectedPracticeArea(defaultPracticeArea);
    }
    if (defaultServiceType) {
      setSelectedService(defaultServiceType);
    }
  }, [defaultPracticeArea, defaultServiceType]);

  const handlePracticeAreaChange = (area: string) => {
    setSelectedPracticeArea(area);
    setSelectedService("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedPracticeArea || !selectedService) {
      alert("Please select a Practice Area and Service Type.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const phone = formData.get("phone") as string;

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    await handleFormSubmit(formData);
    alert("Your request has been submitted successfully!");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
        </div>
        <div>
          <Label htmlFor="practice-area">Practice Area</Label>
          <Select name="practice-area" value={selectedPracticeArea} onValueChange={handlePracticeAreaChange} required>
            <SelectTrigger id="practice-area">
              <SelectValue placeholder="Select a practice area" />
            </SelectTrigger>
            <SelectContent>
              {practiceAreas.map((area) => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="service-type">Service Type</Label>
          <Select name="service-type" value={selectedService} onValueChange={setSelectedService} disabled={!selectedPracticeArea} required>
            <SelectTrigger id="service-type">
              <SelectValue placeholder="Select a service type" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Have you been a client before?</Label>
          <RadioGroup name="is-existing-client" defaultValue="no" className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="communication-mode">Preferred Mode of Communication</Label>
          <Select name="communication-mode" required>
            <SelectTrigger id="communication-mode">
              <SelectValue placeholder="Select a mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone Call</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Enter your message" />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" className="w-full">Submit Request</Button>
      </div>
    </form>
  );
}
