"use client";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
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
            {/* <button className={styles.graphButton}>Planned Tasks Graphs</button>
            <button className={styles.graphButton}>Completed Tasks Graphs</button>
            <button className={`${styles.graphButton} ${styles.selected}`}>All Tasks Graphs</button> */}
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
          {/* Conditionally render graphs here LineGraph BarGraph*/}
          <table>
            <tbody>
              <tr>
                <th>Cut off date</th>
                <td>07-Jul</td>
                <td>14-Jul</td>
                <td>21-Jul</td>
                <td>28-Jul</td>
                <td>04-Aug</td>
                <td>11-Aug</td>
                <td>18-Aug</td>
                <td>25-Aug</td>
                <td>01-Sep</td>
                <td>08-Sep</td>
                <td>15-Sep</td>
                <td>22-Sep</td>
              </tr>
              <tr>
                <th>Planned No. of Tasks</th>
                <td>20</td>
                <td>35</td>
                <td>34</td>
                <td>40</td>
                <td>45</td>
                <td>60</td>
                <td>67</td>
                <td>70</td>
                <td>60</td>
                <td>50</td>
                <td>45</td>
                <td>40</td>
              </tr>
              <tr>
                <th>Completed No. of Tasks</th>
                <td>14</td>
                <td>25</td>
                <td>16</td>
                <td>35</td>
                <td>40</td>
                <td>55</td>
                <td>60</td>
                <td>50</td>
                <td>50</td>
                <td>30</td>
                <td>35</td>
                <td>35</td>
              </tr>
            </tbody>
          </table>
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
            {/* <AllLineGraph></AllLineGraph>
            <AllBarGraph></AllBarGraph> */}

          </>

        </section>
      </main>
    </div>

  );
}