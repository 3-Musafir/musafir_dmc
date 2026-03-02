import { Button } from '@/components/ui/button'

export default function WhyPakistan() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-8">
          High-Impact Destination. Under-Served Market.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-[#2B2D42]/80 mb-12">
          <p>
            Pakistan is a destination of extraordinary contrasts: from the soaring peaks of the Himalayas to the ancient Indus Valley civilizations. It offers high-impact cultural immersion, adventure tourism, and heritage experiences that few international competitors can reliably deliver.
          </p>
          <p>
            But here's what matters: the market is dramatically under-served by professional, structured DMC operators. International tour operators and corporate planners struggle to find partners they can trust — partners who understand Western expectations and Pakistani realities in equal measure.
          </p>
          <p>
            That's where we stand. We are your on-ground anchor in a market with enormous upside and minimal professional competition.
          </p>
        </div>

        <Button
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
        >
          Explore Destination Programs
        </Button>
      </div>
    </section>
  )
}
