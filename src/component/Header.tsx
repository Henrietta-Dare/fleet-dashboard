import { MessageSquareText, Phone, MoreVertical } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-4 mb-4 py-1">
      
      <div className="flex items-center space-x-4 mb-3">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop"
          alt="James Lubin"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">James Lubin</h2>
          <p className="text-sm text-muted-foreground">ID: 236-542-097</p>
        </div>
      </div>

     
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-800">
          <MessageSquareText fill='black' className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          <Phone fill='black' className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
