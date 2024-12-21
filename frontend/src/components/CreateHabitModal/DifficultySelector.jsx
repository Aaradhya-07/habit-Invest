function DifficultySelector() {
  const difficulties = [
    { id: 'trivial', label: 'Trivial', stars: 1 },
    { id: 'easy', label: 'Easy', stars: 2 },
    { id: 'medium', label: 'Medium', stars: 3 },
    { id: 'hard', label: 'Hard', stars: 4 }
  ]

  return (
    <div className="difficulty-selector">
      {difficulties.map(({ id, label, stars }) => (
        <button key={id} className={`difficulty-button ${id === 'easy' ? 'active' : ''}`}>
          <div className="stars">
            {'★'.repeat(stars)}
          </div>
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

export default DifficultySelector