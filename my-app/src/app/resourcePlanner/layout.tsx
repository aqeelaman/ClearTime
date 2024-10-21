"use client";

import { usePathname } from 'next/navigation'; 
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import styles from "@/app/styles/Planner.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname(); 

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col items-start pl-5 pr-6 w-full">
        <Navbar />
        <section className={styles.plannerSection}>
          <div className={styles.btnContainer}>
            <Link href="/resourcePlanner/planned">
              <button
                className={`${styles.graphButton} ${currentPath === '/resourcePlanner/planned' ? styles.selected : ''}`}
              >
                Planned Tasks Graphs
              </button>
            </Link>
            <Link href="/resourcePlanner/completed">
              <button
                className={`${styles.graphButton} ${currentPath === '/resourcePlanner/completed' ? styles.selected : ''}`}
              >
                Completed Tasks Graphs
              </button>
            </Link>
            <Link href="/resourcePlanner">
              <button
                className={`${styles.graphButton} ${currentPath === '/resourcePlanner' ? styles.selected : ''}`}
              >
                All Tasks Graphs
              </button>
            </Link>
          </div>

          {children}{/* Render graph based on the route */}

        </section>
      </main>
    </div>
  );
}
