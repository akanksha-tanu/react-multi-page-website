import React from "react";
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import "./css/Home3.css";

const Home3=()=>{

    const cardData=[
        {
            img:"https://images.skyscrapercenter.com/uploads/HongKong,-2021_(cc-by-sa)paul-tsang-unsplash210114-070155.jpg",
            title:"title1",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            img:"https://images.skyscrapercenter.com/uploads/HongKong,-2021_(cc-by-sa)paul-tsang-unsplash210114-070155.jpg",
            title:"title1",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            img:"https://images.skyscrapercenter.com/uploads/HongKong,-2021_(cc-by-sa)paul-tsang-unsplash210114-070155.jpg",
            title:"title1",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            img:"https://images.skyscrapercenter.com/uploads/HongKong,-2021_(cc-by-sa)paul-tsang-unsplash210114-070155.jpg",
            title:"title1",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ];
    return(
        <div className="boxx">
            <div className="col-12">
                <h1>Why choose us ?
            </h1>
            </div>
            <div className="mycards">
            {
            cardData.map((ele) => (
                
                <Card className="col-12 col-md-6 col-lg-3">
                    <CardImg top width="100%" src={ele.img} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">{ele.title}</CardTitle>
                    <CardText>{ele.text}</CardText>
                    </CardBody>
                </Card>
                
            ))
            }
            </div>
        </div>
    )
}

export default Home3;

// {
//     cardData.map((ele) => (
//         <div className="card">
//         <img className="card-img-top" src="..." alt="Card image cap"/>
//         <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>
//     ))
//     }