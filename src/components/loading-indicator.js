import React, { useContext } from 'react';
import { LoadingContext } from '../app';
import Puff from 'react-spinners/PuffLoader';
import styled from 'styled-components';

const LoadingIndicator = props => {
	const { fill, hold, blur, color, ...rest } = props;
	const { isLoading } = useContext(LoadingContext);

	const classes = [];

	if (fill) classes.push("lo-in-fill");
	if (hold) classes.push("lo-in-hold");
	if (blur) classes.push("lo-in-blur");


	if (isLoading)
		return (
			<LoadingIndicatorContainer className={classes.join(" ")}>

				<Puff color={color ?? "white"} size={50} loading={isLoading} {...rest} />

			</LoadingIndicatorContainer>
		);

	else if (hold)
		return (
			<LoadingIndicatorContainer className={classes.join(" ")}>
				<div></div>
			</LoadingIndicatorContainer>

		);

	else
		return <></>;
}

export default LoadingIndicator;

const LoadingIndicatorContainer = styled.div`
	margin: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;

	&.lo-in-fill {
		position: absolute;

		display: flex;
		align-items: center;
		justify-content: center;

		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}

	&.lo-in-blur {
		background-color: #15133888;
	}

	&.lo-in-hold {
		div {
			width: 50px;
			height: 50px;
		}
	}
`;
