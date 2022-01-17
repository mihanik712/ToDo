const TestDropdownMenu = () => (
	<div className="filter__row">
		<div className="filter__content">
			<label className="filter__label">
				Filter:
			</label>
			<select className="filter__select">
				<option>All</option>
				<option>Not Done</option>
				<option>Done</option>
				<option>Unexpired</option>
				<option>Overdue</option>
			</select>
		</div>
	</div>
);

export default TestDropdownMenu;
