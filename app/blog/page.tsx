import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Commitee Members',
  description: 'Committee members of the Strata Management',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Committee Members</h1>
      <BlogPosts />
    </section>
  )
}
