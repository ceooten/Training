import React, { Component } from 'react';
import NavigationBar from '../Navigation/NavigationBar/NavigationBar';
import {connect} from 'react-redux';

class Layout extends Component {
    render() {
        return (
            <div>
                <NavigationBar isAuthenticated={this.props.isAuthenticated}/>
                {this.props.children}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps) (Layout);