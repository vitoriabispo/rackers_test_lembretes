import { useState, useEffect } from 'react';

import  api  from "../../service/api"
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformData from "../../utils/transformData"

import { NewReminder } from "../../components/NewReminder/NewReminder"
import { ListReminders } from "../../components/ListReminders/ListReminders"

import './Home.css';

export function Home() {
  const [ reminders, setReminders ] = useState([]);

  useEffect(() => {
    api.get('/').then(res => {
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformData(groupedArray)));
    }).catch(err => {
      alert('Não está sendo possível exibir os lembretes');
    });
  }, []);
  

  return(
    <div className="container">
      <div className="content">
        <div className="remComponent">
          <NewReminder reminders={reminders} setReminders={setReminders}/>
        </div>
        <div className="remComponent">
          <ListReminders reminders={reminders} setReminders={setReminders} />
        </div>
      </div>
    </div>
  )
}