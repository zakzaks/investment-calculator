import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const isValidDuration = userInput.duration > 0;

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			};
		});
	}
	return (
		<div>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!isValidDuration && (
				<p className="center">
					Please enter a valid duration (greater than 0).
				</p>
			)}
			{isValidDuration && <Result userInput={userInput} />}
		</div>
	);
}

export default App;
