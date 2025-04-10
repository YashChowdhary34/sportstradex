import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, TrendingUp, Clock } from "lucide-react"

export default function FeaturedPicks() {
  const picks = [
    {
      id: 1,
      sport: "NBA",
      match: "Lakers vs. Warriors",
      expert: "Mike Johnson",
      expertImage: "/images/expert-1.jpg",
      pick: "Lakers -3.5",
      confidence: 4,
      time: "7:30 PM ET",
      odds: "-110",
      isPremium: true,
      sportLogo: "/images/nba-logo.png",
    },
    {
      id: 2,
      sport: "NFL",
      match: "Chiefs vs. Ravens",
      expert: "Sarah Williams",
      expertImage: "/images/expert-2.jpg",
      pick: "Over 49.5",
      confidence: 5,
      time: "4:25 PM ET",
      odds: "-105",
      isPremium: true,
      sportLogo: "/images/nfl-logo.png",
    },
    {
      id: 3,
      sport: "MLB",
      match: "Yankees vs. Red Sox",
      expert: "David Thompson",
      expertImage: "/images/expert-3.jpg",
      pick: "Yankees ML",
      confidence: 3,
      time: "1:05 PM ET",
      odds: "-150",
      isPremium: false,
      sportLogo: "/images/mlb-logo.png",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {picks.map((pick) => (
        <Card key={pick.id} className="bg-[#002713] border-[#003a1c] overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b border-[#003a1c] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                  <Image
                    src={pick.sportLogo || "/placeholder.svg"}
                    alt={pick.sport}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-white">{pick.sport}</span>
              </div>
              <Badge
                variant={pick.isPremium ? "default" : "outline"}
                className={pick.isPremium ? "bg-[#00e676] text-black" : "border-[#00e676] text-[#00e676]"}
              >
                {pick.isPremium ? "Premium" : "Free"}
              </Badge>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-3">{pick.match}</h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={pick.expertImage || "/placeholder.svg"}
                    alt={pick.expert}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-300">{pick.expert}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#003a1c] p-3 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Pick</div>
                  <div className="font-bold text-white">{pick.isPremium ? "🔒 Premium" : pick.pick}</div>
                </div>

                <div className="bg-[#003a1c] p-3 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Confidence</div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < pick.confidence ? "text-[#00e676] fill-[#00e676]" : "text-gray-500"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{pick.time}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <TrendingUp className="w-4 h-4" />
                  <span>Odds: {pick.odds}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
              {pick.isPremium ? "Unlock Pick" : "View Analysis"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
