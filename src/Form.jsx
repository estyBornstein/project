import { useState } from "react";  
import ListAddress from "./ListAddress"; 
import "./Form.css";  
import MyMap from "./MyMap";  

function Form() {
  const [address, setAddress] = useState([]);  // state לאחסון כתובות
  const [lat, setLat] = useState(0);  // state לקו רוחב
  const [lon, setLon] = useState(0);  // state לקו אורך
  const [place, setPlace] = useState("");  // state לכתובת שהמשתמש מחפש

  async function SuggestingAddresses(e) {  // פונקציה להצעות כתובת
    try {
      let { value } = e.target;  // מקבל את ערך הקלט
      setPlace(value);  // מעדכן את ה-state של הכתובת
      if (value.trim() !== "") {  // אם הכתובת לא ריקה
        let data = await fetch(  // מבצע קריאה ל-API
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`
        );
        data = await data.json();  // מקבל את התשובה ב-JSON
        setAddress(data);  // מעדכן את ה-state של הכתובות
      } else {
        setAddress([]);  // מנקה את הכתובות אם אין קלט
      }
    } catch (err) {
      console.log("אין שום יאוש" + err);  // טיפול בשגיאות
    }
  }

  function savePlace(item) {  // פונקציה לעדכון מיקום
    setLat(parseFloat(item.lat));  // עדכון קו רוחב
    setLon(parseFloat(item.lon));  // עדכון קו אורך
    setPlace(item.display_name);  // עדכון הכתובת
  }

  function submit(e) {  // פונקציה לשליחת הטופס
    e.preventDefault();  // מונע רענון דף
    alert("your form are submit successfully");  // הודעת הצלחה
  }

  return (
    <form onSubmit={submit}>  
      <label htmlFor="">user name:</label>
      <input type="text" />  
      <label htmlFor="">address to search:</label>
      <input type="text" value={place} onChange={SuggestingAddresses} /> 
      <ListAddress savePlace={savePlace} address={address} />  
      <MyMap lat={lat} lon={lon} />  
      <label htmlFor="">user phone:</label>
      <input type="text" /> 
      <label htmlFor="">user email:</label>
      <input type="email" /> 
      <label htmlFor="">Is an internet connection required?:</label>
      <input type="checkbox" />  
      <label htmlFor="">Is a kitchen required?</label>
      <input type="checkbox" /> 
      <label htmlFor="">Is a coffee machine required?</label>
      <input type="checkbox" />  
      <label htmlFor="">num of rooms:</label>
      <input type="number" />  
      <label htmlFor="">distance:</label>
      <input type="number" />  
      <div style={{ display: "none" }}>
        <label htmlFor="">status:</label>
        <input type="number" value="search" />  
      </div>
      <input type="submit" /> 
    </form>
  );
}

export default Form;  // מייצא את הקומפוננטה
