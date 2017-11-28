import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

class PhotoList extends Component {
  constructor() {
    super();

    this.renderPhotos = this.renderPhotos.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.page)
  }

  loadMorePhotos() {
    this.props.fetchPhotos(this.props.page)
  }

  renderPhotos(item, idx) {
    return (
        <TouchableWithoutFeedback key={idx} onPress={() => this.props.profile(item.image_url)}>
        	<View style={{width: 160, height: 160}}>
        		<Image style={{width: 80, height: 80}} source={{uri: item.image_url}}/>
        		<Text>{item.name}</Text>
        		<Text>{item.user.fullname}</Text>
      		</View>
        </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.photoStatus == 'PHOTO_IS_LOADED' ?
	        <ScrollView>
		        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
		          {this.props.photos.map(this.renderPhotos)}
		        </View>
	        </ScrollView> :
	        <ActivityIndicator size = "large" style = {{flex: 1}}/>
      	}
        <TouchableWithoutFeedback onPress={() => this.loadMorePhotos()}>
        	<View>
            <Text>Load More...</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    page: state.page,
    photoStatus: state.photoStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (page) => {
      dispatch(actionCreators.fetchPhotos(page));
    },
    profile: (url) => {
      dispatch({ type: 'Photo', url });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
