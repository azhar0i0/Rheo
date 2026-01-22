export default function OurWorks() {
  return (
    <section className="bg-black text-white px-6 lg:px-24 py-32">
      {/* Header Line */}
      <div className="flex items-center gap-4 mb-24">
        <span className="text-sm text-gray-400">Works</span>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      <div className="relative">
        <WorkRow
          title="SmartCity Dashboard"
          subtitle="Traffic Monitoring"
          tech="IoT Integrations, Modular data pipelines"
          focus="Optimizing urban infrastructure and city planning efficiency"
        />

        <WorkRow
          title="EduLearn Platform"
          subtitle="AI-powered progress tracking"
          tech="microservices, microservices"
          focus="Enhancing online learning and student engagement"
        />

        <WorkRow
          title="FinSecure Portal"
          subtitle="Secure digital transactions"
          tech="Encrypted database architecture"
          focus="Providing safe, reliable financial services to users"
        />

        <WorkRow
          title="TravelMate App"
          subtitle="Real-time itinerary updates"
          tech="Cloud-based backend"
          focus="Improving traveler experience and convenience"
        />
      </div>
    </section>
  );
}

function WorkRow({ title, subtitle, tech, focus }) {
  return (
    <div className="relative">
      {/* Row Content */}
      <div className="flex justify-between lg:flex-row gap-12 py-16">
        {/* Left */}
        <h3 className="text-xl lg:text-2xl font-semibold">
          {title}
        </h3>

        {/* Middle */}
        <div>
          <p className="text-lg font-medium">
            {subtitle}
          </p>
          <p className="mt-2 text-sm text-gray-400">
            {tech}
          </p>
        </div>

        {/* Right */}
        <p className="text-sm text-gray-400 leading-relaxed max-w-md">
          <span className="text-gray-500">Focus:</span> {focus}
        </p>
      </div>

      {/* FULL-WIDTH DIVIDER (this is what you were missing) */}
      <div className="relative h-px bg-gray-200">
        {/* Circle */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2
                     w-5 h-5 rounded-full border border-white/30 bg-black"
        />
      </div>
    </div>
  );
}
