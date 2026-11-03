
function getGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 50) return "C";
  return "F";
}

function StudentRow({ student, isTop = false }) {
  return (
    <div className={isTop ? "student top-student" : "student"}>
      <span>{student.name}</span>
      <span>{student.track}</span>
      <span>{student.score}</span>
      <span className="grade">
        {getGrade(student.score)}
        {isTop && " 🏆"}
      </span>
    </div>
  );
}

export default function ResultsBoard({ students = [] }) {
  const sortedStudents = [...students].sort((a, b) => {
    if (a.track !== b.track) {
      return a.track === "Frontend" ? -1 : 1;
    }
    return b.score - a.score;
  });

  const topStudent = students.length
    ? students.reduce((top, student) =>
        student.score > top.score ? student : top
      )
    : null;

  if (students.length === 0) {
    return <h2>No students</h2>;
  }

  return (
    <div>
      <h1>Student Results Board</h1>

      <div className="student header">
        <span>Name</span>
        <span>Track</span>
        <span>Score</span>
        <span>Grade</span>
      </div>

      {sortedStudents.map((student) => (
        <StudentRow
          key={student.id}
          student={student}
          isTop={student.id === topStudent.id}
        />
      ))}
    </div>
  );
}
