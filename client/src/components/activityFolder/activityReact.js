import React, {Component} from 'react'
import Axios from "axios"


export default class ActivityReact extends Component {

    state = {
        activities: []
    }

    getActivitiesFromServer = () => {
        Axios.get("/activities") //get prefix
            .then(results => { //create promise
                this.setState({activities: results.data.allActivities})
                console.log(results)
                console.table(results.data.allActivities)
            }) 
            .catch(error => {
                console.log(error)
            })       
    }


    componentDidMount() {
        this.getActivitiesFromServer();
    }

    // getActivitiesFromServer() {
    //     getActivitiesFromServer.then(allActivities => {

    //     })
    // }

    changeTheWorld = (newTitle) => {
        this.setState({ title: newTitle })
    }
    render() {
        return (
            <div className="App">
                Hellooooooo
                {/* <User /> */}
                {/* <User doWhatever={this.changeTheWorld.bind(this, "newWorld")} title={this.state.title}/> */}
            </div>
        )
    }
}