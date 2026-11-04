export interface SalesData {
  month: string;
  sales: number;
  year: number;
}

export const salesData2022: SalesData[] = [
  { month: 'Jan', sales: 45000, year: 2022 },
  { month: 'Feb', sales: 52000, year: 2022 },
  { month: 'Mar', sales: 48000, year: 2022 },
  { month: 'Apr', sales: 61000, year: 2022 },
  { month: 'May', sales: 55000, year: 2022 },
  { month: 'Jun', sales: 67000, year: 2022 },
  { month: 'Jul', sales: 72000, year: 2022 },
  { month: 'Aug', sales: 69000, year: 2022 },
  { month: 'Sep', sales: 58000, year: 2022 },
  { month: 'Oct', sales: 63000, year: 2022 },
  { month: 'Nov', sales: 71000, year: 2022 },
  { month: 'Dec', sales: 78000, year: 2022 },
];

export const salesData2023: SalesData[] = [
  { month: 'Jan', sales: 52000, year: 2023 },
  { month: 'Feb', sales: 58000, year: 2023 },
  { month: 'Mar', sales: 62000, year: 2023 },
  { month: 'Apr', sales: 71000, year: 2023 },
  { month: 'May', sales: 68000, year: 2023 },
  { month: 'Jun', sales: 79000, year: 2023 },
  { month: 'Jul', sales: 85000, year: 2023 },
  { month: 'Aug', sales: 82000, year: 2023 },
  { month: 'Sep', sales: 74000, year: 2023 },
  { month: 'Oct', sales: 78000, year: 2023 },
  { month: 'Nov', sales: 86000, year: 2023 },
  { month: 'Dec', sales: 92000, year: 2023 },
];

export const salesData2024: SalesData[] = [
  { month: 'Jan', sales: 61000, year: 2024 },
  { month: 'Feb', sales: 67000, year: 2024 },
  { month: 'Mar', sales: 73000, year: 2024 },
  { month: 'Apr', sales: 82000, year: 2024 },
  { month: 'May', sales: 79000, year: 2024 },
  { month: 'Jun', sales: 91000, year: 2024 },
  { month: 'Jul', sales: 98000, year: 2024 },
  { month: 'Aug', sales: 95000, year: 2024 },
  { month: 'Sep', sales: 87000, year: 2024 },
  { month: 'Oct', sales: 92000, year: 2024 },
  { month: 'Nov', sales: 101000, year: 2024 },
  { month: 'Dec', sales: 108000, year: 2024 },
];

export const allSalesData = [...salesData2022, ...salesData2023, ...salesData2024];
