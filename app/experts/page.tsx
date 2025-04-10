import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Trophy } from "lucide-react"

export default function ExpertsPage() {
  const experts = [
    {
      id: 1,
      name: "Mike Johnson",
      image: "/images/expert-1.jpg",
      specialty: "NBA & NFL Specialist",
      winRate: "64%",
      unitsProfit: "+850",
      bio: "Former college basketball player with 7+ years of professional handicapping experience. Specializes in NBA player props and NFL totals.",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sarah Williams",
      image: "/images/expert-2.jpg",
      specialty: "MLB & NFL Specialist",
      winRate: "61%",
      unitsProfit: "+720",
      bio: "Sports analytics expert with a background in statistical modeling. Known for her accurate MLB predictions and NFL spread picks.",
      rating: 4.7,
    },
    {
      id: 3,
      name: "David Thompson",
      image: "/images/expert-3.jpg",
      specialty: "NHL & Soccer Specialist",
      winRate: "59%",
      unitsProfit: "+550",
      bio: "Former hockey analyst with deep knowledge of NHL and European soccer leagues. Excels at finding value in underdog picks.",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Jennifer Lopez",
      image: "/images/expert-4.jpg",
      specialty: "NCAAB & NCAAF Specialist",
      winRate: "63%",
      unitsProfit: "+680",
      bio: "College sports expert with insider connections across major programs. Specializes in early season matchups and tournament play.",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Robert Chen",
      image: "/images/expert-5.jpg",
      specialty: "NBA & Tennis Specialist",
      winRate: "60%",
      unitsProfit: "+490",
      bio: "Former tennis coach with a passion for NBA analytics. Known for his accurate player prop predictions and tennis match handicapping.",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Alex Morgan",
      image: "/images/expert-6.jpg",
      specialty: "NFL & UFC Specialist",
      winRate: "62%",
      unitsProfit: "+610",
      bio: "MMA fighter turned sports analyst with deep knowledge of UFC and NFL. Specializes in fight predictions and football totals.",
      rating: 4.7,
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Expert Handicappers</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team of professional handicappers have proven track records of success across all major sports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert) => (
              <Card key={expert.id} className="bg-[#002713] border-[#003a1c] overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
                    <p className="text-[#00e676] mb-3">{expert.specialty}</p>

                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(expert.rating) ? "text-[#00e676] fill-[#00e676]" : "text-gray-500"}`}
                        />
                      ))}
                      <span className="text-gray-300 ml-2">{expert.rating}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{expert.bio}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#003a1c] p-3 rounded-lg flex items-center">
                        <Trophy className="w-5 h-5 text-[#00e676] mr-2" />
                        <div>
                          <div className="text-xs text-gray-400">Win Rate</div>
                          <div className="font-bold text-white">{expert.winRate}</div>
                        </div>
                      </div>

                      <div className="bg-[#003a1c] p-3 rounded-lg flex items-center">
                        <TrendingUp className="w-5 h-5 text-[#00e676] mr-2" />
                        <div>
                          <div className="text-xs text-gray-400">Profit</div>
                          <div className="font-bold text-white">{expert.unitsProfit} units</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/experts/${expert.id}`} className="w-full">
                    <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                      View Expert Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
