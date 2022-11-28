import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UsersList = props => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => <li key={Math.random()}>
                    {user.name} ({user.age} years old)
                </li>)}
            </ul>
        </Card>)

}

export default UsersList