import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading ? "Loading..." : <CatList catPics={this.props.catPics} />}
      </div>
    );
  }
}

export default connect(({cats, loading})=>({catPics: cats, loading}),{fetchCats})(App)