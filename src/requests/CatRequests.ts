import { useCallback, useState } from 'react';
import { CatFactRuntime, CatFactType } from 'types/CatTypes';
import { isLeft } from 'fp-ts/lib/Either';
import catApiUrl from 'constants';

const useFetchCatFact = () => {
	const [data, setData] = useState<CatFactType>({ fact: '' });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchCatFact = useCallback(() => {
		setIsLoading(true);
		fetch(`${catApiUrl}/fact`)
			.then((response) => response.json())
			.then((json) => {
				const result = CatFactRuntime.decode(json);

				if (isLeft(result)) {
					throw new Error(result.left.toString());
				}

				setTimeout(() => {
					setIsLoading(false);
					setData(result.right);
				}, 500);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(`An error occured during loading fact about cat: ${err}`);
			});
	}, []);

	return { data, isLoading, error, fetchCatFact };
};

export default useFetchCatFact;
