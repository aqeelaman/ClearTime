"use client";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import TasksTable from "@/app/components/TasksTable";
import AllLineGraph from "@/app/components/AllLineGraph";
import AllBarGraph from "@/app/components/AllBarGraph"
import CompletedLineGraph from "@/app/components/CompletedLineGraph";
import CompletedBarGraph from "@/app/components/CompletedBarGraph";
import PlannedLineGraph from "@/app/components/PlannedLineGraph";
import PlannedBarGraph from "@/app/components/PlannedBarGraph";

import styles from "@/app/styles/Planner.module.css";

import { useState } from 'react';

export default function Page() {

  const [activeGraph, setActiveGraph] = useState('allTasks'); // Default graph is 'allTasks'

  // Function to change the active graph
  const handleGraphChange = (graph: any) => {
    setActiveGraph(graph);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar></Sidebar>
      <main className="flex flex-col items-start pl-5 pr-6 w-full">
        <Navbar></Navbar>
        <section className={styles.plannerSection}>
          <div className={styles.btnContainer}>
            <button
              onClick={() => handleGraphChange('plannedTasks')}
              className={`${styles.graphButton} ${activeGraph === 'plannedTasks' ? styles.selected : ''}`}
            >
              Planned Tasks Graphs
            </button>
            <button
              onClick={() => handleGraphChange('completedTasks')}
              className={`${styles.graphButton} ${activeGraph === 'completedTasks' ? styles.selected : ''}`}
            >
              Completed Tasks Graphs
            </button>
            <button
              onClick={() => handleGraphChange('allTasks')}
              className={`${styles.graphButton} ${activeGraph === 'allTasks' ? styles.selected : ''}`}
            >
              All Tasks Graphs
            </button>
          </div>
          <TasksTable/>
        
          <>
            {activeGraph === 'plannedTasks' && (
              <>
                <PlannedLineGraph/>
                <PlannedBarGraph/>
              </>
            )}
            {activeGraph === 'completedTasks' && (
              <>
                <CompletedLineGraph/>
                <CompletedBarGraph/>
              </>
            )}
            {activeGraph === 'allTasks' && (
              <>
                {/* Render All Tasks graph */}
                <AllLineGraph/>
                <AllBarGraph/>
              </>
            )}
          </>

        </section>
      </main>
    </div>

  );
}