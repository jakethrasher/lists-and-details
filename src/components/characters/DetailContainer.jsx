import React, { Component } from 'react';
import Character from './Character';
import request from 'superagent';
import PropTypes from 'prop-types';

export default class DetailContainer extends Component {
    static propTypes = {
      match:PropTypes.shape({
        params:PropTypes.shape({
          id:PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }
    
    state={
      character:{
        _id:'',
        image:'',
        name:''
      }
    }
   
    componentDidMount = async () => {
      const id = this.props.match.params.id;
      
      // eslint-disable-next-line max-len
      const res = await request.get(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
        
      this.setState({ character:res.body });
    }

    render() {
      return (
        <div>
          <Character 
            id={this.state.character._id}
            image={this.state.character.image}
            name={this.state.character.name}
          />
        </div>
      );
    }
}
        
    

