'use client'

/**
 * StatsLab Component
 * Interactive Chart.js visualization for REAL Washington Wizards player statistics
 * 
 * Features:
 * - Fetches LIVE NBA data from Ball Don't Lie API
 * - Dropdown to select player (real Wizards roster)
 * - Dropdown to select stat type (points, assists, rebounds)
 * - Bar chart showing last 5 games
 * - Loading states and error handling
 * - Falls back to sample data if API fails
 * 
 * HOW THIS WORKS:
 * 1. Fetches real Wizards players on component mount
 * 2. Gets their recent game stats for the chart
 * 3. Updates chart when player/stat selection changes
 * 4. Shows loading spinner while fetching data
 * 5. Falls back to sample data if API is down
 */

import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { PLAYER_STATS_DATA } from '@/lib/data'
import { getFormattedWizardsData, getFallbackData } from '@/lib/nba-api'
import { capitalize } from '@/lib/utils'
import type { StatType } from '@/lib/types'
import type { FormattedPlayerData } from '@/lib/nba-api'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function StatsLab() {
  // State for selected player and stat
  const [selectedPlayer, setSelectedPlayer] = useState<string>('player1')
  const [selectedStat, setSelectedStat] = useState<StatType>('points')
  
  // State for NBA data
  const [nbaData, setNbaData] = useState<FormattedPlayerData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [useRealData, setUseRealData] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Effect: Fetch NBA data on component mount
   * Tries to get real Wizards data, falls back to sample data
   */
  useEffect(() => {
    const fetchNbaData = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        // Try to fetch real NBA data
        const realData = await getFormattedWizardsData()
        
        if (realData && realData.length > 0) {
          setNbaData(realData)
          setUseRealData(true)
          console.log('✅ Using REAL NBA data!', realData)
        } else {
          throw new Error('No real data returned')
        }
      } catch (error) {
        console.warn('⚠️ NBA API failed, using fallback data:', error)
        setError('Using sample data - NBA API unavailable')
        setUseRealData(false)
        
        // Use fallback data
        const fallback = getFallbackData()
        const fallbackFormatted = Object.entries(fallback.players).map(([key, name], index) => ({
          id: key,
          name: name as string,
          position: index === 0 ? 'G' : index === 1 ? 'F' : 'F',
          stats: fallback.data[key as keyof typeof fallback.data],
          seasonStats: {
            points: 0,
            assists: 0,
            rebounds: 0,
            gamesPlayed: 0,
          }
        }))
        setNbaData(fallbackFormatted)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNbaData()
  }, [])

  /**
   * Get current data source (real NBA or fallback)
   */
  const getCurrentData = () => {
    if (useRealData && nbaData.length > 0) {
      return {
        players: nbaData.reduce((acc, player) => {
          acc[player.id] = player.name
          return acc
        }, {} as Record<string, string>),
        games: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'], // Generic labels for real data
        data: nbaData.reduce((acc, player) => {
          acc[player.id] = player.stats
          return acc
        }, {} as Record<string, any>)
      }
    } else {
      return PLAYER_STATS_DATA
    }
  }

  const currentData = getCurrentData()

  /**
   * Chart.js configuration options
   * Responsive design with custom styling
   */
  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            return `${currentData.players[selectedPlayer]} ${context[0].label}`
          },
        },
      },
      title: {
        display: true,
        text: `${currentData.players[selectedPlayer]}'s ${capitalize(selectedStat)} - Last 5 Games`,
        font: {
          size: 18,
          family: 'Inter',
          weight: 'bold',
        },
        color: '#002B5C',
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  /**
   * Chart data configuration
   * Updates based on selected player and stat
   */
  const chartData = {
    labels: currentData.games,
    datasets: [
      {
        label: capitalize(selectedStat),
        data: currentData.data[selectedPlayer]?.[selectedStat] || [],
        backgroundColor: 'rgba(227, 24, 55, 0.6)',
        borderColor: 'rgba(227, 24, 55, 1)',
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  }

  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-wizards-navy">
            WIZKIDS STAT LAB
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-gray-600">
            Tired of hot takes without the data to back it up? Us too. Use our interactive Stat Lab 
            to explore player performance over the last 5 games. The data doesn't lie.
          </p>
          
          {/* Data Source Indicator */}
          <div className="mt-4 flex justify-center items-center gap-2">
            {useRealData ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                🏀 LIVE NBA Data
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                📊 Sample Data
              </span>
            )}
            {error && (
              <span className="text-sm text-gray-500">
                ({error})
              </span>
            )}
          </div>
        </header>

        {/* Stats Lab Container */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner max-w-4xl mx-auto">
          {/* Control Panel */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            {/* Player Select */}
            <div>
              <label htmlFor="player-select" className="font-bold text-gray-700 block mb-1">
                Select Player:
              </label>
              <select
                id="player-select"
                value={selectedPlayer}
                onChange={(e) => setSelectedPlayer(e.target.value)}
                className="w-full md:w-auto p-2 border rounded-md shadow-sm focus-outline bg-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <option>Loading players...</option>
                ) : (
                  Object.entries(currentData.players).map(([key, name]) => (
                    <option key={key} value={key}>
                      {name}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Stat Select */}
            <div>
              <label htmlFor="stat-select" className="font-bold text-gray-700 block mb-1">
                Select Stat:
              </label>
              <select
                id="stat-select"
                value={selectedStat}
                onChange={(e) => setSelectedStat(e.target.value as StatType)}
                className="w-full md:w-auto p-2 border rounded-md shadow-sm focus-outline bg-white"
              >
                <option value="points">Points</option>
                <option value="assists">Assists</option>
                <option value="rebounds">Rebounds</option>
              </select>
            </div>
          </div>

          {/* Chart Container */}
          <div className="chart-container">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wizards-red mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading NBA stats...</p>
                </div>
              </div>
            ) : (
              <Bar data={chartData} options={chartOptions} />
            )}
          </div>
          
          {/* Refresh Button */}
          {!isLoading && (
            <div className="text-center mt-4">
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-wizards-red hover:text-wizards-navy font-semibold transition-colors"
              >
                🔄 Refresh Data
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

