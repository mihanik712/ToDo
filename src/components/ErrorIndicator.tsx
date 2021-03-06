import { memo } from 'react';

interface ErrorIndicatorProps {
	error: string;
}

const ErrorIndicator = ({ error }: ErrorIndicatorProps) => (
	<div className="error-indicator">
		<h5 className="error-indicator__error">{error}</h5>
	</div>
);

export default memo(ErrorIndicator);
