export interface PlotDetail {
  id: string;
  name: string;
  slug: string;
  projectSlug: string;
  location: string;
  type: string; // e.g. "Residential Plot" / "Commercial Plot"
  size: string; // e.g. "5.5 Katha"
  sizeSqft: number;
  plotNo: string;
  roadSize: string; // e.g. "30 ft"
  facing: string; // e.g. "South Facing"
  status: 'Available' | 'Booked' | 'Sold';
  pricePerSqft: number;
  totalPrice: number;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  googleMapLink: string;
}

const PLOT_IMAGES = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
];

const PLOT_GALLERY_SET = [
  [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop"
  ],
  [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop"
  ],
  [
    "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
  ]
];

export function getPlotsByProject(projectSlug: string, projectName: string = "Premium Project", projectLocation: string = "Dhaka"): PlotDetail[] {
  // We generate 6 premium plots dynamically adjusted to the project context
  return [
    {
      id: `${projectSlug}-plot-101`,
      name: `${projectName} - Plot A-101 (Lakeside)`,
      slug: "plot-a-101",
      projectSlug,
      location: `Block A, ${projectLocation}`,
      type: "Residential Plot",
      size: "5.5 Katha",
      sizeSqft: 3960,
      plotNo: "A-101",
      roadSize: "40 ft",
      facing: "South Facing",
      status: "Available",
      pricePerSqft: 5200,
      totalPrice: 20592000,
      description: `Experience the pinnacle of luxurious open living at Plot A-101, an exclusive lakeside property within ${projectName}. This prime residential plot is south-facing, offering continuous natural ventilation and optimal sunlight throughout the year. Nestled in a meticulously planned zone with a wide 40-foot main access road, it provides the perfect foundation to build your dream multi-story residence. Ready for immediate construction with all utility connections fully processed.`,
      image: PLOT_IMAGES[0],
      gallery: PLOT_GALLERY_SET[0],
      features: ["Lakeside View", "Corner Plot", "40ft Wide Road Access", "South Facing", "100% Ready Plot", "Guard Wall Installed"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    },
    {
      id: `${projectSlug}-plot-102`,
      name: `${projectName} - Plot B-204 (Corner)`,
      slug: "plot-b-204",
      projectSlug,
      location: `Block B, ${projectLocation}`,
      type: "Residential Plot",
      size: "4.0 Katha",
      sizeSqft: 2880,
      plotNo: "B-204",
      roadSize: "30 ft",
      facing: "East Facing",
      status: "Available",
      pricePerSqft: 4800,
      totalPrice: 13824000,
      description: `Plot B-204 is a beautifully situated East-facing corner plot that enjoys premium positioning and enhanced privacy. With double-sided road access (30ft on the front and 20ft on the side), this parcel is highly versatile, permitting unique architectural layouts with multiple entry options and outstanding natural ventilation. Ideal for a spacious family duplex or luxury villa.`,
      image: PLOT_IMAGES[1],
      gallery: PLOT_GALLERY_SET[1],
      features: ["Double-Sided Corner Plot", "East Facing", "Utility Ready", "Demarcated Boundaries", "High Elevated Land", "24/7 Security Zone"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    },
    {
      id: `${projectSlug}-plot-103`,
      name: `${projectName} - Plot A-105 (Lakefront)`,
      slug: "plot-a-105",
      projectSlug,
      location: `Block A, ${projectLocation}`,
      type: "Residential Plot",
      size: "7.5 Katha",
      sizeSqft: 5400,
      plotNo: "A-105",
      roadSize: "60 ft Avenue Road",
      facing: "South-West Facing",
      status: "Booked",
      pricePerSqft: 6000,
      totalPrice: 32400000,
      description: `Undeniably one of the most prestigious plots in the entire project, Plot A-105 stands directly on the lakefront. Enjoy unobstructed, panoramic water views and refreshing breezes daily. Facing a grand 60-foot avenue road, this spacious 7.5 Katha parcel offers endless construction flexibility. A rare investment opportunity for premium residential developments in a highly sought-after neighborhood.`,
      image: PLOT_IMAGES[2],
      gallery: PLOT_GALLERY_SET[2],
      features: ["Direct Lakefront View", "Grand Avenue Frontage", "Pre-Installed Sewerage", "South-West Corner", "Landscaped Surroundings", "Immediate Registration"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    },
    {
      id: `${projectSlug}-plot-104`,
      name: `${projectName} - Plot C-302 (Commercial)`,
      slug: "plot-c-302",
      projectSlug,
      location: `Block C, ${projectLocation}`,
      type: "Commercial Plot",
      size: "10.0 Katha",
      sizeSqft: 7200,
      plotNo: "C-302",
      roadSize: "80 ft Main Boulevard",
      facing: "North-East Facing",
      status: "Available",
      pricePerSqft: 7500,
      totalPrice: 54000000,
      description: `A stellar commercial investment opportunity. Plot C-302 is strategically located right on the bustling 80-foot wide main boulevard of ${projectName}. This massive 10.0 Katha plot offers maximum commercial exposure and accessibility, making it ideal for shopping complexes, corporate headquarters, high-end outlets, or premium apartment projects. Features excellent logistics layout and ready industrial-grade power/water connections.`,
      image: PLOT_IMAGES[3],
      gallery: PLOT_GALLERY_SET[0],
      features: ["Main Boulevard Frontage", "High Commercial Value", "Three-Phase Power Connection", "Dedicated Parking Margin", "Wide Frontage Width", "Sewerage Line Connected"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    },
    {
      id: `${projectSlug}-plot-105`,
      name: `${projectName} - Plot B-112 (Premium)`,
      slug: "plot-b-112",
      projectSlug,
      location: `Block B, ${projectLocation}`,
      type: "Residential Plot",
      size: "3.5 Katha",
      sizeSqft: 2520,
      plotNo: "B-112",
      roadSize: "30 ft",
      facing: "South-East Facing",
      status: "Sold",
      pricePerSqft: 4500,
      totalPrice: 11340000,
      description: `Plot B-112 offers a fantastic balance of size, placement, and value. Located in a quiet, fully developed residential block with complete asphalt roads and streetlights. The south-east orientation ensures wonderful cross-ventilation and lovely morning sun. Fully leveled ground and surrounded by high-end villas. A truly secure and serene spot for your family.`,
      image: PLOT_IMAGES[4],
      gallery: PLOT_GALLERY_SET[1],
      features: ["Asphalt Road Access", "South-East Facing", "Streetlit Area", "Developed Neighborhood", "Fully Demarcated Plot", "Clean Title Deed"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    },
    {
      id: `${projectSlug}-plot-106`,
      name: `${projectName} - Plot D-401 (Park-Facing)`,
      slug: "plot-d-401",
      projectSlug,
      location: `Block D, ${projectLocation}`,
      type: "Residential Plot",
      size: "6.0 Katha",
      sizeSqft: 4320,
      plotNo: "D-401",
      roadSize: "40 ft",
      facing: "South Facing",
      status: "Available",
      pricePerSqft: 5000,
      totalPrice: 21600000,
      description: `Boasting a direct front view of the neighborhood central park, Plot D-401 is perfect for active families and nature lovers. This 6 Katha plot is fully south-facing, guaranteeing natural breezes and sunlight. Enjoy immediate park access, walking trails, and a lush green backyard view. Solid soil structure, verified zero waterlogging, ready for direct piling and construction.`,
      image: PLOT_IMAGES[5],
      gallery: PLOT_GALLERY_SET[2],
      features: ["Direct Park Frontage", "Quiet Residential Boulevard", "South Facing", "Zero Waterlogging History", "Solid Soil Base", "Pre-installed Gas & Water Lines"],
      googleMapLink: `https://maps.google.com/?q=${encodeURIComponent(projectLocation)}`
    }
  ];
}
