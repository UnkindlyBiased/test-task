import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { CountryPopulation } from "../../../types/country-population"
import { ChartConfig, ChartContainer } from "../../ui/chart"

type CountryPopulationChartProps = {
    data: CountryPopulation[]
}
   
const chartConfig = {
    value: {
        label: "Population",
        color: "#b02f1e",
    },
} satisfies ChartConfig

const CountryPopulationChart = ({ data }: CountryPopulationChartProps) => {
    const population = data.map(x => x.value)

    return (
        <div className="sm:w-[75%] md:w-[50%]">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis 
                        dataKey={'year'}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false} />
                    <YAxis dataKey={'value'} domain={[ Math.min(...population), Math.max(...population) ]} />
                    <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export { CountryPopulationChart }