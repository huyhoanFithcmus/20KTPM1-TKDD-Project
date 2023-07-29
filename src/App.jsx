import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Sidebar } from './components';
import { PlayNow } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#3b3b3e]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<PlayNow />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit"></div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"></div>
      )}
    </div>
  );
};

export default App;
