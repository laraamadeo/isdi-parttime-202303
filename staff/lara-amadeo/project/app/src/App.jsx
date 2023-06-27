import TextField from './library/Text-field'
import Button from './library/Button'
import Chip from './library/Chip'
import DataItem from './library/DataItem'
import './style.css'
import "./App.css"

function App() {

  return (
    <>
      <div className='container'>

        <TextField label={"Label text"} description={"Description text"} placeholder={"placeholder pedorro"} />
        <Button category={"critical"} size={"small"} icon={false} label={"Button label"} />
        <Chip label={"label"} state={"success"} />
        <DataItem label={"Label"} description={"Lorem ipsum dolor"} />
      </div>
    </>
  )
}

export default App
