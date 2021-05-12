import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/fetchCharacters';

export default class CharacterContainer extends Component {
  state={
    characters:[],
    loading: true
  }
  
  componentDidMount= async () => {
    const data = await fetchCharacters();
    this.setState({ 
      characters:data.body,
      loading:false
    });
  }
  render() {
  
    return (
      <>
        <h1>Hey Arnold! Character List:</h1>
        {this.state.loading ? <h1>LOADING</h1>
          : <CharacterList characters={this.state.characters}/>}
        
      </>
    );
  }
}
