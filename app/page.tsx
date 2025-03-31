import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Strata Mate
      </h1>
      <p className="mb-4">
        {`The purpose of this Strata Management website is to streamline the administration and 
        communication within apartment buildings and residential communities. It provides essential tools for 
        managing committee members, levy payments, maintenance requests, and notices in an efficient, digital format. 
        Through its user-friendly interface, residents can track financial obligations, submit repair requests, and stay informed 
        about important updates. By integrating serverless edge functions, automated workflows, and real-time updates, the website 
        enhances transparency and simplifies property management for both strata committees and residents.`}
      </p>
    </section>
  )
}
