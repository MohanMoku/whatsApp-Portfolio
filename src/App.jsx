import MainPage from "./components/MainPage"
import TopHeader from "./components/TopHeader"
import TopSide from "./components/TopSide"

function App() {
  return (
    <div className="bg-gray-700 text-white w-full flex flex-col h-screen">
      <div className="bg-gray-800 w-full">
        <TopHeader />
      </div>

      <div className="flex flex-1 h-17/18 ">
        <div className="bg-gray-800 w-12">
          <TopSide />
        </div>

        <div className="w-full bg-gray-800">
          <MainPage />
        </div>
      </div>
    </div>
  )
}

export default App