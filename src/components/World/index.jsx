import React from 'react'
import { connect } from 'react-redux';
import Button from '../Button';
import Gravatar from '../Gravatar';
import Room from '../Room';
import Video from '../Video';
import Painting from '../Painting';
import GlobeThumbnail from '../GlobeThumbnail';
import { selectHome, viewGlobe } from 'state/world/actions';
import { Entity } from 'aframe-react';

const ROOM_WIDTH = 30;
const ROOM_LENGTH = 20;
const ROOM_HEIGHT = 10;

const World = ( props ) => {
	const { world, onHome, onViewGlobe, playVideo } = props;
	const northWall = 0 - ( ROOM_LENGTH / 2 );

	return (
		<Room width={ ROOM_WIDTH } length={ ROOM_LENGTH } height={ ROOM_HEIGHT }>
			<Button onClick={ onHome } placement="wall" position={ [ -1, 1.5, northWall ] }/>
			<Gravatar url={ world.image } text={ world.bio } position={ [ -2, 4, northWall ] }></Gravatar>
			<GlobeThumbnail radius={ 1 } position={ [ -7, 2, -7 ]} url="background/background-john.jpg" onClick={ () => onViewGlobe( world ) }/>

			<Painting url="photo/john/gion-at-night-man.jpg" position={ [ 0 - ( ROOM_WIDTH / 2 ) + 0.01, 4, 0 ] } placement="west" width={ 4 } height={ 3 }/>
			<Painting url="photo/john/yasaka-lanterns.jpg" position={ [ ( ROOM_WIDTH / 2 ) - 0.01, 4, 0 ] } placement="east" width={ 4 } height={ 3 }/>
			<Painting url="photo/marcus/361570030001-1200x800.jpg" position={ [ 0, 4, ( ROOM_LENGTH / 2 ) - 0.01 ] } placement="south" width={ 4 } height={ 3 }/>

			<Entity position={ [ 10, -0.5, -10.2 ] }>
				<a-entity collada-model="url(model.dae)"></a-entity>
			</Entity>
			{ playVideo && <Video url="https://videos.files.wordpress.com/UqhxbYa9/howdy-a8c_hd.mp4" position={ [ -0.5, 2.5, -5 ] } height={ 2 } width={ 3.54 }/> }
		</Room>
	);
};

function mapStateToProps( state ) {
	return {
		playVideo: state.people.playVideo
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		onHome: () => {
			dispatch( selectHome() )
		},
		onViewGlobe: ( world ) => {
			dispatch( viewGlobe( world ) );
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( World );
