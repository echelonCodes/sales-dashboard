'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/data/salesData';

interface BarChartProps {
  data: SalesData[];
  dataKey?: string;
  nameKey?: string;
  color?: string;
}

export default function BarChartComponent({
  data,
  dataKey = 'sales',
  nameKey = 'month',
  color = '#3b82f6',
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}
