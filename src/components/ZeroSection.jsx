import React from "react";

function ZeroSection() {
  return (
    <div className="p-10 ">
      {/* Main 2-column layout */}
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT: Heading */}
        <h2 className="text-sm uppercase font-semibold text-[#020120]">
          Built for the Riders Who Move Nations
        </h2>

        {/* RIGHT: Description + KPIs */}
        <div>
          {/* Description */}
          <p className="text-[#232323] max-w-xl leading-relaxed mb-14">
            A single rider often supports multiple dependents. By cutting daily
            expenses and boosting earnings, Kynetik improves income for families
            across Africa.
          </p>

          {/* KPI GRID */}
          <div className="space-y-12">
            {/* Row 1 → 45% + 50% */}
            <div className="grid grid-cols-2 gap-12">
              {/* 45% */}
              <div className="flex items-start gap-4">
                <div className="h-14 bg-[#E96A32] w-1"></div>
                <div>
                  <p className="text-4xl font-semibold text-[#020120]">45%</p>
                  <p className="text-sm text-[#616161] mt-1">
                    Up to 45% higher take-home pay
                  </p>
                </div>
              </div>

              {/* 50% */}
              <div className="flex items-start gap-4">
                <div className="h-14 bg-[#E96A32] w-1"></div>
                <div>
                  <p className="text-4xl font-semibold text-[#020120]">50%</p>
                  <p className="text-sm text-[#616161] mt-1">
                    50% lower powering costs
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 → ZERO */}
            <div className="flex items-start gap-4">
              <div className="h-14 bg-[#E96A32] w-1"></div>
              <div>
                <p className="text-4xl font-semibold text-[#020120]">ZERO</p>
                <p className="text-sm text-[#616161] mt-1">
                  Zero emissions from every ride
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZeroSection;
