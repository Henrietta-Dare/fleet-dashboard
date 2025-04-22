import { Card } from '@/components/ui/card';

export function RoutesList() {
  return (
    <Card className="p-6 border-r bg-white">
      

      <div className="mb-6 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Routes</h3>
     
        <div className="text-right">
    <p className="text-sm cursor-pointer hover:text-primary">
      History
    </p>
    <div className="flex justify-end space-x-1 mt-1">
      <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
      <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
      <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
      <span className="w-2 h-0.5 bg-gray-300 rounded-full"></span>
      <span className="w-2 h-0.5 bg-gray-300 rounded-full"></span>
    </div>
  </div>
  </div>
    

<div className="mb-5 flex items-center">
  <h1 className="text-sm whitespace-nowrap mr-4">
    NOW ON THE WAY
  </h1>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>

      


      <div className="space-y-4">
       
      <h1 className="text-sm font-semibold mb-1">ID: 107-591 • 138 packages</h1>
      <p className='text-gray-400 text-sm mb-5'>2972 Westheimer Rd, Santa Ana → 270 Rucker Ave</p>
       
        
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15880.989568548866!2d-0.1776037!3d5.6773343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9dc4e3d7a2fd%3A0x7ea2b9d469001016!2sMadina%20Astro%20turf!5e0!3m2!1sen!2sgh!4v1745272956232!5m2!1sen!2sgh"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
        <div className="grid grid-cols-4 gap-4 divide-x">
          <div className=''>
            <p className="text-xs">Distance</p>
            <p className="text-sm font-semibold">0.62 mi</p>
          </div>
          <div>
            <p className="text-xs">Time Left</p>
            <p className="text-sm font-semibold">10 min</p>
          </div>
          <div>
            <p className="text-xs">Weight</p>
            <p className="text-sm font-semibold">2,160 lbs</p>
          </div>
          <div>
            <p className="text-xs">Volume</p>
            <p className="text-sm font-semibold">3,357 in³</p>
          </div>
        </div>
      </div>

      
      <div className="mt-8 space-y-4 text-sm text-gray-800">
        <div>

          
          <div className="flex items-center mb-5">
          <p className="text-xs whitespace-nowrap mr-3">12/10/22</p>
          <div className="flex-1 h-px bg-gray-300"></div>
          </div>


          <p className="font-semibold">ID: 109-270 • 107 packages</p>
          <p className="text-gray-400">8900 Murray Ave → 1408 10th St, Gilroy, CA 95020</p>
        </div>

        <div>
          <p className="font-semibold">ID: 112-791 • 86 packages</p>
          <p className="text-gray-400">230 Mayock Rd → 2325 Arroyo Cir Suite 21, Gilroy, CA 95020</p>
        </div>

        <div>
          <p className="font-semibold">ID: 128-612 • 129 packages</p>
          <p className="text-gray-400">6215 Engle Way → 905 1st St, Gilroy, CA 95020</p>
        </div>
      </div>
    </Card>
  );
}
