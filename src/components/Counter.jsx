import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup';

const Counter = () => {


  return (
    <>
      <div id='counter' className=" padding-x-lg lg:mt-0 mt-32">
        <div className="mx-auto grid-4-cols">
          {counterItems.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center mb-5 "
            >
              <div className="counter-number text-white font-bold text-3xl mb-1 ">
                <CountUp id="count" start={0} end={item.value} />

                {item.suffix}
              </div>
              <div className="text-white-50">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Counter