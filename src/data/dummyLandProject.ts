import { ProjectDetail } from "@/types/api";

export const dummyLandProject: ProjectDetail = {
  id: 999,
  project_name: "Green Valley Plots",
  project_location: "Savar, Dhaka",
  google_map_link: "https://maps.google.com/?q=Savar",
  project_image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop", // A nice landscape/land image
  buildings: [
    {
      id: 1,
      building_name: "Block A",
      details: "Premium plots located near the main entrance.",
      plot_no: "A-1 to A-50",
      building_area_dec: 100,
      building_area_sqft: 43560, // approx 1 acre
      building_type: "Land/Plot",
      features: [
        { name: "South Facing" },
        { name: "Lake View" },
        { name: "Corner Plot" },
        { name: "Ready for Construction" }
      ],
      future_image: "",
      banner_image: "",
      building_gallery: [],
      parking_slots: [],
      units: []
    }
  ]
};
