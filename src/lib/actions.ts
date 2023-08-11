'use server'

import { RedirectType } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"

export const testRedirect = () => {
  redirect('/test', RedirectType.push)
}
