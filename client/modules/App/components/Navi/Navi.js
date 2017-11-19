import React from 'react';
import { Link } from 'react-router';

const Navi = (props) => (
		<div>
			<p>
				<Link to={`/home`} >
	          		Home
	        	</Link>
        	</p>
        	<p>
	        	<Link to={`/posts`} >
	          		Posts
	        	</Link>
	        </p>
	        <p>
	        	<Link to={`/about`} >
	          		About
	        	</Link>
        	</p>
		</div>
);

export default Navi;