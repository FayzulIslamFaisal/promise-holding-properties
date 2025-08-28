"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label className="dark:text-[var(--custom-text-white)] text-[var(--custom-text-white)]" htmlFor="login-email">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-[50%] translate-y-[-50%] h-4 w-4 text-muted-foreground" />
          <Input id="login-email" type="email" placeholder="Enter your email" className="pl-10 h-12 bg-[var(--custom-bg-body)] darkLight-text-color" />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="dark:text-[var(--custom-text-white)] text-[var(--custom-text-white)]" htmlFor="login-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-[50%] translate-y-[-50%] h-4 w-4 text-muted-foreground" />
          <Input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pl-10 pr-10 h-12 bg-[var(--custom-bg-body)] darkLight-text-color"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[50%] translate-y-[-50%]"
          >
            {showPassword ? <EyeOff className="h-4 w-4 cursor-pointer" /> : <Eye className="h-4 w-4 cursor-pointer" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(value: boolean | "indeterminate") => setRememberMe(value === true)}
          />
          <Label className="dark:text-[var(--custom-text-white)] text-[var(--custom-text-white)] text-sm cursor-pointer" htmlFor="remember" >
            Remember me
          </Label>
        </div>
        <Link href="#" type="button" className="text-sm text-[var(--custom-text-white)]">
          Forgot Password?
        </Link>
      </div>

      <Button value={"default"} className="w-full h-12 cursor-pointer ">Sign In</Button>
    </form>
  )
}
