import React, { useState } from "react";

const AdminDashboard = () => {
    const [students, setStudents] = useState([]); // Corrected variable name
    const [selectedBus, setSelectedBus] = useState(''); // Corrected variable name

    const assignStudentToBus = (studentId) => {
        fetch(`/api/students/${studentId}/assign`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ busId: selectedBus }),
        });
    };

    return (
        <div>
            <h2>Assign Student to Buses</h2>
            <select onChange={(e) => setSelectedBus(e.target.value)}>
                <option value=''>Select a bus</option>
                <option value='1'>Bus 1</option>
                <option value='2'>Bus 2</option>
            </select>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name}
                        <button onClick={() => assignStudentToBus(student.id)}>Assign</button>
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default AdminDashboard;