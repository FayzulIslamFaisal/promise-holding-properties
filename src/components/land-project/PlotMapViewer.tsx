"use client"

import { Map as MapIcon, Info, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PlotMapViewerProps {
  mapImage?: string
}

// Dummy data for interactive plots
const dummyPlots = [
  { id: 'P1', x: 20, y: 20, width: 15, height: 20, status: 'sold' },
  { id: 'P2', x: 40, y: 20, width: 15, height: 20, status: 'available' },
  { id: 'P3', x: 60, y: 20, width: 20, height: 20, status: 'available' },
  { id: 'P4', x: 20, y: 50, width: 25, height: 25, status: 'available' },
  { id: 'P5', x: 50, y: 50, width: 30, height: 25, status: 'sold' },
]

const PlotMapViewer = ({ mapImage }: PlotMapViewerProps) => {
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);

  const handlePlotClick = (plot: typeof dummyPlots[0]) => {
    if (plot.status === 'available') {
      setSelectedPlot(plot.id);
      // In a real scenario, this would pass the plot's area/price up to the parent wrapper
      // which would then update the LandCalculator.
    }
  }

  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden relative border border-gray-100 dark:border-gray-800 flex flex-col group">
      {/* Overlay header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <MapIcon className="w-5 h-5" />
            <h3 className="font-semibold">Interactive Master Plan</h3>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500/50 border border-green-500 rounded-full"></span> Available</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500/50 border border-red-500 rounded-full"></span> Sold</span>
          </div>
        </div>
      </div>

      {/* Map Content */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center bg-[#e5e5e5] dark:bg-gray-800">
        {mapImage ? (
          <div className="relative w-full h-full overflow-hidden">
            {/* Base Image */}
            <Image 
              src={mapImage} 
              alt="Plot Map" 
              fill 
              className="object-cover opacity-80" 
            />
            
            {/* SVG Overlay for Interactive Plots */}
            <svg 
              className="absolute inset-0 w-full h-full z-10" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {dummyPlots.map((plot) => (
                <g key={plot.id} onClick={() => handlePlotClick(plot)} className={plot.status === 'available' ? 'cursor-pointer' : 'cursor-not-allowed'}>
                  <rect
                    x={`${plot.x}%`}
                    y={`${plot.y}%`}
                    width={`${plot.width}%`}
                    height={`${plot.height}%`}
                    className={`
                      transition-all duration-300 stroke-2
                      ${plot.status === 'sold' ? 'fill-red-500/40 stroke-red-600 hover:fill-red-500/50' : ''}
                      ${plot.status === 'available' && selectedPlot !== plot.id ? 'fill-green-500/40 stroke-green-600 hover:fill-green-500/60' : ''}
                      ${selectedPlot === plot.id ? 'fill-primary/60 stroke-primary stroke-[3px] animate-pulse' : ''}
                    `}
                  />
                  <text 
                    x={`${plot.x + plot.width / 2}%`} 
                    y={`${plot.y + plot.height / 2}%`} 
                    dominantBaseline="middle" 
                    textAnchor="middle"
                    className="text-[3px] font-bold fill-white drop-shadow-md pointer-events-none"
                  >
                    {plot.id}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        ) : (
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapIcon className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">Master plan map will be available soon.</p>
          </div>
        )}
      </div>

      {/* Interactive hints overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[var(--brand-dark)]/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <div>
          {selectedPlot ? (
             <div className="flex items-center gap-2 text-primary font-medium">
               <CheckCircle2 className="w-5 h-5" />
               <span>Plot {selectedPlot} Selected! You can now calculate its price.</span>
             </div>
          ) : (
             <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
               <Info className="w-5 h-5 text-blue-500" />
               <span>Click on any <span className="text-green-600 font-semibold">green available plot</span> to select it.</span>
             </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlotMapViewer
