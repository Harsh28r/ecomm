import LoginForm from "@/components/login-form"
import { getSession } from "@/lib/actions"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await getSession()

  if (session) {
    redirect("/categories")
  }

  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white rounded-lg p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
        <p className="text-center mb-6 text-gray-600">
          Welcome back to ECOMMERCE
          <br />
          <span className="text-sm">The next gen business marketplace</span>
        </p>
        <LoginForm />
      </div>
    </div>
  )
}

