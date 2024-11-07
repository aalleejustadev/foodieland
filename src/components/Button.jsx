/* eslint-disable react/prop-types */
const Button = ({ link, target, icon, children, secondary, className }) => {
	return !secondary ? (
		<a
			className={`py-3 px-5 inline-flex items-center gap-x-2 text-dark-60 text-sm capitalize font-medium bg-dark-5 my-3 rounded-full transition hover:shadow-xl cursor-pointer`}
			href={link}
			target={target}
		>
			<span className='text-dark-100'>{icon}</span>
			{children}
		</a>
	) : (
		<a
			className={`py-5 px-8 inline-flex items-center gap-x-3 text-sm capitalize font-medium my-3 rounded-lg transition cursor-pointer ${
				className ? className : 'text-white bg-dark-100 hover:bg-primary'
			}`}
			href={link}
			target={target}
		>
			{children}
			<span className='text-dark-100'>{icon}</span>
		</a>
	);
};

export default Button;
