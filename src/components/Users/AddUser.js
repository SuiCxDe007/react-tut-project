import Card from "../UI/Card/Card";
import styles from '../Users/AddUser.module.css';
import Button from "../UI/Button/Button";
import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState({});

    const handleOnSubmit = event => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredUserName.trim().length === 0  || enteredAge.trim().length ===0 ) {
            setError({title:"Field Error" , message:"Fields cannot be Empty"})
            setShowError(true);
            return;
        }
        if(+enteredAge < 1) {
            setError({title:"Invalid Age" , message:"Age must be a valid value"})
            setShowError(true);
            return;
        }
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        props.onAddUser(enteredUserName,enteredAge)
    }

    const handleErrorClick = () => {
        setShowError(false)
    }

    return (
     <Wrapper>
         {showError && <ErrorModal title={error.title} message={error.message} onClick={handleErrorClick}/>}
        <Card className={styles.input}>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="username"> UserName</label>
                <input
                    id="username"
                    type="text"
                    ref={nameInputRef}
                />
                <label htmlFor="age"> Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
     </Wrapper>
    )
};

export default AddUser;