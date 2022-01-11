import ErrorIndicator from 'components/ErrorIndicator';
import Spinner from 'components/Spinner';

interface CatFactProps {
	fact: string;
	loading: boolean;
	error: string | null;
	handleUpdateCatFact: () => void;
}

const CatFact = ({
	fact,
	loading,
	error,
	handleUpdateCatFact,
}: CatFactProps) => {
	console.log('CatFact render');

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator error={error} />;
	}

	return (
		<div className="cat-fact">
			<div className="cat-fact__content">
				<h3 className="cat-fact__title">Random fact about cat</h3>
				<div className="cat-fact__row">
					<p className="cat-fact__fact">{fact}</p>

					<button
						type="button"
						className="cat-fact__button"
						onClick={handleUpdateCatFact}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default CatFact;
