import React, { useContext } from 'react';
import { ApiContext } from '../App';
import Puff from 'react-spinners/PuffLoader';

const LoadingIndicator = props => {
	const { fill, color, ...rest } = props;
	const { isLoading } = useContext(ApiContext);

	if (isLoading)
		return (
			<div className={fill ? "loading-indicator-fill" : "loading-indicator"}>

				<Puff color={color ?? "white"} size={50} loading={isLoading} rest />

			</div>
		);

	else
		return <></>;
}

export default LoadingIndicator;
