import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ThirdPane from "./ThirdPane";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import '../styles/mainDashboard.css';   // Import your Figma CSS

export default function Layout() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="layout">
      <Sidebar />
      
      <div className="dashboard"> {/* <-- Figma Main Dashboard styling here */}
        <MainContent onItemSelect={setSelectedItem} />
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ThirdPane item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
