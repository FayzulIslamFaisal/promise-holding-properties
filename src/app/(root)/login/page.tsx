import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your Promise Assets customer dashboard to manage your properties and inquiries.",
};

import LeftSide from "@/components/auth/LeftSide"
import RightSide from "@/components/auth/RightSide"


export default function AuthPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex">
      <LeftSide />
      <RightSide />
    </div>
  )
}
