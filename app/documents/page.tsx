import { Documents } from 'app/components/posts'

export const metadata = {
  title: 'Documents',
  description: 'Read my documents.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Documents</h1>
      <Documents />
    </section>
  )
}
