import ManagerTaskCard from "./TaskCard";

const ManagerTaskList = ({
    tasks,
    onEdit,
    onDelete
}) => {

    if (!tasks.length) {

        return (
            <div className="bg-white rounded-xl shadow p-8 text-center">

                <h2 className="text-xl font-semibold text-gray-700">
                    No Tasks Found
                </h2>

                <p className="text-gray-500 mt-2">
                    You haven't assigned any tasks yet.
                </p>

            </div>
        );

    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {tasks.map((task) => (

                <ManagerTaskCard
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />

            ))}

        </div>

    );

};

export default ManagerTaskList;