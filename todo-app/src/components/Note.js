import './Note.css';

function Note(props) {
    const deleteTodo = event => {
        props.onDeleteTodo(props.id);
    }

    return <div className='note-container'>
        <p>{props.todo}</p>
        <button onClick={deleteTodo}>X</button>
    </div>
}
export default Note;