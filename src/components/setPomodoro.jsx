import { useContext, useState } from "react"

export default function setPomodoro() {
    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const { updateExecute } = useContext(SettingsContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        switch(name){
            case 'work':
                setNewTimer({
                        ...newTimer,
                        work: parseInt(value)
                    })
            case 'shortBreak':
                setNewTimer({
                    ...newTimer, 
                    short: parseInt(value)
                })
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
            <div className="input-wrapper">
                <input type="number" name="work" className="input" onChange={handleChange} value={newTimer.work}/>
                <input type="number" name="shortBreak" className="input" onChange={handleChange} value={newTimer.short}/>
                <input type="number" name="longBreak" className="input" onChange={handleChange} value={newTimer.long}/>
            </div>
            <button type="submit">Set Timer</button>
        </form>
      
    </div>
  )
}
