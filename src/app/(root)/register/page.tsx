"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, User, Phone, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import WaveBackground from '@/components/common/WaveBackground';
import Link from 'next/link';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration data:', formData);
    // Handle registration logic here
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative flex items-center justify-center px-4 pt-[30px] md:pt-[50px] pb-[30px] md:pb-[50px]">
      <WaveBackground />
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="backdrop-blur-lg bg-[var(--custom-bg-primary)]/75 border-[var(--custom-border-primary)] shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-[var(--custom-bg-white)] rounded-full flex items-center justify-center mb-4 shadow-lg">
              <UserPlus className="w-8 h-8 text-[var(--custom-text-primary)]" />
            </div>
            <CardTitle className="text-2xl font-bold text-[var(--custom-text-secondary)]">
              Create Account
            </CardTitle>
            <CardDescription className="text-[var(--custom-text-hover)]">
              Join us today and get started
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[var(--custom-text-secondary)] font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User className="w-4 h-4 text-[var(--custom-text-primary)]" />
                  </div>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-10 bg-[var(--custom-bg-white)]/50 border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-[var(--custom-text-primary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-[var(--custom-text-secondary)] font-medium">
                  Phone Number
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Phone className="w-4 h-4 text-[var(--custom-text-primary)]" />
                  </div>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="pl-10 bg-[var(--custom-bg-white)]/50 border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-[var(--custom-text-primary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[var(--custom-text-secondary)] font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-4 h-4 text-[var(--custom-text-primary)]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 bg-[var(--custom-bg-white)]/50 border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-[var(--custom-text-primary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[var(--custom-text-secondary)] font-medium">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-4 h-4 text-[var(--custom-text-primary)]" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 bg-[var(--custom-bg-white)]/50 border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-[var(--custom-text-primary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--custom-text-primary)] hover:text-[var(--custom-text-secondary)]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[var(--custom-text-secondary)] font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-4 h-4 text-[var(--custom-text-primary)]" />
                  </div>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="pl-10 pr-10 bg-[var(--custom-bg-white)]/50 border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-[var(--custom-text-primary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--custom-text-primary)] hover:text-[var(--custom-text-secondary)]"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender" className="text-[var(--custom-text-secondary)] font-medium">
                  Gender
                </Label>
                <Select value={formData.gender} className="w-full" onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger className="bg-[var(--custom-bg-white)]/50 w-full border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--custom-bg-white)] w-full border-[var(--custom-border-primary)]">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="unstyled" className="btn-glow-accent w-full border-[var(--custom-border-primary)]"
            >
                Create Account
            </Button>
            </form>

            <div className="text-center pt-4 border-t border-[var(--custom-border-primary)]">
              <p className="text-custom-text-hover">
                Existing User?{' '}
                <Link
                  href="/login"
                  className="text-[var(--custom-text-secondary)] font-semibold hover:text-custom-text-hover transition-colors duration-300 underline decoration-2 underline-offset-4"
                >
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;