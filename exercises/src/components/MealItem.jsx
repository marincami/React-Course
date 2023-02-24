const MealItem = (meal) => {
	<div style={{ width: 280, height: 280, margin: 8 }}>
		<img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }}/>
		<h3>{meal.strMeal}</h3>
			<a href={meal.strYoutube} target="blank">Youtube Link</a>
	</div>
};

export default MealItem;
