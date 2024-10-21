import PlannedLineGraph from "@/app/components/PlannedLineGraph";
import PlannedBarGraph from "@/app/components/PlannedBarGraph";
import TasksTable from "@/app/components/TasksTable";
import { fetchGraphData } from "@/app/utils/api";

export default async function Page() {
  const graphData = await fetchGraphData('12-06-2024');
  console.log(graphData);
  return (
    <>
      <TasksTable data={graphData} type="planned" /> 
      <PlannedLineGraph />
      <PlannedBarGraph />
    </>
  );
}