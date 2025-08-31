import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Facebook, Instagram, Linkedin, Share2, Twitter } from "lucide-react"

const page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    console.log(slug);
    

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            প্রযুক্তির ভবিষ্যৎ: কৃত্রিম বুদ্ধিমত্তা এবং মানব সভ্যতা
          </h2>

          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>২৫ ডিসেম্বর, ২০২৪</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <span className="hidden sm:inline">৫ মিনিট পড়ার সময়</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            আধুনিক যুগে কৃত্রিম বুদ্ধিমত্তা আমাদের জীবনযাত্রার মানকে নতুন উচ্চতায় নিয়ে যাচ্ছে। এই প্রবন্ধে আমরা দেখব কীভাবে AI প্রযুক্তি আমাদের
            ভবিষ্যৎ গড়ে তুলছে।
          </p>
        </div>

        {/* Featured Image */}
        <Card className="mb-8 overflow-hidden">
          <img
            src="/artificial-intelligence-futuristic-technology-conc.png"
            alt="কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ"
            className="w-full h-64 md:h-80 object-cover"
          />
        </Card>

        {/* Long Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="text-foreground leading-relaxed space-y-6">
            <p className="text-pretty">
              কৃত্রিম বুদ্ধিমত্তা (AI) আজকের দিনে শুধুমাত্র একটি প্রযুক্তিগত শব্দ নয়, বরং এটি আমাদের দৈনন্দিন জীবনের একটি অবিচ্ছেদ্য অংশ
              হয়ে উঠেছে। স্মার্টফোনের ভয়েস অ্যাসিস্ট্যান্ট থেকে শুরু করে স্বয়ংক্রিয় গাড়ি পর্যন্ত, AI প্রযুক্তি আমাদের চারপাশে বিদ্যমান।
            </p>

            <p className="text-pretty">
              এই প্রযুক্তির বিকাশ আমাদের কর্মক্ষেত্র, শিক্ষাব্যবস্থা, স্বাস্থ্যসেবা এবং বিনোদনের ক্ষেত্রে বিপ্লবী পরিবর্তন এনেছে। মেশিন লার্নিং
              এবং ডিপ লার্নিং অ্যালগরিদমের মাধ্যমে কম্পিউটার এখন মানুষের মতো চিন্তা করতে এবং সিদ্ধান্ত নিতে পারে।
            </p>

            <p className="text-pretty">
              তবে এই উন্নতির সাথে সাথে কিছু চ্যালেঞ্জও রয়েছে। নৈতিকতা, গোপনীয়তা এবং কর্মসংস্থানের প্রশ্নগুলি আমাদের সামনে নতুন দ্বিধা তৈরি
              করেছে। আমাদের এই প্রযুক্তিকে দায়িত্বশীলভাবে ব্যবহার করতে হবে যাতে এটি সমগ্র মানবতার কল্যাণে কাজ করে।
            </p>
          </div>
        </div>

        {/* Social Links */}
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">এই আর্টিকেলটি শেয়ার করুন:</span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-200 bg-transparent">
                <Facebook className="w-4 h-4 text-blue-600" />
                <span className="sr-only">Facebook এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-sky-50 hover:border-sky-200 bg-transparent">
                <Twitter className="w-4 h-4 text-sky-500" />
                <span className="sr-only">Twitter এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-200 bg-transparent">
                <Linkedin className="w-4 h-4 text-blue-700" />
                <span className="sr-only">LinkedIn এ শেয়ার করুন</span>
              </Button>

              <Button variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-200 bg-transparent">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="sr-only">Instagram এ শেয়ার করুন</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default page
