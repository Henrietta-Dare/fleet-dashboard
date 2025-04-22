import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  Bar,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const stats = [
  { label: 'On the Way', value: 39.7, color: '#60A5FA' },
  { label: 'Unloading', value: 28.3, color: '#3B82F6' },
  { label: 'Loading', value: 17.4, color: '#FBBF24' },
  { label: 'Waiting', value: 14.6, color: '#111827' },
];

const timeStats = [
  { name: 'On the Way', time: '3 hr 10 min', percent: '39.7%' },
  { name: 'Unloading', time: '2 hr 15 min', percent: '28.3%' },
  { name: 'Loading', time: '1 hr 23 min', percent: '17.4%' },
  { name: 'Waiting', time: '1 hr 10 min', percent: '14.6%' },
];

const workingData = [
  { day: 'Mon', working: 6.5, average: 10 },
  { day: 'Tue', working: 6, average: 9 },
  { day: 'Wed', working: 6.9, average: 9.7 },
  { day: 'Thu', working: 6, average: 8.5 },
  { day: 'Fri', working: 5, average: 8.2 },
  { day: 'Sat', working: 8.1, average: 9 },
  { day: 'Sun', working: 7.5, average: 8.5 },
];


export function DriverStats() {
  return (
    <Card className="p-6 bg-white">
     <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Driver Statistics</h3>
        <ArrowUpRight className="w-4 h-4" />
      </div>

     
      <div className="mb-6">
       

        <div className="flex items-center justify-between mb-6">
  <p className="text-xs font-medium text-black">
    AVERAGE TIME PER DAY BY CATEGORY
  </p>
  <div className="flex items-center gap- text-xs">
  <button className="text-gray-500 hover:text-black px-2">W</button>
  <button className="text-black bg-gray-200 px-2 py-1">M</button>
  <button className="text-gray-500 hover:text-black px-2">6M</button>
  <button className="text-gray-500 hover:text-black">Y</button>
</div>
</div>



<div className="w-full mb-6">
  
  <div className="relative h-5 mb-4">
    {stats.map((item, index) => {
      let leftOffset = 0;
      for (let i = 0; i < index; i++) {
        leftOffset += stats[i].value;
      }

      return (
        <div
          key={item.label}
          className="absolute text-xs text-muted-foreground"
          style={{
            left: `${leftOffset}%`,
          }}
        >
          {item.label}
        </div>
      );
    })}
  </div>

  
  <div className="flex w-full h-8 overflow-hidden rounded-md">
    {stats.map((item) => (
      <div
        key={item.label}
        className="flex items-center justify-center text-xs font-semibold"
        style={{
          width: `${item.value}%`,
          backgroundColor: item.color,
          color: item.color === '#111827' ? 'white' : 'black',
        }}
      >
        {item.value}%
      </div>
    ))}
  </div>
</div>
</div>

      
<div className="text-sm text-gray-700 mb-8 divide-y divide-gray-200">
  {timeStats.map((item, index) => (
    <div
      key={item.name}
      className={`flex justify-between py-3 ${index === 0 ? '' : 'border-t'}`}
    >
      <span>{item.name}</span>
      <span className="text-black">
        {item.time} &nbsp;&nbsp; {item.percent}
      </span>
    </div>
  ))}
</div>

<div>
<div className="flex items-center justify-between mb-6">
  <p className="text-xs font-medium text-black">
  WORKING TIME PER DAY
  </p>
  <div className="flex items-center gap- text-xs">
  <button className="text-black bg-gray-200 px-2 py-1">W</button>
  <button className="text-gray-500 hover:text-black px-2">M</button>
  <button className="text-gray-500 hover:text-black px-2">6M</button>
  <button className="text-gray-500 hover:text-black">Y</button>
</div>
</div>
    


       

<div className="h-[150px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={workingData}
              margin={{ top: 25, right: -45, left: 0, bottom: 0 }}
              barGap={7}
              barCategoryGap="30%"
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <YAxis 
                ticks={[0, 4, 8]}
                domain={[0, 8]}
                allowDataOverflow={true}
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
                orientation="right"
                yAxisId="right"
              />
              <Tooltip
                contentStyle={{
                  fontSize: '0.75rem',
                  borderRadius: '0.5rem',
                }}
              />
              <Bar 
                dataKey="average" 
                fill="#E0E7FF" 
                radius={[2, 2, 0, 0]} 
                aria-label="Average working time" 
                barSize={15}
                 yAxisId="right"
              />
              <Bar 
                dataKey="working" 
                fill="#000000" 
                radius={[2, 2, 0, 0]} 
                aria-label="Working time" 
                barSize={15}
                 yAxisId="right"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>




        <div className="mt-5 flex justify-center text-xs text-gray-500 gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black rounded-full inline-block" />
            Working Time
          </div>
          <div className="flex items-center gap-2 ">
            <span className="w-3 h-3 bg-indigo-100 rounded-full inline-block" />
            Average Working Time
          </div>
        </div>
      </div>
    </Card>
  );
}
