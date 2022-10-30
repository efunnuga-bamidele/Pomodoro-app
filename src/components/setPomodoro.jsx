

export default function setPomodoro() {
  return (
    <div className="form-container">
        <form>
            <div className="input-wrapper">
                <input type="number" name="work" className="input" />
                <input type="number" name="shortBreak" className="input" />
                <input type="number" name="longBreak" className="input" />
            </div>
            <button type="submit">Set Timer</button>
        </form>
      
    </div>
  )
}
