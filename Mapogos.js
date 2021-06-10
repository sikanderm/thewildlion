import React from "react";
import Test2 from './Test2'
import "../Test.css";
export default class Mapogos extends React.Component {
  constructor(props, {match}){
    super(props, {match});
    this.state = {
      animal: [],
      info: [],
      pride: [],
      stats: []
         /* items: [
          {"animal":[{"prideName":"Majingalane","name":"GM","pic":".\/testImg\/imgd.jpg"},{"prideName":"Majingalane","name":"HS","pic":".\/testImg\/imgb.jpg"},{"prideName":"Majingalane","name":"SN","pic":".\/testImg\/imgc.jpg"},{"prideName":"Majingalane","name":"DM","pic":".\/testImg\/imga.jpg"}],"info":[{"prideName":"Majingalane","info":"Lorem Ipsum has been the industry's standard dummy text ever since\r\n the 1500s, when an unknown printer took a galley of type and\r\n scrambled it to make a type specimen book. It has survived not\r\n only five centuries, but also the leap into electronic\r\n typesetting, remaining essentially unchanged. It was popularised\r\n in the 1960s with the release of Letraset sheets containing Lorem\r\n Ipsum passages, and more recently with desktop publishing software\r\n like Aldus PageMaker including versions of Lorem Ipsum."}],"pride":[{"prideName":"Majingalane","title":"The Majingalane Lions","map":".\/testImg\/map.jpg"}],"stats":[{"adults":"4","subadults":"0","territory":"Northern Sabi Sands ","parentPride":"unknown","parentCoalition":"unknown","prideName":"Majingalane"}]}
          ]*/
          }
  }
  
       componentDidMount(){
        fetch('http://localhost/a.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ID: this.props.match.params.id })})
        .then(res => res.json())
        .then((data) => {
        this.setState({animal: data.animal});
        this.setState({pride: data.pride});
        this.setState({info: data.info});
        this.setState({stats: data.stats});
        console.log(this.state);
        
        })
        
      }
  
  
    render(){
    return (  
      <div>
        
        <div className="test-sec">
          <div className="test-title">{this.state.pride.map((pride) => (
          <p>{pride.title}</p>
          ))}</div>
          <div className="ban-sec">
          <div className="x">
         {/**/}{this.state.animal.map((animal, key)=> 
            <Test2 animal={animal} key={key}/>
         )}
          </div>
          </div>
          <div className="test-info">
            <div className="test-info1">{this.state.info.map((info) => (
            <p>{info.info}</p>
          ))}
            </div>
            <div className="test-info2">
              <div className="stats">
                <h6>Current adults:</h6>
                {this.state.stats.map((stats) => (
                <h6>&nbsp; &nbsp; {stats.adults}</h6>))}
              </div>
              <div className="stats">
                <h6>Current sub-adults:</h6>
                {this.state.stats.map((stats) => (
                <h6>&nbsp; &nbsp; {stats.subadults}</h6>))}
              </div>
              <div className="stats">
                <h6>Current Territory:</h6>
                {this.state.stats.map((stats) => (
                <h6>&nbsp; &nbsp; {stats.territory}</h6>))}
              </div>
              <div className="stats">
                <h6>Related prides:</h6>
                {this.state.stats.map((stats) => (
                <h6>&nbsp; &nbsp; {stats.parentPride}</h6>))}
              </div>
              
            </div>
          </div>
        </div>
        <br></br>
        <div className="map-sec">
    {/* */} {this.state.pride.map((pride) => (
            <img alt="pic" src={pride.map} />
          ))}
        </div>
      </div>
    );
  }

}