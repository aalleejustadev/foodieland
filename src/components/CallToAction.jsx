import Button from './Button';

const CallToAction = () => {
	return (
		<div className='flex flex-col xl:flex-row max-w-screen-xl my-16 mx-auto items-center justify-between'>
			<div className='w-full xl:w-1/2'>
				<h3 className='text-3xl md:text-4xl xl:text-5xl font-bold text-dark-100 leading-[42px] mb-5'>
					Everyone can be a <br />
					chef in their own kitchen
				</h3>
				<p className='text-dark-60 leading-7 mb-6 md:max-w-[508px] xl:mb-10'>
					Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqut enim ad minim
				</p>
				<Button secondary>Learn More</Button>
			</div>
			<div className='w-full xl:w-1/2'>
				<img className='w-full' src='/images/chef-with-bg.png' alt='Chef' />
			</div>
		</div>
	);
};

export default CallToAction;
