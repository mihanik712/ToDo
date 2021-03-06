import { memo, useEffect } from 'react';
import CatFact from 'components/CatFact';
import useFetchCatFact from 'requests/CatRequests';

const CatFactContainer = () => {
	const { data, isLoading, error, fetchCatFact } = useFetchCatFact();

	useEffect(() => {
		fetchCatFact();
	}, [fetchCatFact]);

	return (
		<CatFact
			fact={data.fact}
			loading={isLoading}
			error={error}
			handleUpdateCatFact={fetchCatFact}
		/>
	);
};

export default memo(CatFactContainer);
