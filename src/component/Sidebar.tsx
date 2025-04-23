// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { 
//   LayoutGrid, 
//   MapPinned, 
//   AudioWaveform, 
//   Truck, 
//   House, 
//   Minus, 
//   MessagesSquare,
//   Image,
//   BellDot, 
//   Plus,
//   Star,
//   ChevronDown,
//   OctagonAlert,
//   Search
// } from 'lucide-react';

// interface DriverItem {
//   id: string;
//   name: string;
//   vehicle: string;
//   status: 'ON THE WAY' | 'LOADING' | 'UNLOADING' | 'WAITING';
//   avatar: string;
// }

// const drivers: DriverItem[] = [
//   {
//     id: '1',
//     name: 'Nolan Dolidis',
//     vehicle: 'Mercedes-Benz Sprinter',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop',
//   },
//   {
//     id: '2',
//     name: 'Ahmad Mango',
//     vehicle: 'Volkswagen Transporter',
//     status: 'LOADING',
//     avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop',
//   },
//   {
//     id: '3',
//     name: 'James Lubin',
//     vehicle: 'Volkswagen Transporter',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop',
//   },
//   {
//     id: '4',
//     name: 'Talan Dorwart',
//     vehicle: 'Mercedes-Benz Metris',
//     status: 'WAITING',
//     avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop',
//   },
// ];

// const trucks = [
//   {
//     id: '5',
//     name: 'Jakob Vetrovs',
//     vehicle: 'Volvo FH',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=64&h=64&fit=crop',
//   },
//   {
//     id: '6',
//     name: 'Zain Vetrovs',
//     vehicle: 'Mercedes-Benz Atego',
//     status: 'WAITING',
//     avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=64&h=64&fit=crop',
//   },
//   {
//     id: '7',
//     name: 'Jaylon Rhiel Madson',
//     vehicle: 'Volvo FL',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1619300026534-8e8a76941138?w=64&h=64&fit=crop',
//   },
//   {
//     id: '8',
//     name: 'Gustavo Torff',
//     vehicle: 'Volvo FL',
//     status: 'UNLOADING',
//     avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
//   },
//   {
//     id: '9',
//     name: 'Jaylon Botosh',
//     vehicle: 'Man TGM 15.290 4X2 BL CH',
//     status: 'LOADING',
//     avatar: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?w=64&h=64&fit=crop',
//   },
//   {
//     id: '10',
//     name: 'Marcus Dokidis',
//     vehicle: 'Man TGM 8.190 4X2 BL CH',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=64&h=64&fit=crop',
//   }
// ];

// const vans = [
//   {
//     id: '11',
//     name: 'Tiana Westervelt',
//     vehicle: 'Volkswagen Transporter',
//     status: 'LOADING',
//     avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop',
//   },
//   {
//     id: '12',
//     name: 'Zain Korsgaard',
//     vehicle: 'Mercedes-Benz Sprinter',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=64&h=64&fit=crop',
//   },
//   {
//     id: '13',
//     name: 'Wilson Dokidis',
//     vehicle: 'Mercedes-Benz Metris',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?w=64&h=64&fit=crop',
//   },
//   {
//     id: '14',
//     name: 'Jaxson Donin',
//     vehicle: 'Volkswagen Transporter',
//     status: 'ON THE WAY',
//     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop',
//   },
// ];

// const onlineNames = [
//   'Nolan Dolidis',
//   'Talan Dorwart',
//   'Jakob Vetrovs',
//   'Gustavo Torff',
//   'Marcus Dokidis',
//   'Tiana Westervelt',
//   'Wilson Dokidis',
//   'Jaxson Donin',
// ];


// export function Sidebar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState<'dashboard' | 'map' | 'route' | 'truck' | 'house' | 'messages' | 'images' | 'notifications'>('truck');
  
//   return (
//     <div className="flex h-screen">


// <div className="w-16 bg-black flex flex-col items-center py-4 space-y-8">
// <div className="flex flex-col items-center space-y-8">
//   <button onClick={() => setActiveTab('dashboard')}>
//     <div className={`p-2 ${activeTab === 'dashboard' ? 'bg-blue-500' : ''}`}>
//     <LayoutGrid className={`w-10 h-4 ${activeTab === 'dashboard' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('map')}>
//     <div className={`p-2 ${activeTab === 'map' ? 'bg-blue-500' : ''}`}>
//     <MapPinned className={`w-10 h-4 ${activeTab === 'map' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('route')}>
//     <div className={`p-2 ${activeTab === 'route' ? 'bg-blue-500' : ''}`}>
//     <AudioWaveform className={`w-10 h-4 ${activeTab === 'route' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('truck')}>
//     <div className={`p-2  ${activeTab === 'truck' ? 'bg-blue-500' : ''}`}>
//       <Truck className={`w-10 h-4 ${activeTab === 'truck' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('house')}>
//     <div className={`p-2 ${activeTab === 'house' ? 'bg-blue-500' : ''}`}>
//       <House className={`w-10 h-4 ${activeTab === 'house' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <div className="w-6 h-6 mb-5 text-gray-400 opacity-50">
//     <Minus />
//   </div>


//   <button onClick={() => setActiveTab('messages')}>
//     <div className={`p-2 ${activeTab === 'messages' ? 'bg-blue-500' : ''}`}>
//       <MessagesSquare className={`w-10 h-4 ${activeTab === 'messages' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('images')}>
//     <div className={`p-2 ${activeTab === 'images' ? 'bg-blue-500' : ''}`}>
//       <Image className={`w-10 h-4 ${activeTab === 'images' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>


//   <button onClick={() => setActiveTab('notifications')}>
//     <div className={`p-2 ${activeTab === 'notifications' ? 'bg-blue-500' : ''}`}>
//       <BellDot className={`w-10 h-4 ${activeTab === 'notifications' ? 'text-white' : 'text-white/70'}`} />
//     </div>
//   </button>
// </div>

// <div className="mt-auto pt-4">
//     <img
//       src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=64&h=64&fit=crop"
//       alt="Profile"
//       className="w-10 h-10 rounded-full object-cover"
//     />
//   </div>
//   </div>

//   <div className="w-full border-r bg-white">
   
// <div className="relative w-full p- pb-0">
//   <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//   <Input
//     type="text"
//     placeholder="Search..."
//     value={searchQuery}
//     onChange={(e) => setSearchQuery(e.target.value)}
//     className="pl-12"
//   />
// </div>


//         <ScrollArea className="h-[calc(100vh-8rem)]">
//           <div className="p-4">
//            <div className="mb-6">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center space-x-2">
//                   <Star fill='gold' className="w-4 h-4 text-orange-300" />
//                   <span className="text-sm font-semibold text-gray-500">FAVORITES</span>
//                 </div>
//                 <ChevronDown className="w-4 h-4 text-black" />
//               </div>

//               <div className="space-y-3">
//                 {drivers.map((driver) => (

//                   <div
//                   key={driver.id}
//                  className={`flex items-center space-x-3 rounded-lg cursor-pointer p-1
//                   ${driver.name === 'James Lubin' ? 'bg-gray-200' : 'hover:bg-gray-100'}
//                   `}
//                    >
//                  <div className="relative">
//                 <img
//                 src={driver.avatar}
//                 alt={driver.name}
//                 className="w-8 h-8 rounded-full"
//               />
//               {onlineNames.includes(driver.name) && (
//                   <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
//                 )}
//               </div>

//               <div className="flex-1 min-w-0">
//                 <div className="font-medium text-sm truncate">{driver.name}</div>
//                 <div className="text-xs text-gray-500 truncate">{driver.vehicle}</div>
//               </div>

  

//               <span className={`text-xs font-light flex items-center gap-1 ${driver.status === 'WAITING' ? 'text-red-500' : 'text-gray-300'}`}>
//               {driver.status === 'WAITING' && <OctagonAlert fill='red' className="w-3 h-3 text-red-500" />}
//                 {driver.status}
//               </span>
//               </div>
//               ))}
//               </div>
//             </div>

            
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center space-x-2">
                  
//                   <span className="text-sm font-semibold text-gray-500">TRUCKS</span>
//                 </div>
//                 <ChevronDown className="w-4 h-4 text-black" />
//               </div>

//               <div className="space-y-3">
//                 {trucks.map((truck) => (
//                   <div
//                     key={truck.id}
//                     className="flex items-center space-x-3  rounded-lg hover:bg-gray-100 cursor-pointer p-1"
//                   >
//                    <div className="relative">
//                     <img
//                       src={truck.avatar}
//                       alt={truck.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     {onlineNames.includes(truck.name) && (
//                       <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
//                     )}
//                   </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-medium text-sm truncate">{truck.name}</div>
//                       <div className="text-xs text-gray-500 truncate">{truck.vehicle}</div>
//                     </div>

//                     <span className={`text-xs font-light flex items-center gap-1 ${truck.status === 'WAITING' ? 'text-red-500' : 'text-gray-300'}`}>
//                     {truck.status === 'WAITING' && <OctagonAlert fill='red' className="w-3 h-3 text-red-500" />}
//                     {truck.status}
//                   </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

          
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-sm font-semibold text-gray-500">VANS</span>
//                 </div>
//                 <ChevronDown className="w-4 h-4 text-black" />
//               </div>

//               <div className="space-y-3">
//                 {vans.map((van) => (
//                   <div
//                     key={van.id}
//                     className="flex items-center space-x-3 rounded-lg hover:bg-gray-100 cursor-pointer p-1"
//                   >
//                     <div className="relative">
//                     <img
//                       src={van.avatar}
//                       alt={van.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     {onlineNames.includes(van.name) && (
//                     <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
//                     )}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-medium text-sm truncate">{van.name}</div>
//                       <div className="text-xs text-gray-500 truncate">{van.vehicle}</div>
//                     </div>
//                     <span className={`text-xs ${
//                       van.status === 'WAITING' ? 'text-red-500' : 
//                       van.status === 'LOADING' ? 'text-gray-300' : 
//                       'text-gray-300'
//                     }`}>
//                       {van.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </ScrollArea>

//         <div className="p-6 border-t">
//           <Button className="w-full bg-black text-white hover:bg-gray-900">
//             <Plus className="w-4 h-4" />
//             Add New Vehicle
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }









import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  LayoutGrid, 
  MapPinned, 
  AudioWaveform, 
  Truck, 
  House, 
  Minus, 
  MessagesSquare,
  Image,
  BellDot, 
  Plus,
  Star,
  ChevronDown,
  ChevronRight,
  OctagonAlert,
  Search
} from 'lucide-react';

interface DriverItem {
  id: string;
  name: string;
  vehicle: string;
  status: 'ON THE WAY' | 'LOADING' | 'UNLOADING' | 'WAITING';
  avatar: string;
}

const drivers: DriverItem[] = [
  {
    id: '1',
    name: 'Nolan Dolidis',
    vehicle: 'Mercedes-Benz Sprinter',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop',
  },
  {
    id: '2',
    name: 'Ahmad Mango',
    vehicle: 'Volkswagen Transporter',
    status: 'LOADING',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop',
  },
  {
    id: '3',
    name: 'James Lubin',
    vehicle: 'Volkswagen Transporter',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop',
  },
  {
    id: '4',
    name: 'Talan Dorwart',
    vehicle: 'Mercedes-Benz Metris',
    status: 'WAITING',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop',
  },
];

const trucks = [
  {
    id: '5',
    name: 'Jakob Vetrovs',
    vehicle: 'Volvo FH',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=64&h=64&fit=crop',
  },
  {
    id: '6',
    name: 'Zain Vetrovs',
    vehicle: 'Mercedes-Benz Atego',
    status: 'WAITING',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=64&h=64&fit=crop',
  },
  {
    id: '7',
    name: 'Jaylon Rhiel Madson',
    vehicle: 'Volvo FL',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1619300026534-8e8a76941138?w=64&h=64&fit=crop',
  },
  {
    id: '8',
    name: 'Gustavo Torff',
    vehicle: 'Volvo FL',
    status: 'UNLOADING',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
  },
  {
    id: '9',
    name: 'Jaylon Botosh',
    vehicle: 'Man TGM 15.290 4X2 BL CH',
    status: 'LOADING',
    avatar: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?w=64&h=64&fit=crop',
  },
  {
    id: '10',
    name: 'Marcus Dokidis',
    vehicle: 'Man TGM 8.190 4X2 BL CH',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=64&h=64&fit=crop',
  }
];

const vans = [
  {
    id: '11',
    name: 'Tiana Westervelt',
    vehicle: 'Volkswagen Transporter',
    status: 'LOADING',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&fit=crop',
  },
  {
    id: '12',
    name: 'Zain Korsgaard',
    vehicle: 'Mercedes-Benz Sprinter',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=64&h=64&fit=crop',
  },
  {
    id: '13',
    name: 'Wilson Dokidis',
    vehicle: 'Mercedes-Benz Metris',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?w=64&h=64&fit=crop',
  },
  {
    id: '14',
    name: 'Jaxson Donin',
    vehicle: 'Volkswagen Transporter',
    status: 'ON THE WAY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop',
  },
];

const onlineNames = [
  'Nolan Dolidis',
  'Talan Dorwart',
  'Jakob Vetrovs',
  'Gustavo Torff',
  'Marcus Dokidis',
  'Tiana Westervelt',
  'Wilson Dokidis',
  'Jaxson Donin',
];


export function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'map' | 'route' | 'truck' | 'house' | 'messages' | 'images' | 'notifications'>('truck');
  
  // Add state for section visibility
  const [sectionsVisible, setSectionsVisible] = useState({
    favorites: true,
    trucks: true,
    vans: true
  });

  // Toggle section visibility
  const toggleSection = (section: 'favorites' | 'trucks' | 'vans') => {
    setSectionsVisible({
      ...sectionsVisible,
      [section]: !sectionsVisible[section]
    });
  };

  return (
    <div className="flex h-screen">

      <div className="w-16 bg-black flex flex-col items-center py-4 space-y-8">
        <div className="flex flex-col items-center space-y-8">
          <button onClick={() => setActiveTab('dashboard')}>
            <div className={`p-2 ${activeTab === 'dashboard' ? 'bg-blue-500' : ''}`}>
              <LayoutGrid className={`w-10 h-4 ${activeTab === 'dashboard' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('map')}>
            <div className={`p-2 ${activeTab === 'map' ? 'bg-blue-500' : ''}`}>
              <MapPinned className={`w-10 h-4 ${activeTab === 'map' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('route')}>
            <div className={`p-2 ${activeTab === 'route' ? 'bg-blue-500' : ''}`}>
              <AudioWaveform className={`w-10 h-4 ${activeTab === 'route' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('truck')}>
            <div className={`p-2  ${activeTab === 'truck' ? 'bg-blue-500' : ''}`}>
              <Truck className={`w-10 h-4 ${activeTab === 'truck' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('house')}>
            <div className={`p-2 ${activeTab === 'house' ? 'bg-blue-500' : ''}`}>
              <House className={`w-10 h-4 ${activeTab === 'house' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <div className="w-6 h-6 mb-5 text-gray-400 opacity-50">
            <Minus />
          </div>

          <button onClick={() => setActiveTab('messages')}>
            <div className={`p-2 ${activeTab === 'messages' ? 'bg-blue-500' : ''}`}>
              <MessagesSquare className={`w-10 h-4 ${activeTab === 'messages' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('images')}>
            <div className={`p-2 ${activeTab === 'images' ? 'bg-blue-500' : ''}`}>
              <Image className={`w-10 h-4 ${activeTab === 'images' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>

          <button onClick={() => setActiveTab('notifications')}>
            <div className={`p-2 ${activeTab === 'notifications' ? 'bg-blue-500' : ''}`}>
              <BellDot className={`w-10 h-4 ${activeTab === 'notifications' ? 'text-white' : 'text-white/70'}`} />
            </div>
          </button>
        </div>

        <div className="mt-auto pt-4">
          <img
            src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=64&h=64&fit=crop"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="w-full border-r bg-white">
        <div className="relative w-full pb-0">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>
      
       

        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-4">
            <div className="mb-6">
              <div 
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => toggleSection('favorites')}
              >
                <div className="flex items-center space-x-2">
                  <Star fill='gold' className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-semibold text-gray-500">FAVORITES</span>
                </div>
                {sectionsVisible.favorites ? (
                  <ChevronDown className="w-4 h-4 text-black" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-black" />
                )}
              </div>

              {sectionsVisible.favorites && (
                <div className="space-y-3">
                  {drivers.map((driver) => (
                    <div
                      key={driver.id}
                      className={`flex items-center space-x-3 rounded-lg cursor-pointer p-1
                        ${driver.name === 'James Lubin' ? 'bg-gray-200' : 'hover:bg-gray-100'}
                      `}
                    >
                      <div className="relative">
                        <img
                          src={driver.avatar}
                          alt={driver.name}
                          className="w-8 h-8 rounded-full"
                        />
                        {onlineNames.includes(driver.name) && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{driver.name}</div>
                        <div className="text-xs text-gray-500 truncate">{driver.vehicle}</div>
                      </div>

                      <span className={`text-xs font-light flex items-center gap-1 ${driver.status === 'WAITING' ? 'text-red-500' : 'text-gray-300'}`}>
                        {driver.status === 'WAITING' && <OctagonAlert fill='red' className="w-3 h-3 text-red-500" />}
                        {driver.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <div 
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection('trucks')}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-500">TRUCKS</span>
                </div>
                {sectionsVisible.trucks ? (
                  <ChevronDown className="w-4 h-4 text-black" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-black" />
                )}
              </div>

              {sectionsVisible.trucks && (
                <div className="space-y-3">
                  {trucks.map((truck) => (
                    <div
                      key={truck.id}
                      className="flex items-center space-x-3 rounded-lg hover:bg-gray-100 cursor-pointer p-1"
                    >
                      <div className="relative">
                        <img
                          src={truck.avatar}
                          alt={truck.name}
                          className="w-8 h-8 rounded-full"
                        />
                        {onlineNames.includes(truck.name) && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{truck.name}</div>
                        <div className="text-xs text-gray-500 truncate">{truck.vehicle}</div>
                      </div>

                      <span className={`text-xs font-light flex items-center gap-1 ${truck.status === 'WAITING' ? 'text-red-500' : 'text-gray-300'}`}>
                        {truck.status === 'WAITING' && <OctagonAlert fill='red' className="w-3 h-3 text-red-500" />}
                        {truck.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <div 
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection('vans')}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-500">VANS</span>
                </div>
                {sectionsVisible.vans ? (
                  <ChevronDown className="w-4 h-4 text-black" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-black" />
                )}
              </div>

              {sectionsVisible.vans && (
                <div className="space-y-3">
                  {vans.map((van) => (
                    <div
                      key={van.id}
                      className="flex items-center space-x-3 rounded-lg hover:bg-gray-100 cursor-pointer p-1"
                    >
                      <div className="relative">
                        <img
                          src={van.avatar}
                          alt={van.name}
                          className="w-8 h-8 rounded-full"
                        />
                        {onlineNames.includes(van.name) && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{van.name}</div>
                        <div className="text-xs text-gray-500 truncate">{van.vehicle}</div>
                      </div>
                      <span className={`text-xs ${
                        van.status === 'WAITING' ? 'text-red-500' : 
                        van.status === 'LOADING' ? 'text-gray-300' : 
                        'text-gray-300'
                      }`}>
                        {van.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>

        <div className="p-6 border-t">
          <Button className="w-full bg-black text-white hover:bg-gray-900">
            <Plus className="w-4 h-4" />
            Add New Vehicle
          </Button>
        </div>
      </div>
    </div>
  );
}