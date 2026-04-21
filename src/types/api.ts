// =============================================================================
// API Response & Entity Types
// =============================================================================
// Auto-mapped from: https://spider.promiseassets.com/api/documentation
// =============================================================================

// ---------------------------------------------------------------------------
// Generic API Response Wrapper
// ---------------------------------------------------------------------------
export interface ApiResponse<T> {
  status: string;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------
export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserProfile;
}

export interface UserProfile {
  id: number;
  name: string;
  phone: string;
  email?: string;
  image?: string;
}

export interface CheckPhoneRequest {
  phone: string;
}

export interface CheckPhoneResponse {
  status?: string;
  message?: string;
}

export interface GoogleLoginRequest {
  email: string;
  google_id: string;
}

export interface CheckGoogleUserRequest {
  email: string;
}

export interface GoogleNewUserRequest {
  name: string;
  email: string;
  phone?: string;
  google_id: string;
}

export interface RefreshTokenResponse {
  token: string;
}

// ---------------------------------------------------------------------------
// Header Banners
// ---------------------------------------------------------------------------
export interface HeaderBanner {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  link?: string;
  image: string;
  status?: string;
}

// ---------------------------------------------------------------------------
// Management
// ---------------------------------------------------------------------------
export interface ManagementMember {
  id: number;
  image: string;
  title: string;
  designation: string;
  quote: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  whatsapp?: string;
  status: string;
}

// ---------------------------------------------------------------------------
// Our Services
// ---------------------------------------------------------------------------
export interface OurService {
  id: number;
  title: string;
  icon: string;
  description: string;
  status: string;
}

// ---------------------------------------------------------------------------
// Our Values
// ---------------------------------------------------------------------------
export interface OurValue {
  id: number;
  image: string;
  title: string;
  short_description: string;
  status: string;
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------
export interface WhyChooseUs {
  id: number;
  icon: string;
  counter_value: string;
  title: string;
  short_description: string;
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export interface Project {
  id: number;
  name: string;
  slug: string;
  location: string;
  image: string;
  category?: 'Running' | 'Upcoming' | 'Complete';
}

export interface ProjectFeature {
  name: string;
  value?: string;
}

export interface ProjectUnit {
  id: number;
  image: string;
  name: string;
  gross_area_sft: number;
  usable_area_sqft: number;
  udl_area: number;
  unit_quantity: number;
  per_unit_amount: number;
  discount: number;
  features: ProjectFeature[];
  image_gallery: string[];
}

export interface ParkingSlot {
  id: number;
  parking_number: number;
  parking_type: string;
  area: number;
  amount: number;
  image: string;
  features: ProjectFeature[];
}

export interface Building {
  id: number;
  building_name: string;
  details: string | null;
  plot_no: string;
  building_area_dec: number;
  building_area_sqft: number;
  building_type: string;
  features: ProjectFeature[];
  future_image: string;
  banner_image: string;
  building_gallery: string[];
  parking_slots: ParkingSlot[];
  units: ProjectUnit[];
}

export interface ProjectDetail {
  id: number;
  project_name: string;
  project_location: string;
  google_map_link: string;
  project_image: string;
  buildings: Building[];
}

// ---------------------------------------------------------------------------
// Blogs
// ---------------------------------------------------------------------------
export interface BlogSeoContent {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description?: string;
  banner: string;
  banner_type: "image" | string;
  view_count: number;
  tags: string;
  seo_content?: BlogSeoContent;
  created_at: string;
  updated_at?: string;
}

export interface PaginatedBlogs {
  blogs: Blog[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface BlogSearchParams {
  search?: string;
  per_page?: number;
  page?: number;
}

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------
export interface GeneralSettings {
  site_name: string;
  site_email: string;
  site_phone: string;
  site_address: string;
}

export interface LogoSettings {
  site_logo: string;
  site_favicon: string;
}

export interface SeoSettings {
  meta_title: string | null;
  meta_keywords: string | null;
  meta_description: string | null;
}

export interface SocialSettings {
  facebook: string | null;
  twitter: string | null;
  linkedin: string | null;
  instagram: string | null;
  youtube: string | null;
  tiktok: string | null;
}

export interface WebsiteSettings {
  general_settings: GeneralSettings;
  logo_settings: LogoSettings;
  seo_settings: SeoSettings;
  social_settings: SocialSettings;
}

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------
export interface ConnectExploreRequest {
  name: string;
  number: string;
  email: string;
  message: string;
}
