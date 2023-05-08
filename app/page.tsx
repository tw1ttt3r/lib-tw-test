import { Hello } from 'lib-tw'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hello name="peter"></Hello>
    </main>
  )
}
