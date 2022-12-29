import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';


import data from './data.json';
import CardData from './CardData';
function Parent() {
  let [total, settotal] = useState(0);

    const incrementtotal = () => {
      settotal(total+1)
    }
  return (
    <>
     <h2>Total Num of Likes : {total}</h2>
      <Row>
      
                 { data.map((element) => (
                <CardData
                id = {element._id}
                title = {element.title}
                img = {element.image_url}
                incrementtotal = {incrementtotal}  
                   
                 />
            ))}
                
               
       
        </Row>
   
    </>
  );
}

export default Parent;