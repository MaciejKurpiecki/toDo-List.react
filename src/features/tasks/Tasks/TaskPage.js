
import Section from '../../../common/Section';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {

    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id));

    return (
        <Container>
            <header>
                <h1>Szczegóły zadania</h1>
            </header>
            <Section title={task ? task.content : "Nie znalezioni zadania"}
                body={task ? <><strong>Ukończono: </strong>{task.done ? "Tak" : "Nie"} </> : ""} />
        </Container>
    );
}

export default TaskPage;
