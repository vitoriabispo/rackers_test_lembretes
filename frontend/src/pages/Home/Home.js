import { NewReminder } from "../../components/NewReminder/NewReminder"
import { ListReminders } from "../../components/ListReminders/ListReminders"

import './Home.css';

export function Home() {
  return(
    <div className="container">
      <body>
        <div className="remComponent">
          <NewReminder/>
        </div>
        <div className="remComponent">
          <ListReminders/>
        </div>
      </body>
    </div>
  )
  
}