# Sales Dashboard

A modern, interactive sales dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. This application visualizes sales data for the years 2022, 2023, and 2024 with multiple chart types and filtering capabilities.

## Features

- **Interactive Dashboard**: View sales data across multiple years (2022, 2023, 2024)
- **Multiple Chart Types**: Switch between Bar, Line, and Pie charts using Recharts
- **Custom Filter**: Set a sales threshold to filter data based on minimum sales values
- **API Integration**: Fetches data from Next.js API routes instead of hardcoded mock data
- **Data Table**: View detailed sales data in a tabular format
- **Summary Statistics**: Display total sales, average sales, and highest performing month
- **Atomic Component Structure**: Built with atomic design principles for maintainability
- **Responsive Design**: Fully responsive UI using Tailwind CSS

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for React
- **React 19**: Latest React version

## Project Structure

```
sales-dashboard/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main dashboard page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── api/
│   │       └── sales/
│   │           └── route.ts # API route for sales data
│   ├── components/
│   │   └── charts/
│   │       ├── BarChart.tsx  # Bar chart component
│   │       ├── LineChart.tsx # Line chart component
│   │       └── PieChart.tsx  # Pie chart component
│   └── data/
│       └── salesData.ts      # Sales data types
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
└── next.config.ts           # Next.js config
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sales-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Usage

### Selecting a Year
Click on the year buttons (2022, 2023, or 2024) to view sales data for that specific year.

### Changing Chart Type
Use the chart type buttons to switch between:
- **Bar Chart**: Displays sales as vertical bars
- **Line Chart**: Shows sales trends over time
- **Pie Chart**: Displays sales distribution by month

### Filtering by Sales Threshold
Enter a minimum sales value in the threshold input field to filter data. Only months with sales equal to or above the threshold will be displayed.

### Viewing Data
- The chart section provides a visual representation of the data
- The data table shows detailed information for each month
- Summary statistics cards display total sales, average sales, and the highest performing month

## Data Source

The application currently uses mock data inspired by typical sales datasets found on Kaggle. The data includes monthly sales figures for three consecutive years, showing realistic growth patterns.

## Future Enhancements

- **API Integration**: Fetch real sales data from an external API
- **Authentication**: Add user authentication and authorization
- **Data Export**: Enable export of data to CSV or Excel
- **Advanced Filters**: Add date range filters and category filters
- **Real-time Updates**: Implement WebSocket for real-time data updates
- **Dark Mode**: Add dark mode toggle
- **More Chart Types**: Add area charts, scatter plots, and more

## Component Architecture

The project follows atomic design principles with reusable, focused components:

- **Chart Components**: Each chart type is a separate, reusable component
- **Data Layer**: Sales data is centralized in a dedicated data module
- **UI Components**: Dashboard controls are organized logically
- **Type Safety**: TypeScript interfaces ensure type safety throughout

## License

This project is open source and available under the MIT License.
