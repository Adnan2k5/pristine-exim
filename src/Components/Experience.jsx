import React from "react";
export const Experience = () => {
  return (
    <section className="bg-gray-900 backdrop-blur-sm z-50 text-white relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div id="about" className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  15<span className="text-orange-500">+</span>
                </div>
                <div className="text-gray-400">Years Service Experienced</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                Global Reach
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take your business beyond borders—without the hassle!
            </h2>
            <p className="text-gray-400 text-lg">
              With 15+ years of hands-on experience, our founder has built Pristime Exim into a trusted name in international trade consulting. Backed by a highly experienced team, we provide seamless solutions for export-import, banking, compliance, and trade-related services, helping businesses expand without the hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
