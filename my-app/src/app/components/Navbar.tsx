import styles from "../styles/Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.projectContainer}>
                <label htmlFor="projectID">Enter Project ID</label>
                <select id="projectID" name="projectID">
                    <option value={"UA-AUH-INFRA-24-1000"}>UA-AUH-INFRA-24-1000</option>

                </select>
            </div>
            <div className={styles.iconsContainer}>
                <div className={styles.iconsBox}></div>
                <div className={styles.iconsBox}></div>
            </div>
        </div>
    )
}

export default Navbar