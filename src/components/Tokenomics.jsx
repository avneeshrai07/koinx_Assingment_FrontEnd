import React from 'react';

const Tokenomics = ({tabs, sectionRefs}) => {
  return (
    <div key={tabs.Tokenomics} ref={sectionRefs.Tokenomics} className="mx-auto bg-white my-5 p-6 py-8 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
      <h3 className='font-semibold my-2'>Initial Distribution</h3>
      <div className="md:flex items-center gap-6">
        {/* Chart */}
        <div
          className="w-36 h-36 bg-gradient-to-tr from-blue-500 to-yellow-400 rounded-full"
          style={{ background: 'conic-gradient(coral 78% 75%, turquoise 78% 100%)' }}
        ></div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            Crowdsale investors: 78%
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 bg-yellow-400 rounded"></div>
            Foundation: 22%
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
  <strong>Tokenomics - Initial Distribution</strong><br />
  The tokenomics structure of the project outlines the distribution of tokens across various stakeholders. This ensures transparency and equity for all parties involved.<br />
  <span className="block mt-2">Crowdsale investors: <span className="font-semibold">78%</span></span>
  <span className="block mt-1">Foundation: <span className="font-semibold">22%</span></span>
</p>
    </div>
  );
};

export default Tokenomics;
