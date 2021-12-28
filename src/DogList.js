import React from 'react';
import Options from './Options.js';
import { dogs } from './data.js';

class DogList extends React.Component {

    state = {
        shownDogs: dogs
    }

    handleOnChange = (e) => {
        let newDogs
        if(e.target.value === "All") {
            newDogs = dogs 
        } else {
            newDogs = dogs.filter((dog) => {return dog.breed === e.target.value})
        }
        this.setState({ shownDogs: newDogs})
    }

    render() {
        return(
            <>
            <select onChange={this.handleOnChange}>
                <Options value="breed" data={dogs} />
            </select>
            {this.state.shownDogs.map((dog) => <li>{dog.name} - {dog.breed} - {dog.knownFor}</li>)}
            </>
        )
    }
}

export default DogList