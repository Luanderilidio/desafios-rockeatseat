import Image from "../src/assets/image.svg";
import { FastForward, Play, Rewind } from "phosphor-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { IconButton } from "@mui/material";
function App() {
  return (
    <div className="sm:fixed w-full h-full flex items-center justify-center p-5 sm:p-0 text-gray-300 bg-[#0F0D13]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="row-span-2 col-span-2 sm:col-span-1 ">
          <div className="bg-[#2A2141] p-10 flex flex-col gap-8 rounded-lg">
            <img src={Image} alt="image" className="" />
            <div>
              <p className="text-3xl font-bold ">Acorda Devinho</p>
              <p className="text-lg  text-gray-400">Banda Rockeatseat</p>
            </div>
            <div className="flex items-center justify-between ">
              <IconButton>
                <Rewind weight="fill" size={32} color="#FFFFFF" />
              </IconButton>
              <IconButton>
                <Play size={32} weight="fill" color="#FFFFFF" />
              </IconButton>
              <IconButton>
                <FastForward weight="fill" size={32} color="#FFFFFF" />
              </IconButton>
            </div>
            <div className="flex flex-col gap-2">
              <ProgressBar
                completed={50}
                height="8px"
                bgColor="#FFFFFF"
                baseBgColor="#939393"
                maxCompleted={100}
                isLabelVisible={false}
              />
              <div className="flex items-center justify-between text-gray-400">
                <p>00:00</p>
                <p>03:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-[#2A2141] p-10 flex flex-col gap-6 rounded-lg">
          <div className="flex gap-4">
            <img src={Image} alt="image" className="w-20" />
            <div>
              <p className="text-2xl font-bold ">Acorda Devinho</p>
              <p className="text-lg  text-gray-400">Banda Rockeatseat</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <Rewind weight="fill" size={32} />
            <Play size={32} weight="fill" />
            <FastForward weight="fill" size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <ProgressBar
              completed={50}
              height="8px"
              bgColor="#FFFFFF"
              baseBgColor="#939393"
              maxCompleted={100}
              isLabelVisible={false}
            />
            <div className="flex items-center justify-between text-gray-400">
              <p>00:00</p>
              <p>03:00</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-[#2A2141] p-10 flex flex-col gap-6 rounded-lg justify-center">
          <div className="flex gap-4">
            <img src={Image} alt="image" className="w-20" />
            <div>
              <p className="text-2xl font-bold ">Acorda Devinho</p>
              <p className="text-lg  text-gray-400">Banda Rockeatseat</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <Rewind weight="fill" size={32} />
            <Play size={32} weight="fill" />
            <FastForward weight="fill" size={32} />
          </div>
          {/* <div className="flex flex-col gap-2">
            <ProgressBar
              completed={50}
              height="8px"
              bgColor="#FFFFFF"
              baseBgColor="#939393"
              maxCompleted={100}
              isLabelVisible={false}
            />
            <div className="flex items-center justify-between text-gray-400">
              <p>00:00</p>
              <p>03:00</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
