import styles from "@/app/styles/Planner.module.css"
const Table = () => {
    return (
        <table className={styles.taskTable}>
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
    )
}

export default Table;