import React from 'react';
import styled from 'styled-components';

const Dash = (props) => {
	return (
		<DashContainer>
			<div className="dash-header">
<h1>pinterach</h1>
			</div>
		</DashContainer>
	)
}

export default Dash;

const DashContainer = styled.div`

	.dash-header {
		background-color: ${p => p.theme.darkBackground};
	}

`;

