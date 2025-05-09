import Image from "next/image";
import Link from "next/link";

export default function DriveEarnings() {
  return (
    <section className="bg-white text-black py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold mb-12">Earnings Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project 1 - Green with phone */}
          <Link
            href="#"
            className="block relative overflow-hidden bg-[#00e676] rounded-sm"
          >
            <div className="aspect-square md:aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Hand holding a mobile app with portfolio interface"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Project 2 - Purple with wallet app */}
          <Link
            href="#"
            className="block relative overflow-hidden bg-[#e0cfff] rounded-sm"
          >
            <div className="aspect-square md:aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Wallet app interface showing balance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Link>

          {/* Project 3 - Dark with multiple screens and text */}
          <Link
            href="#"
            className="block relative overflow-hidden bg-[#0d3b3b] rounded-sm"
          >
            <div className="aspect-square md:aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Multiple screens showing cryptocurrency wallet interfaces"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-bold mb-2">
                  How we design web3 products
                </h3>
                <p className="text-sm opacity-75">coming soon</p>
              </div>
            </div>
          </Link>

          {/* Project 4 - Purple gradient with audienceplus */}
          <Link href="#" className="block relative overflow-hidden rounded-sm">
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-purple-500 to-purple-900">
              <div className="absolute inset-0 flex items-end justify-end p-6">
                <h3 className="text-2xl font-bold">audienceplus</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
