import { NextResponse } from "next/server"
import { getSessionAction } from "@/lib/auth-actions"

export async function GET() {
  const session = await getSessionAction()
  return NextResponse.json({ session })
}

