import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
  
class Capitals extends Component{
    state={
        capital:countryAndCapitalsList[0].id,

    }
    handleOnChange=(event)=>{
        this.setState({capital:event.target.value})
    }

    render(){
        const {capital}=this.state
        const updateCapital=countryAndCapitalsList.find(each=>each.id===capital)
        
        return(
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Countries And Capitals</h1>
                    <div className="question-container">
                    <select className="capital-select" defaultValue="" onChange={this.handleOnChange}>
                    {countryAndCapitalsList.map(eachItem=>
                        <option key={eachItem.id} value={eachItem.id} className="option">{eachItem.capitalDisplayText}</option>
                    )}
                    </select>
                    <p className="question">is capital of which country?</p>
                    </div>
                    <h2>{updateCapital && updateCapital.country}</h2>
                </div>
            </div>
        )
    }
}
 
  export default Capitals