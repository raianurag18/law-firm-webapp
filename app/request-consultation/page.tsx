import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RequestConsultationPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Request a Consultation</h1>
      <form className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div>
            <Label htmlFor="case-type">Case Type</Label>
            <Select>
              <SelectTrigger id="case-type">
                <SelectValue placeholder="Select a case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ipr">Intellectual Property Rights</SelectItem>
                <SelectItem value="corporate">Corporate Law</SelectItem>
                <SelectItem value="litigation">Litigation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="status">Urgency</Label>
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Have you been a client before?</Label>
            <RadioGroup defaultValue="no" className="flex items-center space-x-4">
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
            <Select>
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
            <Textarea id="message" placeholder="Enter your message" />
          </div>
        </div>
        <div className="mt-6">
          <Button type="submit" className="w-full">Submit Request</Button>
        </div>
      </form>
    </div>
  );
}
