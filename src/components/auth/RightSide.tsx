
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { User } from "lucide-react"
import Link from "next/link"


export default function RightSide() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="">
                <User className="mx-auto mb-2 h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground">Access your luxury real estate portal</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm />
              </TabsContent>

              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm darkLight-text-color">
              By continuing, you agree to our{" "}
              <Link href="/terms-conditions" target={"_blank"} className="text-sm font-bold text-[var(--custom-text-secondary)]">Terms of Service</Link> and{" "}
              <Link href="/privacy-policy" target={"_blank"} className="text-sm font-bold text-[var(--custom-text-secondary)] ">Privacy Policy</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
