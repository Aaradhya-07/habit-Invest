function ResetCounter() {
  const periods = ['Daily', 'Weekly', 'Monthly']

  return (
    <div className="reset-counter">
      {periods.map(period => (
        <button 
          key={period} 
          className={`period-button ${period === 'Daily' ? 'active' : ''}`}
        >
          {period}
        </button>
      ))}
    </div>
  )
}

export default ResetCounter