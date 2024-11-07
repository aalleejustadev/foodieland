import Button from './Button';
import PlayIcon from './icons/PlayIcon';
import TimeIcon from './icons/TimeIcon';
import UtensilsIcons from './icons/UtensilsIcons';

const Hero = () => {
	return (
		<div className='max-w-screen-xl mx-auto my-8'>
			<div className='flex flex-col md:flex-row items-center rounded-[50px] lg:bg-light overflow-hidden relative'>
				<div className='absolute z-20 right-3 top-3 w-20 h-20 sm:w-28 sm:h-28 md:left-1/2 md:top-2 md:-translate-x-1/2'>
					<img src='/images/hero-badge.png' alt='Hero badge' />
				</div>
				{/* Hero content */}
				{/* p-12  h-full */}
				<div className='w-full p-6 md:w-1/2 relative z-10 bg-light rounded-[50px] md:rounded-br-none md:rounded-tr-none'>
					<div className='inline-flex items-center gap-x-2 py-3 px-5 mb-5 rounded-full bg-white shadow-2xl font-semibold text-sm'>
						<img src='/images/recipe.png' alt='Hot Recipe' />
						Hot Recipes
					</div>
					{/* <h1 className='text-6xl font-bold leading-[77px] mb-3'>Spicy delicious chicken wings</h1> */}
					<h1 className='text-4xl md:text-5xl font-bold leading-[48px] md:leading-[62px] mb-3'>
						Spicy delicious chicken wings
					</h1>
					<p className='text-dark-60 mb-5'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqut enim ad minim.
					</p>
					{/* Hero buttons */}
					<div className='flex items-center gap-x-5'>
						<Button link='#' icon={<TimeIcon color='black' />}>
							30 Minutes
						</Button>
						<Button link='#' target='_blank' icon={<UtensilsIcons color='black' />}>
							Chicken
						</Button>
					</div>
					{/* Hero bottom */}
					<div className='flex flex-col sm:flex-row items-center justify-between mt-10 gap-y-4'>
						<div className='flex items-center gap-x-4 w-full sm:basis-1/3 md:basis-1/2'>
							<img
								className='w-[50px] h-[50px] object-cover'
								src='/images/user-image.png'
								alt='user image'
							/>
							<div className='flex justify-start flex-col'>
								<strong>John Smith</strong>
								<span className='font-medium text-dark-60 text-sm'>15 Mar 2024</span>
							</div>
						</div>
						<div className='w-full sm:basis-2/3 md:basis-1/2'>
							<Button link='#' secondary icon={<PlayIcon color='white' />}>
								View Recipes
							</Button>
						</div>
					</div>
				</div>
				{/* Hero image */}
				{/* h-full max-h-full */}
				<div className='w-full h-96 mt-5 md:w-1/2 md:h-full md:scale-125 md:mt-0 lg:scale-100'>
					{/* min-w-full max-h-full min-h-full */}
					<img className='w-full rounded-tl-[50px]' src='/images/hero-image.png' alt='Hero Image' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
