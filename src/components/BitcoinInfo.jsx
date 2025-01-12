import React from "react";
import useCoinData from "../hooks/useCoinData";
// import DOMPurify from "dompurify";

const BitcoinInfo = ({tabs, sectionRefs}) => {
  const { data,detailedData, loading, error } = useCoinData("ethereum");
  // const sanitizedHTML = DOMPurify.sanitize(detailedData);
  console.log(detailedData)
  return (
    <div key={tabs.NewInsights} ref={sectionRefs.NewInsights}  className="p-6 bg-custom-black-300 border border-gray-200 rounded-lg shadow-md space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">About ethereum</h2>
        <div className=" text-white"
          dangerouslySetInnerHTML={{ __html: detailedData }}
        ></div>
      </div>

      {/* Lorem Section */}
      
<div>
  <h3 className="text-lg font-semibold mb-4 text-white">Already Holding ethereum?</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Calculate Profits */}
    <div className="p-5 text-white bg-gradient-to-r from-custom-black-100 to-custom-white rounded-lg flex items-center space-x-4 transition duration-300 hover:from-white hover:to-custom-black-400">
      <div className="flex items-center justify-center h-full w-[30%] bg-white text-white font-bold">
        <img className="h-full object-cover rounded" src="https://imgs.search.brave.com/HXZo6nWwdbq-AnWE7qDPeSHkoZD8CazveJblurSNUU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y29pbnBhcGVyLmNv/bS9jb2lucGFwZXIv/Zl93ZWJwLGNfbGlt/aXQsd18zODQwLHFf/YXV0bzpnb29kL2V0/aGVyZXVtX2V0aF9s/b2dvX2U2OWIxYzIz/NjgucG5n" alt="" />
      </div>
      <div>
        <h4 className="font-medium">Calculate your Profits</h4>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Check Now
        </button>
      </div>
    </div>

    {/* Calculate Tax Liability */}
    <div className="p-5 text-white bg-gradient-to-r from-custom-black-100 to-custom-white rounded-lg flex items-center space-x-4 transition duration-300 hover:from-white hover:to-custom-black-400">
      <div className="flex items-center justify-center h-full w-[30%] text-white font-bold rounded-full">
        <img className="h-full object-cover rounded" src="https://imgs.search.brave.com/2dZuShj5OSwNu3RgsrAwPu06s17XyZ5qoOBjaADvUs0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NDIxOTEwNC9waG90/by9zdG9jay10cmFk/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz00QVUxR0lS/dklsSHc4SmRuemRZ/emVDOE1SekpLY2Rr/ZVRnRk16eXQ5aGsw/PQ" alt="" />
      </div>
      <div>
        <h4 className="font-medium">
          Calculate your tax liability
        </h4>
        <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Check Now
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Additional Paragraph */}
      <div>
        <p className="text-white">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
          vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
          pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
          fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
          dui.
        </p>
      </div>
    </div>
  );
};

export default BitcoinInfo;
