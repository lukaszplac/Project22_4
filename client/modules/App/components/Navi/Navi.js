import React from 'react';
import { Link } from 'react-router';
import styles from './Navi.css'

const Navi = (props) => (
		<div>
				<Link to={`/home`} >
	          		<span className={styles.navip}>Home</span>
	        	</Link>
	        	<Link to={`/posts`} >
	          		<span className={styles.navip}>Posts</span>
	        	</Link>
	        	<Link to={`/about`} >
	          		<span className={styles.navip}>About</span>
	        	</Link>
		</div>
);

export default Navi;