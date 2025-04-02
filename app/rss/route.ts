import { baseUrl } from 'app/sitemap'

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
    <rss version="2.0">
        <channel>
            <title>Strata Mate</title>
            <link>${baseUrl}</link>
            <description>Building Management System</description>
            <language>en</language>
        </channel>
    </rss>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  )
}
