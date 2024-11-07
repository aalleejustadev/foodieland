/* eslint-disable react/prop-types */
const Logo = ({ className }) => {
	return (
		<a href='/' className={`font-lobster text-2xl w-40 ${className}`}>
			Foodieland<span className='text-primary'>.</span>
		</a>
	);
};

export default Logo;
