import React from "react";

function ZeroSection() {
  return (
    <div className="relative bg-[#F8F7F5] md:mb-[50px] p-10">
      {/* Top line divider */}
      <div
        style={{ backgroundColor: "rgba(2,1,32,0.16)" }}
        className="h-[1px] w-full  mb-8"
      ></div>

      {/* Main 2-column layout */}
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT: Heading */}
        <h2 className="text-[10px] uppercase font-[4-mt-6 ] text-[#020120]">
          Built for the Riders <br /> Who Move Nations
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
                <div className="h-25 bg-[#E96A32] w-[1px]"></div>
                <div>
                  <p className="text-6xl  text-[#020120]">45%</p>
                  <p className="text-[10px] text-[#616161] mt-6 ">
                    Up to 45% higher take-home pay
                  </p>
                </div>
              </div>

              {/* 50% */}
              <div className="flex items-start gap-4">
                <div className="h-25 bg-[#E96A32] w-[1px]"></div>
                <div>
                  <p className="text-6xl  text-[#020120]">50%</p>
                  <p className="text-[10px] text-[#616161] mt-6 ">
                    50% lower powering costs
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 → ZERO */}
            <div className="flex items-start gap-4">
              <div className="h-25 bg-[#E96A32] w-[1px]"></div>
              <div>
                <p className="text-6xl  text-[#020120]">ZERO</p>
                <p className="text-[10px] text-[#616161] mt-6 ">
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
