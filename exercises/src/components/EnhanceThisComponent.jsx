import { useState } from 'react';
import MealItem from './MealItem';
import useMealsFetch from '../hooks/useMealsFetch'; // it is a hook

const EnhanceThisComponent = () => {
	const [searchValue, setSearchValue] = useState('');
	const { error, fetchSearchResults, isLoading, meals } = useMealsFetch(); // hook needs to be instanced

	const handleSearchClick = async () => {
		const data = await fetchSearchResults(searchValue);
		setMeals(data?.meals);
	};

	return (
		<div style={{ width: '100%' }}>
			<h2>Enhance this component</h2>
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<input
					type="text"
					value={searchValue}
					onChange={({ target: { value }}) => setSearchValue(value)}
					style={{ width: 250, padding: '10px', marginBottom: '10px' }}
				/>
				<button type="button" style={{ marginLeft: 8 }} onClick={handleSearchClick}>
					Search
				</button>
			</div>

			{isLoading && <h2>Loading ...</h2>}
			{error && <h2>{error}</h2>}

			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{meals?.map((meal) => <MealItem {...meal} key={`meal-item-${meal.strMeal}`}/>)}
			</div>
		</div>
	);
}

export default EnhanceThisComponent;
