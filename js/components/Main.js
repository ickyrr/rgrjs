import React from 'react';
import API from '../API';
import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
	return {links: LinkStore.getAll()};
}

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = _getAppState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		API.fetchLinks();
		LinkStore.on("change", this.onChange);
	}

	componentWillUnmount() {
		LinkStore.removeListener("change", this.onChange);
	}

	onChange() {
		console.log("4. In the View");
		this.setState(_getAppState());
	}

	render() {

		let content = this.state.links.map( (link, index) => {
			return <li key={index}>
							 <a href={link.url}>{link.title}</a>
						 </li>
		});

		return (
			<div>
   			<h3>Links</h3>
				<ul>
    			{content}
    		</ul>
   		</div>
		);
	}
}

export default Main;
