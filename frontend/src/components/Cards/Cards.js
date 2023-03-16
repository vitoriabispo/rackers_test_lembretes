import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import  api  from "../../service/api"

import './Cards.css';

export function Cards() {

  const [ reminders, setReminders ] = useState([]);

  function onDelete(e, id){
    e.preventDefault();
    console.log("antes");
    try { 
      api.delete(`/${id}`);
      console.log("try");
    } catch (err) {
      alert("Não foi possível excluir o lembrete");
    }
  }
  
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

  useEffect(() => {
    api.get('/').then(res => {
      setReminders(res.data);
    }).catch(err => {
      alert('Não está sendo possível exibir os lembretes');
    });
  }, [onDelete]);

  return (
    <div className="cardContainer">
      {reminders.map(reminder => (
        <div> 
          <div className="reminderDate">
            <h3>{formatDate(reminder.date)}</h3>
          </div>
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
        </div>       
      ))}
    </div>
  )
};