import React from 'react';
import timelineData from '../data/timelineData';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const Icon = item.type === 'work' ? Briefcase : GraduationCap;

  return (
    <div className="md:mb-8 flex md:justify-between items-center w-full">
      {/* Left Side */}
      <div className={`hidden md:block order-1 w-5/12 ${!isLeft && 'invisible'}`}>
        <div className="bg-white rounded-lg shadow-md px-6 py-4 transform transition-transform duration-300 hover:scale-105">
          <p className="text-sm font-medium text-emerald-600">{item.year}</p>
          <h3 className="mb-2 font-bold text-gray-800 text-xl">{item.title}</h3>
          <h4 className="mb-2 font-semibold text-gray-600">{item.subtitle}</h4>
          <p className="text-sm leading-snug tracking-wide text-gray-700">{item.description}</p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="z-20 hidden md:flex items-center order-1 bg-emerald-500 shadow-xl w-12 h-12 rounded-full">
        <Icon className="mx-auto text-white" size={24} />
      </div>

      {/* Right Side */}
      <div className={`order-1 w-full md:w-5/12 ${isLeft && 'md:invisible'}`}>
        <div className="bg-white rounded-lg shadow-md px-6 py-4 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-4 mb-4 md:hidden">
            <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-10 h-10 rounded-full">
              <Icon className="mx-auto text-white" size={20} />
            </div>
            <p className="text-sm font-medium text-emerald-600">{item.year}</p>
          </div>
          <p className="hidden md:block text-sm font-medium text-emerald-600">{item.year}</p>
          <h3 className="mb-2 font-bold text-gray-800 text-xl">{item.title}</h3>
          <h4 className="mb-2 font-semibold text-gray-600">{item.subtitle}</h4>
          <p className="text-sm leading-snug tracking-wide text-gray-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden md:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block left-1/2"></div>
        {timelineData.map((item, index) => (
          <TimelineItem item={item} index={index} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;