export default function UserInput() {
	return (
		<div id="user-input">
			<div className="input-group">
				<label htmlFor="">Initial Investment</label>
				<input type="text" />

				<label htmlFor="">Annual Investment</label>
				<input type="number" />
			</div>

			<div className="input-group">
				<label htmlFor="">Expected Return</label>
				<input type="text" />

				<label htmlFor="">Duration</label>
				<input type="text" />
			</div>
		</div>
	);
}
