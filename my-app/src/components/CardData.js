import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
function CardData(props) {
    let [numOfLikes, setNumOfLikes] = useState(0);
    const incrementNumOfLikes = () => {
        setNumOfLikes(numOfLikes+1)
        props.incrementtotal();
    } 

    return (
        <>
         
             
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
            <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    <h5>{props.id}</h5>
                    <p>Num of Likes: {numOfLikes}</p>

                    </Card.Text>
                    <Button variant="primary" onClick={incrementNumOfLikes}>like IT!</Button>
                </Card.Body>
            </Card>
            </Col>
            
      </>
    )
}

export default CardData;