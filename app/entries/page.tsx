import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Entries',
  description: 'Read my entries.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Entries</h1>
      <BlogPosts />
    </section>
  )
}
