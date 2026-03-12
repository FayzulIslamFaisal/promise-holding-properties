// =============================================================================
// API Response & Entity Types
// =============================================================================
// Auto-mapped from: https://spider.promiseassets.com/api/documentation
// =============================================================================

// ---------------------------------------------------------------------------
// Generic API Response Wrapper
// ---------------------------------------------------------------------------
export interface ApiResponse<T> {
  success: boolean;
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

export interface CheckPhoneRequest {
  phone: string;
}

export interface CheckPhoneResponse {
  exists: boolean;
}

export interface GoogleLoginRequest {
  provider_account_id: string;
  name: string;
  email: string;
}

export interface CheckGoogleUserRequest {
  email: string;
}

export interface GoogleNewUserRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface UserProfile {
  id: number;
  name: string;
  phone: string;
  email?: string;
  image?: string;
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
  short_description: string;
  link: string;
  image: string;
  status: string;
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
  status: string;
}

// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------
export interface WhyChooseUs {
  id: number;
  icon: string;
  counter_value: number;
  title: string;
  short_description: string;
  status: string;
}
