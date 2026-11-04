'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/data/salesData';

interface LineChartProps {
  data: SalesData[];
  dataKey?: string;
  nameKey?: string;
  color?: string;
}

export default function LineChartComponent({
  data,
  dataKey = 'sales',
  nameKey = 'month',
  color = '#3b82f6',
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
