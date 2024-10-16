import styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}></div>
                <p>ClearTime®</p>
            </div>
            <div className={styles.sidebarButton}>Resource Planner</div>
            <div className={styles.bottomContainer}>
                <div className={styles.userBox}>
                    <div className={styles.userImage}></div>
                    <div className={styles.plannerName}>
                        <p>Resource Planner</p>
                        <h1>Aditya Arun</h1>
                    </div>
                    
                </div>
                <div className={styles.logoutButton}>Logout</div>
            </div>
        </div>
    )
}

export default Sidebar