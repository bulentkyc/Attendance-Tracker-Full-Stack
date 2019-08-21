import React from 'react';
import Slider from './Slider';
import './Slider.css';

export default class Registration extends React.Component {
	state = {
		status: ''
	};
	// This func is for selecting the active class in swiper and to picking up the property (alt) and updating the status in the state
	swiperHandler = () => {
		let activeImg = document.querySelector('.swiper-slide-active');
		this.setState({ status: activeImg.alt });
	};
	render() {
		return (
			<div>
				<Slider swiperHandler={this.swiperHandler} />
				<form>
					<h1>{this.state.status}</h1>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					{this.state.status === 'Observer' ? (
						<React.Fragment>
							<input type="text" placeholder="Class" /> <input type="text" placeholder="School" />
						</React.Fragment>
					) : null}
				</form>
			</div>
		);
	}
}
