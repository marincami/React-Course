import { useEffect, useState } from 'react';

const useMealsFetch = () => {
  const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);

	useEffect(() => {
		const getRecipeResults = async () => {
			const results = await fetchSearchResults('chicken');
			setMeals(results?.meals);
		};

		getRecipeResults();
	}, []);

  const fetchSearchResults = async (searchText) => {
		try {
			setIsLoading(true);
			const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
			const data = await result.json();

			return data;
		} catch(error) {
			setError('Error, try again!');
		} finally { // sets false always
			setIsLoading(false);
		}
	};

	return { error, isLoading, meals, fetchSearchResults };
};

export default useMealsFetch;
