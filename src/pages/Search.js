import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Table from "../components/Table"
import Button from "../components/Button"
import SearchForm from "../components/SearchForm"

//I want the json object available as a prop
let randList;
class Search extends Component {
    state = {
        search: "",
        result: [],
        alphebetized: false,
        names: ""
    };


    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getRandomList()
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            });
    }



    //Sorts alphabetically by last name
    sortAlphabet = () => {
        //This takes randList and orders it alphabetically
        randList.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);

        //Then by setting alphabetized to true this repopulates the table
        this.setState({ alphebetized: true });
    }

    //When only USA is clicked, a new API call should be run
    oneCountry = (nat) => {
        API.getRandomNational(nat)
            .then(res => {
                randList = res.data.results;
                this.setState({ result: randList })
            })
    }

    onlyUsa = () => {
        let natCode = "us";
        this.oneCountry(natCode);
    }

    onlyGb = () => {
        let natCode = "gb";
        this.oneCountry(natCode);
    }

    onlyFr = () => {
        let natCode = "fr";
        this.oneCountry(natCode);
    }

    //Sets what the user puts in as search 
    handleInputChange = event => {
        //Filter by what this.state.search
        this.setState({ search: event.target.value });


    };

    // //Search for just the name of the person
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     //Filter just by that name  

    // }

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    breeds={this.state.names}
                />
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Your employees:</h1>
                    <Button cb={this.sortAlphabet} text={"Sort alphabetically"} name={"alphabet"} />
                    <Button cb={this.onlyUsa} text={"Show only USA"} name={"unitedStates"} />
                    <Button cb={this.onlyGb} text={"Show only Great Britain"} name={"greatBritain"} />
                    <Button cb={this.onlyFr} text={"Montre seulement les Français"} name={"laFrance"} />
                </Container>
                <Table
                    alphebetized={this.state.alphebetized}
                    sortAlphabet={this.sortAlphabet}
                    randList={this.state.result.filter(user => user.name.first.toLowerCase().includes(this.state.search) || user.name.last.toLowerCase().includes(this.state.search))} />
            </div>
        );
    }
}

export default Search;