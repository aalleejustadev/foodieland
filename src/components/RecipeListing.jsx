/* eslint-disable react/prop-types */
import { recipes } from '../data/recipes';
import Recipe from './Recipe';

const RecipeListing = ({ secondary }) => {
	return !secondary ? (
		<div className='max-w-screen-xl mx-auto my-16'>
			<h3 className='text-center text-3xl md:text-4xl xl:text-5xl font-bold mb-5 mt-0'>
				Simple and tasy recipes
			</h3>
			<p className='max-w-3xl mx-auto text-dark-60 text-center'>
				Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqut enim ad minim
			</p>
			<div className='flex justify-between xl:justify-center xl:gap-x-[3%] flex-wrap mt-10'>
				{recipes.primary.map(recipe => {
					return (
						<Recipe
							key={recipe.id}
							title={recipe.title}
							imgUrl={recipe.imageUrl}
							time={recipe.time}
							type={recipe.type}
						/>
					);
				})}
			</div>
		</div>
	) : (
		<div className='max-w-screen-xl mx-auto my-16'>
			<div className='flex flex-col xl:flex-row items-center justify-between'>
				<h3 className='text-3xl md:text-4xl xl:text-5xl font-bold mb-5 mt-0 w-full'>
					Try this delicious recipe <br />
					to make your day
				</h3>
				<p className='mx-auto text-dark-60 w-full md:max-w-[620px] md:ml-0'>
					Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqut enim ad minim
				</p>
			</div>

			<div className='flex justify-center gap-y-8 gap-x-[3%] flex-wrap mt-10'>
				{recipes.secondary.map(recipe => {
					return (
						<Recipe
							key={recipe.id}
							title={recipe.title}
							imgUrl={recipe.imageUrl}
							time={recipe.time}
							type={recipe.type}
							secondary
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecipeListing;
