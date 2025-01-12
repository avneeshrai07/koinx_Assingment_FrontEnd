import React from 'react';

const Tokenomics = ({tabs, sectionRefs}) => {
  return (
    <div key={tabs.Tokenomics} ref={sectionRefs.Tokenomics} className="mx-auto bg-custom-black-300 my-5 p-6 py-8 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Tokenomics</h2>
      <h3 className='font-semibold my-2 text-white'>Initial Distribution</h3>
      <div className="md:flex items-center gap-6">
        {/* Chart */}
        <div
          className="w-36 h-36 bg-gradient-to-tr from-custom-blue to-brightYellow rounded-full"
          style={{ background: 'conic-gradient(#443996 0% 78%, #FFD700 78% 100%)' }}
        ></div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-white">
            <div className="w-4 h-4 bg-custom-blue rounded"></div>
            Crowdsale investors: 78%
          </div>
          <div className="flex items-center gap-2 text-sm text-white">
            <div className="w-4 h-4 bg-brightYellow rounded"></div>
            Foundation: 22%
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-white leading-relaxed">
  <strong>Tokenomics - Initial Distribution</strong><br />
  The tokenomics structure of the project outlines the distribution of tokens across various stakeholders. This ensures transparency and equity for all parties involved.<br />
  <span className="block mt-2">Crowdsale investors: <span className="font-semibold">78%</span></span>
  <span className="block mt-1">Foundation: <span className="font-semibold">22%</span></span>
</p>
    </div>
  );
};

export default Tokenomics;
