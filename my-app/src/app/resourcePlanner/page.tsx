import AllLineGraph from "@/app/components/AllLineGraph";
import AllBarGraph from "@/app/components/AllBarGraph";
import TasksTable from "@/app/components/TasksTable";
import { fetchGraphData } from "@/app/utils/api";

export default async function Page() {
  const graphData = await fetchGraphData('12-06-2024');
  console.log(graphData);
  return (
    <>
      <TasksTable data={graphData} type="allTasks" /> 
      <AllLineGraph />
      <AllBarGraph />
    </>
  );
}
