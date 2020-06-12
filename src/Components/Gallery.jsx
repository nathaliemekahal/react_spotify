import React, { Component } from 'react'
// import Topnav from './Topnav'
import {Row,Col,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracks from './Tracks'
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";


 class Gallery extends Component {
    
     constructor(props){ super(props);
        this.state={
            eminem:[],
            loading: true,
            selectedId:'',
            name:'',
            redirect: null
        }
     }
     showTracks=(id)=>{
        this.setState({selectedId:id, redirect: "/someRoute" }
     , ()=>{
        fetch("https://deezerdevs-deezer.p.rapidapi.com/album/"+this.state.selectedId, {
        	"method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "dc428aeb3dmshb072b11435b2a9fp126ba5jsnfb0d8dd5e710"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
            
            
     }
    )
     }
        
       
    
     
     componentDidMount(){
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "dc428aeb3dmshb072b11435b2a9fp126ba5jsnfb0d8dd5e710"
            }
        })
        .then(response => response.json())
        .then((responseObject)=>
            this.setState({eminem:responseObject.data,name:responseObject.data[0].artist.name}))
            
            
        .catch(err => {
            console.log(err);
           
        });
     }
    render() {
       
        return (
            <>
            <h1 className='artistname'>{this.state.name}</h1>
            <Row className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mb-4" style={{paddingLeft:'9rem'}}>
            
             {this.state.eminem.map((song)=>
             <Col xs={3} md={4}>
              <Image className='mb-2'src={song.album.cover_medium} onClick={()=>this.showTracks(song.album.id)}>
            </Image>
             </Col>
             )}
                
            </Row>
            </>
           
        )
    }
}

export default Gallery
