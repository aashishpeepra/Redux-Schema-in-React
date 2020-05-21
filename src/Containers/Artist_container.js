import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { artistDetails, clearData } from '../actions/index';
import { bindActionCreators } from 'redux';

class ArtistContainer extends Component {




    componentWillMount() {
        this.props.artistDetails(this.props.match.params.id);
        console.log(this.props.match.params.id)

    }
    componentWillUnmount(){
        this.props.clearData();
    }
    template = (data) => {
        console.log("->",data)
        return(data.artistData ?
            <div className="artist_view">
                <div className="artist_background" style={{
                    background: `url(/images/${data.artistData[0].cover})`
                }}>
                    <Link to="/">
                        Back home
            </Link>
                    <div className="name">{data.artistData[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistData[0].bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {data.artistData[0].style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    {data.artistData[0].albums ?
                        data.artistData[0].albums.map(item => (
                            <div key={item.cover} className="albums">
                                <div className="cover" style={{
                                    background: `url(/images/albums/${item.cover})`
                                }}>
                                </div>

                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
            : null)
                }
    render() {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhh",this.props.artist)
        return (
           <div>
               {this.template(this.props.artist)}
           </div>
        );
    }
};
function mapStateToProps(state) {
    return { artist: state.artist };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ artistDetails,clearData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);