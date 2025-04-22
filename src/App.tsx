import { useState } from 'react';
import { Sidebar } from './component/Sidebar';
import { VehicleDetails } from './component/VehicleDetails';
import { RoutesList } from './component/RoutesList';
import { DriverStats } from './component/DriverStats';
import { Header } from './component/Header';
// import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4 lg:p-6">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="grid gap-6">
            <VehicleDetails />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RoutesList />
              <DriverStats />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;




