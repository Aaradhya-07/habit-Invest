function HabitList({ habits }) {
  return (
    <div className="habits-list">
      {habits.map((habit, index) => (
        <div key={index} className="habit-card">
          <button className="add-button">+</button>
          <div className="habit-content">
            <h3>{habit.title}</h3>
            <p>{habit.description}</p>
          </div>
          <button className="remove-button">−</button>
        </div>
      ))}
    </div>
  )
}

export default HabitList