import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {artistList,artistOne} from '../actions/index';
import {bindActionCreators} from 'redux';
import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount() {
        console.log(this.props.artistList())
      console.log(this.props)
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistOne(key)
        console.log(key)
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artist.artistList}/>i
            </div>
        )
    }
    
}
function mapStateToProps(state){
    return {artist:state.artist}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({artistList,artistOne},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);