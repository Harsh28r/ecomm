import InterestForm from "@/components/interest-form"
import { getSession } from "@/lib/actions"
import { redirect } from "next/navigation"

export default async function InterestsPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white rounded-lg p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Please mark your interests!</h1>
        <p className="text-center mb-6 text-gray-600">We will keep you notified.</p>
        <InterestForm />
      </div>
    </div>
  )
}

