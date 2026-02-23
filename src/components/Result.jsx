export default function Result({ data }) {
	return (
		<>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.year}>
							<td>{item.year}</td>
							<td>${item.initialInvestment}</td>
							<td>${item.interest}</td>
							<td>${item.valueEndOfYear}</td>
							<td>${item.annualInvestment}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
