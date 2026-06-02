"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { Loader2, Upload, Paperclip } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    salary: "",
    coverLetter: "",
    agreed: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreed: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast.error("Please agree to our privacy policy and terms.");
      return;
    }

    if (!fileName) {
      toast.error("Please upload your resume (PDF/DOCX).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        `Thank you, ${formData.name}! Your application for the "${jobTitle}" position has been submitted successfully.`
      );
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        salary: "",
        coverLetter: "",
        agreed: false,
      });
      setFileName("");
      
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px] bg-[var(--bg-body)] border border-primary/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold darkLight-text-color">
            Apply for Position
          </DialogTitle>
          <DialogDescription className="text-sm darkLight-text-color/70 font-semibold mt-1">
            Role: <span className="text-primary">{jobTitle}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="darkLight-text-color font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Adnan Chowdhury"
              className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="darkLight-text-color font-medium">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="candidate@example.com"
                className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="darkLight-text-color font-medium">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+880 17XX XXXXXX"
                className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="portfolio" className="darkLight-text-color font-medium">
                Portfolio / LinkedIn URL
              </Label>
              <Input
                id="portfolio"
                name="portfolio"
                type="url"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/username"
                className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="salary" className="darkLight-text-color font-medium">
                Expected Salary (BDT/Month)
              </Label>
              <Input
                id="salary"
                name="salary"
                type="text"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., 50,000"
                className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50"
              />
            </div>
          </div>

          {/* Resume Upload Box */}
          <div className="space-y-1.5">
            <Label className="darkLight-text-color font-medium">
              Upload Resume (PDF, DOCX) <span className="text-destructive">*</span>
            </Label>
            <div className="relative border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-xl p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Upload className="h-8 w-8 text-primary/60 group-hover:text-primary mb-2 transition-colors duration-300" />
              {fileName ? (
                <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                  <Paperclip className="h-4 w-4" />
                  <span>{fileName}</span>
                </div>
              ) : (
                <span className="text-xs darkLight-text-color/70 text-center font-medium">
                  Drag and drop or click to upload your Resume file (Max 5MB)
                </span>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="coverLetter" className="darkLight-text-color font-medium">
              Cover Letter / Message
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              rows={4}
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you are the perfect fit for this position..."
              className="bg-primary/5 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50 resize-none"
            />
          </div>

          {/* Policy Checkbox */}
          <div className="flex items-start space-x-2 pt-1">
            <Checkbox
              id="agreed"
              checked={formData.agreed}
              onCheckedChange={handleCheckboxChange}
              className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:text-black mt-1"
            />
            <label
              htmlFor="agreed"
              className="text-xs darkLight-text-color/70 leading-normal cursor-pointer select-none font-medium"
            >
              I authorize Promise Holding Properties to process my personal data for the purpose of evaluation and recruitment process.
            </label>
          </div>

          <DialogFooter className="gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={onClose}
              className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-black font-semibold hover:bg-primary/80 hover:text-black w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
