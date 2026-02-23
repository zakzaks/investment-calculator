import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
	const [initialInvestment, setInitialInvestment] = useState(0);
	const [expectedReturn, setExpectedReturn] = useState(0);
	const [annualInvestment, setAnnualInvestment] = useState(0);
	const [duration, setDuration] = useState(0);

	function handleInitialInvestmentChange(event) {
		setInitialInvestment(event.target.value);
	}

	function handleExpectedReturnChange(event) {
		setExpectedReturn(event.target.value);
	}

	function handleAnnualInvestmentChange(event) {
		setAnnualInvestment(event.target.value);
	}

	function handleDurationChange(event) {
		setDuration(event.target.value);
	}

	let data = [];

	return (
		<div>
			<Header />
			<UserInput
				onInitialInvestmentChange={handleInitialInvestmentChange}
				onExpectedReturnChange={handleExpectedReturnChange}
				onAnnualInvestmentChange={handleAnnualInvestmentChange}
				onDurationChange={handleDurationChange}
			/>

			<Result data={data} />
		</div>
	);
}

export default App;
