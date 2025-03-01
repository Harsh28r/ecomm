import SignupForm from "@/components/signup-form"
import { getSession } from "@/lib/actions"
import { redirect } from "next/navigation"

export default async function SignupPage() {
  const session = await getSession()

  if (session) {
    redirect("/categories")
  }

  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white rounded-lg p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Create your account</h1>
        <SignupForm />
      </div>
    </div>
  )
}

