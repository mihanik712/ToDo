import { memo } from 'react';

interface AppHeaderProps {
	doneCount: number;
	todoCount: number;
}

const AppHeader = ({
	doneCount,
	todoCount,
}: AppHeaderProps) => {
	console.log('AppHeader render');

	return (
		<div className="app-header">
			<div className="app-header__row">
				<h1 className="app-header__title">
					Todo List
				</h1>
				<h2 className="app-header__counters">
					{todoCount} more to do, {doneCount} done
				</h2>
			</div>
		</div>
	);
};

export default memo(AppHeader);
