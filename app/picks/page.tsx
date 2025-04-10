import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeaturedPicks from "@/components/featured-picks"
import { ChevronRight, Filter } from "lucide-react"

export default function PicksPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Today's Expert Picks</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse our expert picks across all major sports. Unlock premium picks to see our highest confidence plays.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-[#002713]">
                <TabsTrigger value="all">All Sports</TabsTrigger>
                <TabsTrigger value="nfl">NFL</TabsTrigger>
                <TabsTrigger value="nba">NBA</TabsTrigger>
                <TabsTrigger value="mlb">MLB</TabsTrigger>
                <TabsTrigger value="nhl">NHL</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button variant="outline" className="w-full md:w-auto border-[#003a1c] text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filter Picks
            </Button>
          </div>

          <TabsContent value="all" className="mt-0">
            <FeaturedPicks />
            <FeaturedPicks />
          </TabsContent>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8">
              Load More Picks
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
