'use client';

import { useState, useMemo } from 'react';
import { salesData2022, salesData2023, salesData2024, SalesData } from '@/data/salesData';
import BarChartComponent from '@/components/charts/BarChart';
import LineChartComponent from '@/components/charts/LineChart';
import PieChartComponent from '@/components/charts/PieChart';

type ChartType = 'bar' | 'line' | 'pie';

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number>(0);

  const selectedData = useMemo(() => {
    const data = selectedYear === 2022 ? salesData2022 : selectedYear === 2023 ? salesData2023 : salesData2024;
    if (salesThreshold > 0) {
      return data.filter((item) => item.sales >= salesThreshold);
    }
    return data;
  }, [selectedYear, salesThreshold]);

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChartComponent data={selectedData} />;
      case 'line':
        return <LineChartComponent data={selectedData} />;
      case 'pie':
        return <PieChartComponent data={selectedData} />;
      default:
        return <BarChartComponent data={selectedData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sales Dashboard</h1>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
              <div className="flex gap-2">
                {[2022, 2023, 2024].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedYear === year
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Type Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Chart Type</label>
              <div className="flex gap-2">
                {(['bar', 'line', 'pie'] as ChartType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setChartType(type)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors capitalize ${
                      chartType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sales Threshold Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sales Threshold (≥ ${salesThreshold.toLocaleString()})
              </label>
              <input
                type="number"
                value={salesThreshold}
                onChange={(e) => setSalesThreshold(Number(e.target.value))}
                placeholder="Enter minimum sales"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Chart Display */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sales Data for {selectedYear}
          </h2>
          {renderChart()}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${item.sales.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Sales</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${selectedData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Average Sales</h3>
            <p className="text-3xl font-bold text-green-600">
              ${Math.round(selectedData.reduce((sum, item) => sum + item.sales, 0) / selectedData.length).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Highest Month</h3>
            <p className="text-3xl font-bold text-purple-600">
              {selectedData.reduce((max, item) => (item.sales > max.sales ? item : max)).month}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
