import { Button, Input } from 'antd'
import React from 'react'
import Header from './Header'
import read from'./img/read.png'
import practice from'./img/practice.png'
import learn  from'./img/learn.png'
import HUNDREADDAYSOFCODE  from'./img/100-Days-of-Code.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Home.css'
import './Style.css'
import Footer from './Footer'

function Home() {
  return (
    <>
    <Header />
    <div className='container ' >
      <h1 className='mt-5 row justify-content-center' >Hello, What Do You Want To Learn?</h1>
      <div className='mt-4 row justify-content-center'>
      <Input className='row row-center col-sm-4' placeholder='Learn Python, Java, C++'></Input><Button className=' btn btn-success col-sm-1 '>Search</Button>
      <div className='mt-2 mb-3 justify-content-center d-flex'>
      <p className='row justify-content-center siz alert alert-secondary col-sm-1'>DSA-Live Classes</p>
      <p className='row justify-content-center siz alert alert-secondary col-sm-2'>System Design-Live Classes</p>
      <p className='row justify-content-center siz alert alert-secondary col-sm-2'>Complete Data Science Program</p>
      </div>
      </div>

      <div className='for-you-div container'>
        <h3>For You</h3>
        <div className="d-flex flex-wrap ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card className='mt-4' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={read}
          alt="read"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parse Nested User-Defined
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If we want to get the result of the function in java, convert(a,process(covertToInt(b),convertToInt(...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Card className='mt-4 ' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={practice}
          alt="read"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parse Nested User-Defined
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If we want to get the result of the function in java, convert(a,process(covertToInt(b),convertToInt(...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Card className='mt-4' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={learn}
          alt="read"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Parse Nested User-Defined
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If we want to get the result of the function in java, convert(a,process(covertToInt(b),convertToInt(...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    <section>
    <div className='container mt-5'>
      <div className='card'>
        <div className='row '>
          <div className='col-md-4'>
            <img src={HUNDREADDAYSOFCODE} alt='' className='img-fluid' ></img>
          </div>
          <div className='col-md'>
          <div className="gblog col">GBlog</div>
            <h2 className='card-title mt-2'>100 Days of Code - A Complete Guide For Beginners and Experienced</h2>
            Do you want to become a successful software developer and dreaming about getting into the big tech companies?Are you someone who is already working as a developer but look...
          </div>
        </div>
      </div>
    </div>
    </section>

    <h4 className='mt-4 '>Data Structures</h4>
    <div className="mt-3 d-flex flex-wrap ">
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Array</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Linked List</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Stack</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Queue</h3>
            </div>
        </div>
    </div>
    <h4 className='mt-4 '>Algorithms</h4>
    <div className="mt-3 d-flex flex-wrap ">
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Analysis of Algo</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Searching Algo</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Sorting Algo</h3>
            </div>
        </div>
        <div className="card d-flex flex-column mx-4">
            <div className="card_sty bg-secondary text-light text-center justify-content-center">
                <h3 className='mt-1'>Graph Algo</h3>
            </div>
        </div>
    </div>
    <hr />
    <Footer />
    </div>
    </>
  )
}

export default Home