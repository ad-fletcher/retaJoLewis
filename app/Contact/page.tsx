export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="py-8 sm:py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center md:items-start">
            {/* Text Content - Left */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left flex-1 w-full md:w-auto">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-white">
                Contact
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
                Press, Speaking, and Advisory Inquiries
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Contact Reta's team using the email below to explore partnership opportunities:{" "}
                <a href="mailto:info@retajolewis.com" className="text-white underline break-all sm:break-normal hover:text-gray-200 transition-colors">
                  info@retajolewis.com
                </a>
              </p>
            </div>

            {/* Image - Right */}
            <div className="relative w-full md:w-auto flex justify-center md:justify-end flex-1 min-w-0">
              <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl">
                <img
                  src="/retaConnect.png"
                  alt="Reta Connect"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
