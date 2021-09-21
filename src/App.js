import Column from "./Column";

const statuses = ['Todo', 'In Progress', 'Review']
const tasks = [
    {
        id: 1,
        name: 'Learn JS',
        description: 'Some descr about learn JS',
        status: 'Todo',
        priority: 3,
    },
    {
        id: 2,
        name: 'Learn React',
        description: 'Some descr about learn React',
        status: 'In Progress',
        priority: 3,
    },
]

function App() {


    return (
        <div>
            {statuses.map(el => <div key={el}><Column status={el} tasks={tasks}/></div>)}

        </div>
    );
}

export default App











