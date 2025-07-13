
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
interface FloorPlan {
  floor: string;
  beds: number;
  bath: number;
  sqft: number;
  image: string;
  info: string;
}

const PropertyFloorPlans = () => {
  const floorPlans:FloorPlan[] = [
    {
    floor: "first floor",
    beds: 2,
    bath: 2,
    sqft: 2950,
    image: "/assets/images/slider/banner1.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "second floor",
    beds: 3,
    bath: 2,
    sqft: 2700,
    image: "/assets/images/slider/banner5.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "third floor",
    beds: 1,
    bath: 1,
    sqft: 2358,
    image: "/assets/images/slider/banner7.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "fourth floor",
    beds: 2,
    bath: 2,
    sqft: 2500,
    image: "/assets/images/slider/banner3.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "fifth floor",
    beds: 3,
    bath: 3,
    sqft: 3100,
    image: "/assets/images/slider/banner4.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "sixth floor",
    beds: 1,
    bath: 1,
    sqft: 2200,
    image: "/assets/images/slider/banner6.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "seventh floor",
    beds: 2,
    bath: 1,
    sqft: 2600,
    image: "/assets/images/slider/banner2.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "eighth floor",
    beds: 3,
    bath: 2,
    sqft: 2850,
    image: "/assets/images/slider/banner8.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "ninth floor",
    beds: 2,
    bath: 2,
    sqft: 2750,
    image: "/assets/images/slider/banner9.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  },
  {
    floor: "tenth floor",
    beds: 4,
    bath: 3,
    sqft: 3200,
    image: "/assets/images/slider/banner10.png",
    info: "Called image let was. Set midst, second divide, earth male fruit you under let she'd, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters."
  }
  ];

  return (
    <div className="pb-12 border-b border-[var(--custom-bg-primary)]/10">
      <Card className="">
      <CardTitle className="px-6 py-4 text-xl font-normal text-[var(--custom-text-primary)] leading-1.5">
        Floor Plans Details
      </CardTitle>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {floorPlans.map((plan, index) => (
            <Accordion key={index} type="single" collapsible className="border rounded-lg">
              <AccordionItem value={`floor-${index}`} className="border-none">
                <AccordionTrigger className="px-4 py-3 bg-[var(--custom-bg-secondary)]/25 hover:no-underline rounded-t-lg data-[state=open]:rounded-b-none cursor-pointer">
                  <div className="flex items-center justify-between w-full mr-4 cursor-pointer">
                    <span className="text-sm text-[var(--custom-text-primary)] capitalize">
                      {plan.floor}
                    </span>
                    <div className="flex items-center gap-6 text-sm text-[var(--custom-text-primary)]">
                      <span><strong className="font-medium">{plan.beds}</strong> Beds</span>
                      <span><strong className="font-medium">{plan.bath}</strong> Bath</span>
                      <span><strong className="font-medium">{plan.sqft}</strong> sqft</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4">
                  <div className="flex relative justify-center w-full h-[300px]">
                    <Image
                      src={plan.image}
                      fill
                      alt={`${plan.floor} floor plan`}
                      className="max-w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm text-[var(--custom-text-primary)]">{plan.info}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
  );
};

export default PropertyFloorPlans;
