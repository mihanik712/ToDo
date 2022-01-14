const TestDropdownMenu = () => (
	<div>
		<div className="menu-area">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a>
					<ul className="dropdown-1">
						<li><a href="#">service one</a></li>
						<li><a href="#">service two</a></li>
						<li><a href="#">service three</a></li>
					</ul>
				</li>
				<li><a href="#">Porfolio</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
	</div>
);

export default TestDropdownMenu;
