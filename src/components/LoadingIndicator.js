import React, { useContext } from 'react';
import { ApiContext } from '../App';
import Puff from 'react-spinners/PuffLoader';

const LoadingIndicator = props => {
	const { isLoading } = useContext(ApiContext);

	return (
		<div className="loading-indicator">
			<div style={{ width: 50, height: 50 }}>

				<div>
					<Puff color="white" size={50} loading={isLoading}/>
				</div>

				<div style={{ margin: "10px" }} >
					<Puff color="red" size={30} speedMultiplier={1.5} loading={isLoading}/>
				</div>

			</div>
		</div>
	);
}

export default LoadingIndicator;
