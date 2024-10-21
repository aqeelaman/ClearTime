"use client"
import { CartesianGrid, Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { date: "07-Jul", planned: 20, completed: 14 },
    { date: "14-Jul", planned: 35, completed: 25 },
    { date: "21-Jul", planned: 34, completed: 16 },
    { date: "28-Jul", planned: 40, completed: 35 },
    { date: "04-Aug", planned: 45, completed: 40 },
    { date: "11-Aug", planned: 60, completed: 55 },
    { date: "18-Aug", planned: 67, completed: 60 },
    { date: "25-Aug", planned: 70, completed: 50 },
    { date: "01-Sep", planned: 60, completed: 50 },
    { date: "08-Sep", planned: 50, completed: 30 },
    { date: "15-Sep", planned: 45, completed: 35 },
    { date: "22-Sep", planned: 40, completed: 35 },
]

const chartConfig = {
    planned: {
        label: "Planned",
        color: "#6F73F6",
    },
    completed: {
        label: "Completed",
        color: "#B2B2CC",
    },
} satisfies ChartConfig

export default function Component() {
    return (
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full rounded border border-solid border-[#A8ABF4] p-[20px]">
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                    bottom: 20,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    label={{ value: 'Cut-off Date', position: 'bottom' }}
                    dataKey="date"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={10}
                    tickFormatter={(value) => value}
                />
                <YAxis
                    label={{ value: 'No. of Tasks', angle: -90, position: 'left' }}
                    // dataKey="planned"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={10}
                    tickFormatter={(value) => value}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="planned" fill="var(--color-planned)" radius={4} />
                <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
