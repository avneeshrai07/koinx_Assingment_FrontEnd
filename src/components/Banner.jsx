import { FaArrowRightLong } from "react-icons/fa6";
import CreditImage from "../assets/photos/Credit.svg";
const Banner = () => {
  return (
    <div className="flex w-full my-5 text-white text-center gap-2 flex-col justify-center items-center bg-gray-900 p-10 rounded-xl">
        <h1 className="text-white text-2xl font-bold text-center">Get Started with KoinX  – It’s Free!</h1>
        <p className="text-sm p-2">
        With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.
        </p>

        <svg
        width="180"
        height="167"
        viewBox="0 0 180 167"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipShape">
          <rect x="10" y="10" width="160" height="160" />
          </clipPath>
        </defs>
        <g clipPath="url(#clipShape)">
          <image
            href={CreditImage}
            x="0"
            y="0"
            width="180"
            height="167"
          />
        </g>
      </svg>
<button className="flex items-center gap-2 bg-gray-50 font-semibold text-black px-5 p-1 rounded mt-2">
    Get Started For FREE <FaArrowRightLong />
</button> 

    </div>
  )
}

export default Banner