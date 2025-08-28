
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { User } from "lucide-react"
import Link from "next/link"


export default function RightSide() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 darkLight-body-bg-color">
      {/* <div className="w-full max-w-md space-y-6"> */}
        <Card className="gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_25px_rgba(255,255,255,0.5)] bg-[var(--custom-bg-primary)] backdrop-blur-sm border border-[var(--custom-bg-accent)]/40">
          <CardHeader className="text-center pb-4">
            <div className="">
                <User className="mx-auto mb-2 shadow-[0_0_25px_rgba(255,255,255,0.3)] p-2 rounded-2xl h-14 w-14 bg-[var(--custom-bg-accent)] text-[var(--custom-text-white)]" />
            </div>
            <CardTitle className="text-2xl md:text-4xl font-bold text-[var(--custom-text-secondary)]">Welcome Back</CardTitle>
            <CardDescription className="text-[var(--custom-text-white)] text-base">Access your luxury real estate portal</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger
                    value="login"
                    className="
                    data-[state=active]:bg-[var(--custom-bg-accent)] 
                    data-[state=active]:text-[var(--custom-text-white)] 
                    dark:data-[state=active]:bg-[var(--custom-bg-primary)] 
                    dark:data-[state=active]:text-[var(--custom-text-white)] 
                    transition-all duration-200 cursor-pointer
                    "
                >
                    Login
                </TabsTrigger>

                <TabsTrigger
                    value="register"
                    className="
                    data-[state=active]:bg-[var(--custom-bg-accent)] 
                    data-[state=active]:text-[var(--custom-text-white)] 
                    dark:data-[state=active]:bg-[var(--custom-bg-primary)] 
                    dark:data-[state=active]:text-[var(--custom-text-white)] 
                    transition-all duration-200 cursor-pointer
                    "
                >
                    Register
                </TabsTrigger>
                </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-[var(--custom-text-white)]">
              By continuing, you agree to our{" "}
              <Link href="/terms-conditions" target={"_blank"} className="text-sm font-bold text-[var(--custom-text-secondary)]">Terms of Service</Link> and{" "}
              <Link href="/privacy-policy" target={"_blank"} className="text-sm font-bold text-[var(--custom-text-secondary)] ">Privacy Policy</Link>
            </div>
          </CardContent>
        </Card>
      {/* </div> */}
    </div>
  )
}
