const EmployeeDropdown = ({
    employees,
    value,
    onChange,
    loading
}) => {

    return (

        <div className="space-y-2">

            <label className="block text-sm font-medium text-gray-700">
                Assign To
            </label>

            <select
                value={value}
                onChange={onChange}
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >

                <option value="">
                    {loading
                        ? "Loading employees..."
                        : "Select Employee"}
                </option>

                {employees.map((employee) => (

                    <option
                        key={employee._id}
                        value={employee._id}
                    >
                        {employee.username}
                    </option>

                ))}

            </select>

        </div>

    );

};

export default EmployeeDropdown;