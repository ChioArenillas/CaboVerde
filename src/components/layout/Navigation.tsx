import { Tab } from "@/types/types";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
}

export default function Navigation({
  activeTab,
  setActiveTab,
  tabs,
}: Props) {

  return (
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-1 md:space-x-2 py-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-sky-500 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
  )
}
