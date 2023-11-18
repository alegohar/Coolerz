import React from "react";
import useState from "react";
import { Header } from "../Components/Header";
function StopWatch() {
	
	return <React.Fragment>
	<Header/>
	<div className="flex items-center">
	<button>Start</button>
	<button>Stop</button>
	</div>

	</React.Fragment>
}

export default StopWatch;
