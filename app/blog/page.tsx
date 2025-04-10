import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Advanced NBA Betting Strategies for the 2023 Season",
      excerpt:
        "Learn how professional bettors are approaching the new NBA season with these advanced betting strategies that go beyond the basics.",
      image: "/images/blog-1.jpg",
      date: "October 15, 2023",
      author: "Mike Johnson",
      category: "NBA",
    },
    {
      id: 2,
      title: "Understanding NFL Line Movements: What They Really Mean",
      excerpt:
        "Line movements can provide valuable insights into where the money is going. Here's how to interpret these shifts and use them to your advantage.",
      image: "/images/blog-2.jpg",
      date: "September 28, 2023",
      author: "Sarah Williams",
      category: "NFL",
    },
    {
      id: 3,
      title: "Bankroll Management: The Most Underrated Skill in Sports Betting",
      excerpt:
        "Proper bankroll management is often the difference between long-term success and failure. Learn the principles that keep professional bettors in the game.",
      image: "/images/blog-3.jpg",
      date: "September 10, 2023",
      author: "David Thompson",
      category: "Betting Strategy",
    },
    {
      id: 4,
      title: "MLB Playoff Betting Guide: Finding Value in October",
      excerpt:
        "The MLB playoffs present unique betting opportunities. This guide breaks down how to find value when the stakes are highest.",
      image: "/images/blog-4.jpg",
      date: "August 25, 2023",
      author: "Jennifer Lopez",
      category: "MLB",
    },
    {
      id: 5,
      title: "How Weather Impacts NFL Totals: A Statistical Analysis",
      excerpt:
        "We analyzed five years of NFL data to determine exactly how different weather conditions affect game totals. The results might surprise you.",
      image: "/images/blog-5.jpg",
      date: "August 12, 2023",
      author: "Robert Chen",
      category: "NFL",
    },
    {
      id: 6,
      title: "The Rise of Player Props: Why They're Becoming the Preferred Bet Type",
      excerpt:
        "Player proposition bets are growing in popularity among sharp bettors. Here's why they offer more value than traditional spread betting.",
      image: "/images/blog-6.jpg",
      date: "July 30, 2023",
      author: "Alex Morgan",
      category: "Betting Strategy",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sports Betting Blog</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert insights, betting strategies, and analysis to help you become a more successful sports bettor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-[#002713] border-[#003a1c] overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/blog/${post.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-[#00e676] text-[#00e676] hover:bg-[#00e676]/10">
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8">
              Load More Articles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
