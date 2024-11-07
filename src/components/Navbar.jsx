import { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import MenuIcon from './icons/MenuIcon';
import Logo from './Logo';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => setIsOpen(!isOpen);

	return (
		<div className='py-8 max-md:px-4 border-b'>
			<div className='flex items-center justify-between max-w-screen-xl mx-auto'>
				{/* Logo */}
				<Logo />
				{/* Navigation */}
				<div
					className={`max-md:absolute z-50 left-0 w-screen max-md:min-h-[50vh] bg-white max-md:p-8 flex max-md:border-t items-center justify-center max-md:transition max-md:duration-300 ${
						isOpen
							? 'max-md:translate-y-0 max-md:top-24 max-md:opacity-100'
							: 'max-md:-translate-y-full max-md:top-0 max-md:opacity-0'
					}`}
				>
					<ul className='flex flex-col md:flex-row justify-center gap-x-14 font-medium menu-items max-md:w-full'>
						<li>
							<a
								className='text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0'
								href='#home'
							>
								Home
							</a>
						</li>
						<li>
							<a
								className='text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0'
								href='#recipes'
							>
								Recipes
							</a>
						</li>
						<li>
							<a
								className='text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0'
								href='#blog'
							>
								Blog
							</a>
						</li>
						<li>
							<a
								className='text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0'
								href='#contact'
							>
								Contact
							</a>
						</li>
						<li>
							<a
								className='text-dark-100 hover:text-primary transition block max-md:text-lg py-3 md:py-0'
								href='#about'
							>
								About us
							</a>
						</li>
					</ul>
				</div>
				{/* Social icons */}
				<div className='flex items-center justify-end gap-x-4 xl:gap-x-10 w-auto z-20 lg:w-40'>
					<a href='https://facebook.com/' target='_blank'>
						<FacebookIcon color='black' />
					</a>
					<a href='https://instagram.com'>
						<InstagramIcon color='black' />
					</a>

					{/* Mobile menu trigger */}
					<button className='md:hidden' onClick={toggleNav}>
						{isOpen ? (
							<CloseIcon className='w-6 h-6 cursor-pointer' color='black' />
						) : (
							<MenuIcon className='w-6 h-6 cursor-pointer' color='black' />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
