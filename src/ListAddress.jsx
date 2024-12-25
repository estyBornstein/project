//קומפוננטה להצגת רשימת הכתובות האפשריות מהשרת
function ListAddress({ savePlace,address }) { 
    return (
        <>
            <ul>
                {address.map(item => (
                    //במקרה שנבחרת כתובת שולח לפונקצית save Place
                    //שמעדכנת בuse state את הlat ,lon,lon and so on
                    <li key={item.id} onClick={()=>savePlace(item)}>{item.display_name}</li>
                ))}
            </ul>
        </>
    );
}

export default ListAddress;
