import React from 'react'
export const Experience = () => {
  return (
    <section className="bg-gray-900 backdrop-blur-sm z-50 text-white relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    5<span className="text-orange-500">+</span>
                  </div>
                  <div className="text-gray-400">Years Service Experienced</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    20<span className="text-orange-500">+</span>
                  </div>
                  <div className="text-gray-400">Global Markets</div>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  4K<span className="text-orange-500">+</span>
                </div>
                <div className="text-gray-400">Orders Per Month</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Maximise Your Logistics & Transportation Trade Potential
              </h2>
              <p className="text-gray-400 text-lg">
                Introducing a world of new opportunities with Pristime Exim. Leverage
                them and take your business global within minutes. We handle all
                hassle so that you can take off.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
