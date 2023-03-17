import { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import api from "../../service/api"
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"
import transformData from "../../utils/transformData"


import './Cards.css';

export function Cards({reminders, setReminders}) {

  function formatDate (date) {
    var data = new Date(date);

    var day = data.getDate();
    day = day < 10 ? '0' + day : day; 

    var month = data.getMonth()+1;
    month = month < 10 ? '0' + month : month; 
    
    var year = data.getFullYear();
    var newDate = new Date();
    newDate = day+"/"+month+"/"+year;
    return newDate;
  }

  async function onDelete(e, id){
    e.preventDefault();
    try {
      await api.delete(`/${id}`);
      const res = await api.get('/');
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformData(groupedArray)));
    } catch {
      alert("Não foi possível excluir o lembrete");
    }
  }

  useEffect(() => {
  }, [reminders])
  return (
    <div className="cardContainer">
      {reminders.map(data => (
        <div key={data.date}> 
          <div className="reminderDate">
            <h3>{formatDate(data.date)}</h3>
          </div>
          {data.reminders.map(reminder => (
            <div 
              className="singleCard"
              id={reminder.id}
              key={reminder.id}
            >
              <p>{reminder.name}</p>
              <button 
                id="excluir" 
                type="submit" 
                onClick={(e) => {onDelete(e, reminder.id)}}
              >
                <FiPlus />
              </button>
            </div>
          ))}
        </div>    
      ))}
    </div>
  )
};