import React, { Component } from 'react'
import './Converter.css';

export default class Converter extends Component {
    
    constructor(props){
        super(props);

        this.state={
            firstCoin_valor:"",
            secondCoin_valor:0,
        }
        this.converter = this.converter.bind(this)
    }

    converter(){
        let from_to  = `${this.props.firstCoin}_${this.props.secondCoin}`;
        let url  = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=key`;
        

        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let price = json[from_to];
            let secondCoin_valor = (parseFloat(this.state.firstCoin_valor * price).toFixed(2)) 
            this.setState({secondCoin_valor});
        })
    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.firstCoin} para {this.props.secondCoin}</h2>
                <input type ="text" onChange={(event)=>{this.setState({firstCoin_valor:event.target.value })}}></input>
                <input type ="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.secondCoin_valor}</h2>
            </div>
        )
    }
}
