import { testRedirect } from '../lib/actions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={testRedirect}>
        <button type="submit">Go to test</button>
      </form>
    </main>
  )
}
