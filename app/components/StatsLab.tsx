'use client'

/**
 * StatsLab Component
 * Interactive Chart.js visualization for player statistics
 * 
 * Features:
 * - Dropdown to select player
 * - Dropdown to select stat type (points, assists, rebounds)
 * - Bar chart showing last 5 games
 * - Responsive design with auto-updating chart
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
import { capitalize } from '@/lib/utils'
import type { StatType } from '@/lib/types'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function StatsLab() {
  // State for selected player and stat
  const [selectedPlayer, setSelectedPlayer] = useState<string>('player1')
  const [selectedStat, setSelectedStat] = useState<StatType>('points')

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
            return `${PLAYER_STATS_DATA.players[selectedPlayer]} ${context[0].label}`
          },
        },
      },
      title: {
        display: true,
        text: `${PLAYER_STATS_DATA.players[selectedPlayer]}'s ${capitalize(selectedStat)} - Last 5 Games`,
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
    labels: PLAYER_STATS_DATA.games,
    datasets: [
      {
        label: capitalize(selectedStat),
        data: PLAYER_STATS_DATA.data[selectedPlayer][selectedStat],
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
              >
                {Object.entries(PLAYER_STATS_DATA.players).map(([key, name]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
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
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  )
}

