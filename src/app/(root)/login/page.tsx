"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, Mail, Lock, Phone } from 'lucide-react';
import WaveBackground from '@/components/common/WaveBackground';
import Link from 'next/link';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login data:', formData);
    };

    const handleInputChange = (name: string, value: string | boolean) => {
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };
return (
    <div className=" relative flex items-center justify-center px-4 pt[50px] md:pt-[100px] pb[50px] md:pb-[100px]">
      <WaveBackground />

      <div className="relative z-10 w-full max-w-md">
        <Card className="backdrop-blur-lg bg-[var(--custom-bg-primary)]/75 border border-[var(--custom-border-primary)] shadow-3xl">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-[var(--custom-bg-white)] rounded-full flex items-center justify-center mb-4 shadow-lg">
              <LogIn className="w-8 h-8 text-custom-bg-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-[var(--custom-text-secondary)]">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-[var(--custom-text-hover)]">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailOrPhone" className="text-[var(--custom-text-secondary)] font-medium">
                  Email or Phone Number
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-4 h-4 text-custom-text-third" />
                  </div>
                  <Input
                    id="emailOrPhone"
                    type="text"
                    name="emailOrPhone"
                    placeholder="Enter email or phone number"
                    value={formData.emailOrPhone}
                    onChange={(e) => handleInputChange('emailOrPhone', e.target.value)}
                    className="pl-10 bg-[var(--custom-bg-white)]/20 border border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-custom-text-third focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[var(--custom-text-secondary)] font-medium">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-4 h-4 text-custom-text-third" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 bg-[var(--custom-bg-white)]/20 border border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] placeholder:text-custom-text-third focus:bg-[var(--custom-bg-white)]/30 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => handleInputChange('remember', checked as boolean)}
                  className="border border-[var(--custom-border-primary)] data-[state=checked]:bg-custom-bg-accent"
                />
                <Label htmlFor="remember" className="text-sm text-[var(--custom-text-hover)] cursor-pointer">
                  Remember me
                </Label>
              </div>
                    {/* <Button variant="unstyled" className="btn-glow-accent"></Button> */}
              <Button
                type="submit"
                variant="unstyled" className="btn-glow-accent w-full border-[var(--custom-border-primary)]"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-[var(--custom-border-primary)]">
              <p className="text-[var(--custom-text-hover)]">
                Don't have an account?{' '}
                <Link
                  href="/register"
                  className="text-[var(--custom-text-secondary)] font-semibold hover:text-[var(--custom-text-hover)] transition-colors duration-300 underline decoration-2 underline-offset-4"
                >
                  {' '}Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage