import Logo from './Logo';

const Footer = () => {
	return (
		<div className='max-w-screen-xl mx-auto mt-16 pb-8'>
			{/* Footer upper */}
			<div className='flex flex-col xl:flex-row items-center justify-between pb-8 border-b'>
				<div className='w-full flex flex-col items-center xl:w-1/2 xl:items-start'>
					<Logo className='text-center xl:text-left' />
					<p className='text-dark-60 text-center text-sm mt-3'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit.
					</p>
				</div>
				<div className='w-full mt-10 xl:w-1/2'>
					<ul className='flex justify-center xl:justify-end gap-x-10 font-medium menu-items'>
						<li>
							<a href='#recipes'>Recipes</a>
						</li>
						<li>
							<a href='#blog'>Blog</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
						<li>
							<a href='#about'>About us</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Footer bottom */}
			<div>
				<p className='text-center text-dark-60 m-0 pt-5'>
					&copy; {new Date().getFullYear()} Flowbase. Powered by Webflow
				</p>
			</div>
		</div>
	);
};

export default Footer;
