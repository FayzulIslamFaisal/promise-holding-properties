"use client";
import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Clock, 
  Briefcase, 
  Calendar, 
  ChevronDown 
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SectionTitle from "../common/SectionTitle";
import ApplicationModal from "./ApplicationModal";

interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const OpenPositions = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = [
    "All",
    "Sales & Marketing",
    "Engineering & Construction",
    "Architecture & Design",
    "HR & Admin",
    "IT & Software",
  ];

  const jobTypes = ["All", "Full-time", "Hybrid", "Internship"];

  const jobs: Job[] = [
    {
      id: "job-1",
      title: "Senior Executive - Sales & Marketing",
      department: "Sales & Marketing",
      type: "Full-time",
      location: "Dhaka (Kallyanpur)",
      experience: "3 - 5 Years",
      salary: "Negotiable",
      description: "We are seeking a high-performing Sales Senior Executive to drive property sales, lead site visits, and nurture prospective buyer relationships.",
      requirements: [
        "Bachelor's degree in Marketing, Business Administration, or related discipline.",
        "Proven track record of at least 3 years in real estate residential/commercial sales.",
        "Exceptional communication, presentation, and negotiation skills.",
        "Proficiency in building landowner networks and managing CRM pipelines.",
      ],
      responsibilities: [
        "Present luxury residential properties to prospective high-net-worth clients.",
        "Coordinate and execute physical property site visits for customers.",
        "Negotiate pricing structures and follow through with client closing contracts.",
        "Collaborate with internal design and engineering teams to address buyer queries.",
      ],
    },
    {
      id: "job-2",
      title: "Structural Engineer (High-Rise)",
      department: "Engineering & Construction",
      type: "Full-time",
      location: "Dhaka (Corporate Office)",
      experience: "4 - 6 Years",
      salary: "Negotiable",
      description: "Join our core construction engineering wing to design, inspect, and approve structural calculations for prestigious real estate towers.",
      requirements: [
        "B.Sc. in Civil Engineering from a reputable university (BUET/RUET/KUET/CUET preferred).",
        "Expertise in structural design software like ETABS, SAFE, SAP2000, and AutoCAD.",
        "Strong understanding of the BNBC (Bangladesh National Building Code) guidelines.",
        "Prior experience supervising complex high-rise structural layouts.",
      ],
      responsibilities: [
        "Develop and verify structural calculations and blueprints.",
        "Monitor construction sites for structural code enforcement and safety metrics.",
        "Assess soil quality reports and formulate foundation designs.",
        "Address structural queries from site engineers and project directors.",
      ],
    },
    {
      id: "job-3",
      title: "Senior Architectural Designer",
      department: "Architecture & Design",
      type: "Full-time",
      location: "Dhaka (Design Studio)",
      experience: "5+ Years",
      salary: "Competitive",
      description: "Looking for an innovative architect to design visual exterior façades, landscaping layouts, and highly functional residential floor plans.",
      requirements: [
        "Bachelor of Architecture (B.Arch) from a recognized university.",
        "Active membership of the Institute of Architects Bangladesh (IAB).",
        "Proficiency in SketchUp, Revit, 3ds Max, Lumion, and Adobe Creative Suite.",
        "A compelling design portfolio exhibiting high-end urban architecture.",
      ],
      responsibilities: [
        "Draft visual concepts, layouts, and external perspectives for new holdings.",
        "Create space-optimized interior layout suggestions for premium buyers.",
        "Present structural-aesthetic blends to executive management for approval.",
        "Periodically inspect project construction sites to ensure aesthetic compliance.",
      ],
    },
    {
      id: "job-4",
      title: "Front-End Developer (React / Next.js)",
      department: "IT & Software",
      type: "Hybrid",
      location: "Dhaka (Kallyanpur)",
      experience: "2 - 4 Years",
      salary: "60,000 - 85,000 BDT",
      description: "Develop, enhance, and optimize our public holdings platform, booking portals, and internal CRM applications using React/Next.js.",
      requirements: [
        "Expert knowledge of React, Next.js (App Router), TypeScript, and Tailwind CSS.",
        "Experience building responsive web layouts and implementing web optimizations.",
        "Familiarity with REST APIs, modern state managers, and Git versioning systems.",
        "Excellent attention to design precision (Figma-to-Code accuracy).",
      ],
      responsibilities: [
        "Implement modern, dynamic, and responsive components for our client portals.",
        "Optimize codebase for maximum performance, SEO indexing, and cross-browser reliability.",
        "Integrate headless APIs and custom content delivery channels.",
        "Participate in product reviews and code optimization sessions.",
      ],
    },
    {
      id: "job-5",
      title: "HR & Admin Executive",
      department: "HR & Admin",
      type: "Full-time",
      location: "Dhaka (Corporate Office)",
      experience: "1 - 3 Years",
      salary: "Negotiable",
      description: "We are looking for a proactive HR specialist to handle employee onboarding, recruitment operations, records maintenance, and admin duties.",
      requirements: [
        "BBA/MBA in Human Resource Management (HRM) from a reputable university.",
        "Thorough understanding of corporate onboarding structures and candidate search pipelines.",
        "Familiarity with Bangladesh Labor Law and regulatory standards.",
        "Strong interpersonal skills and documentation organization capabilities.",
      ],
      responsibilities: [
        "Screen applicant profiles and schedule coordinate recruitment panels.",
        "Manage employee files, contracts, leaves, and salary attendance inputs.",
        "Coordinate team-building sessions and corporate workplace activities.",
        "Supervise procurement requirements for corporate office administration.",
      ],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesType && matchesSearch;
  });

  const openApplyModal = (title: string) => {
    setSelectedJobTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section className="px-4 py-16 darkLight-body-bg-color">
      <div className="container mx-auto sectionSpaceBorder pb-16">
        <SectionTitle
          title="Open Opportunities"
          subtitle="Explore our current roles and take the first step towards a rewarding career at Promise Assets."
          border_b={false}
        />

        {/* Filter Toolbar */}
        <div className="flex flex-col gap-6 mt-12 bg-primary/5 p-6 rounded-2xl border border-primary/20 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search job titles, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-black/20 border-primary/20 darkLight-text-color focus-visible:ring-primary focus-visible:border-primary/50 h-12 w-full text-base"
              />
            </div>

            {/* Job Type Dropdown Filter */}
            <div className="relative w-full lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-12 bg-black/20 border border-primary/20 hover:border-primary/40 rounded-lg px-4 text-sm font-semibold darkLight-text-color focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type} className="bg-[var(--bg-body)] text-foreground">
                    Type: {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/70 h-4 w-4 pointer-events-none" />
            </div>
          </div>

          {/* Department Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-bold darkLight-text-color/60 mr-2">
              Departments:
            </span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedDept === dept
                    ? "bg-primary text-black font-bold border border-primary"
                    : "bg-primary/10 border border-primary/20 text-black/70 dark:text-white/80 hover:bg-primary/20 hover:border-primary/40"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Accordion */}
        <div className="mt-8">
          {filteredJobs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredJobs.map((job) => (
                <AccordionItem
                  key={job.id}
                  value={job.id}
                  className="bg-primary/5 border border-primary/15 rounded-2xl overflow-hidden px-6 transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between text-left w-[95%] gap-4">
                      <div>
                        <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full uppercase tracking-wider font-extrabold">
                          {job.department}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold darkLight-text-color tracking-wide mt-2">
                          {job.title}
                        </h3>
                      </div>
                      
                      {/* Meta Tags */}
                      <div className="flex flex-wrap gap-4 text-xs font-semibold darkLight-text-color/70">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-primary" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-primary" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-primary" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-2 pb-6 border-t border-primary/10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                      {/* Left: Description & Apply */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-md font-bold darkLight-text-color tracking-wide mb-2">
                            Job Description
                          </h4>
                          <p className="text-sm darkLight-text-color/80 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-md font-bold darkLight-text-color tracking-wide mb-2">
                            Job Responsibilities
                          </h4>
                          <ul className="list-disc list-inside space-y-1.5 text-sm darkLight-text-color/80">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Requirements & Details */}
                      <div className="space-y-6 bg-black/10 p-6 rounded-xl border border-primary/10">
                        <div>
                          <h4 className="text-md font-bold darkLight-text-color tracking-wide mb-2">
                            Requirements
                          </h4>
                          <ul className="list-disc list-inside space-y-1.5 text-xs darkLight-text-color/80">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-primary/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-xs font-semibold darkLight-text-color/50 block">
                              Salary Structure
                            </span>
                            <span className="text-sm font-bold text-primary">
                              {job.salary}
                            </span>
                          </div>
                          <Button
                            onClick={() => openApplyModal(job.title)}
                            className="bg-primary text-black hover:bg-primary/80 hover:text-black font-bold tracking-wide rounded-lg cursor-pointer px-6 w-full sm:w-auto"
                          >
                            Apply For Role
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 bg-primary/5 rounded-2xl border border-primary/20">
              <Calendar className="h-12 w-12 text-primary/40 mx-auto mb-4" />
              <p className="text-lg font-bold darkLight-text-color">
                No matching open positions found
              </p>
              <p className="text-sm darkLight-text-color/60 mt-1 max-w-md mx-auto">
                Adjust your filters, search keywords, or send a general application.
              </p>
            </div>
          )}
        </div>

        {/* General Application Callout */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 p-8 rounded-3xl border border-primary/30 text-center relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-primary/5 rounded-full blur-xl" />
          <div className="absolute -right-16 -top-16 w-36 h-36 bg-primary/5 rounded-full blur-xl" />
          
          <h3 className="text-xl md:text-2xl font-bold darkLight-text-color tracking-wide mb-2">
            Don&apos;t see a role matching your skill set?
          </h3>
          <p className="text-sm darkLight-text-color/80 max-w-xl mx-auto mb-6 leading-relaxed font-medium">
            We are always on the lookout for passionate innovators. Send us a general application and we will keep you in mind for future openings!
          </p>
          <Button
            onClick={() => openApplyModal("General Application")}
            className="bg-primary text-black hover:bg-primary/85 hover:text-black font-bold tracking-wide px-8 py-2.5 rounded-xl cursor-pointer"
          >
            Submit General Application
          </Button>
        </div>
      </div>

      {/* Shared Application Modal Form */}
      {isModalOpen && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobTitle={selectedJobTitle}
        />
      )}
    </section>
  );
};

export default OpenPositions;
