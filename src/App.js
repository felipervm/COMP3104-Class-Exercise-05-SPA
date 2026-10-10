import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = (event) => {
    event.preventDefault();
    if (!name.trim() || !age.trim() || !major.trim()) return;

    setStudents([...students, { name: name.trim(), age: age.trim(), major: major.trim() }]);
    setName('');
    setAge('');
    setMajor('');
  };

  return (
    <main className="page-shell">
      <section className="card">
        <h1>Student Information System</h1>
        <p className="developer-line">
          Developed By: <strong>101581203</strong> || <strong>Felipe da Rocha Vieira Mattos</strong> || DevOps
        </p>

        <form onSubmit={addStudent} className="student-form">
          <label>
            <span>Name:</span>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            <span>Age:</span>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </label>

          <label>
            <span>Major:</span>
            <input value={major} onChange={(e) => setMajor(e.target.value)} />
          </label>

          <button type="submit">Add Student</button>
        </form>

        <h2>Student List</h2>
        {students.length === 0 ? (
          <p className="empty-state">No students added yet</p>
        ) : (
          <ul className="student-list">
            {students.map((student, index) => (
              <li key={`${student.name}-${index}`}>
                <strong>{student.name}</strong> — Age {student.age} — {student.major}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
