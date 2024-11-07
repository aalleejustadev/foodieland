import { data } from '../data/categories';
import Button from './Button';
import Category from './Category';

const CategoryListing = () => {
	return (
		// flex my-28 max-w-screen-xl mx-auto flex-col gap-12
		<div className='flex mt-16 mb-16 max-w-screen-xl mx-auto flex-col gap-12'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tighter'>
					Categories
				</h3>
				<Button
					secondary
					className='text-dark-100 bg-light font-semibold hover:bg-dark-100 hover:text-white'
				>
					View All Categories
				</Button>
			</div>
			<div className='flex flex-wrap items-center justify-between lg:gap-x-6'>
				{data.map(category => {
					return <Category key={category.id} title={category.title} imgUrl={category.imageUrl} />;
				})}
			</div>
		</div>
	);
};

export default CategoryListing;
