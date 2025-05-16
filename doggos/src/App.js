import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const fetchDogs = (breed) => (
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res)
        .catch(err => console.error('nooononooo'))
)


export default class App extends React.Component {
    constructor() {
        super()
        console.log('constructor ran')
        this.state = {
            dogs: [],
            breed: 'husky'
        }
    }

    componentDidMount() {
        console.log('component did mount')
        fetchDogs(this.state.breed)
            .then(res => {
                this.setState({ dogs: res.data.message })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component updated')
        console.log(prevState)
        console.log(this.state)
        if (prevState.dogs !== this.state.dogs) {
            console.log('dogs have changed')
            if (this.state.breed === 'chihuahua') {
                console.log('switching to husky cause u suck')
                fetchDogs('husky').then(res => {
                    this.setState({ dogs: res.data.message, breed: 'husky' })
                })
            }
        }
    }

    serachDogs = dogName => {
        console.log('search dogs')
        fetchDogs(dogName).then(res => {
            this.setState({ dogs: res.data.message, breed: dogName })
        })
    }

    render() {
        console.log('render ran')
        return (
            <div>
                <h1>hello</h1>
                <SearchForm searchDogs={this.serachDogs} />
                {this.state.dogs.map((dog, index) => (
                    <img width='200' src={dog} key={index} alt={dog} />
                    ))}
            </div>
        )
    }
}