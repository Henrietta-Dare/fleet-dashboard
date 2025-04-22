import { Card } from "@/components/ui/card";
export function VehicleDetails() {
  return (
    <Card className="p-9 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Volkswagen Transporter</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Payload</p>
              <p className="text-lg font-medium">2,885 lbs</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Load Volume</p>
              <p className="text-lg font-medium">353,937 in³</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Load Length</p>
              <p className="text-lg font-medium">117 in</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Load Width</p>
              <p className="text-lg font-medium">67 in</p>
            </div>
            <div className="px-2 py-1 w-30 border border-black rounded-md text-xs font-bold bg-gray-100">
            California · 2022 <br />
            <span className="ml-2 text-lg">6TRJ244</span>
            </div>

            <div>
            <p className="text-sm">Documents</p>
            <div className="flex space-x-1">
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-0.5 bg-gray-400 rounded-full"></span>
            </div>
           </div>
           </div>
          </div>
        
        <div className="flex items-center justify-center">
          <img
            src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_400,h_237,q_auto,c_fill,f_auto,fl_lossy/auto-client/49bc395e9b24387988b28c818ac6dba2/swb.png"
            alt="Volkswagen Transporter"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </Card>
  );
}