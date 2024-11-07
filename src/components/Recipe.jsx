import HeartIcon from './icons/HeartIcon';
import TimeIcon from './icons/TimeIcon';
import UtensilsIcons from './icons/UtensilsIcons';

/* eslint-disable react/prop-types */
const Recipe = ({ title, imgUrl, time, type, secondary }) => {
	return (
		<div
			className={`${
				!secondary && 'bg-gradient-to-t from-light to-white px-5 pb-7'
			} transition duration-500 hover:scale-105 rounded-3xl ${
				secondary ? 'w-full sm:w-[48%] xl:w-[22.75%]' : 'w-full mb-7 sm:w-[48%] xl:w-[31.333%]'
			} cursor-pointer`}
		>
			<div className='relative'>
				<img
					className={`${
						secondary
							? 'h-[250px] sm:h-[200px] md:h-[280px] xl:h-[220px]'
							: 'h-[250px] sm:h-[200px] md:h-[250px]'
					} w-full object-cover rounded-3xl`}
					src={`/images/recipes/${imgUrl}`}
					alt={title}
				/>
				<span className='absolute top-4 right-4 z-10 bg-white hover:bg-red-700 transition-colors cursor-pointer w-12 h-12 rounded-full shadow-sm flex items-center justify-center'>
					<HeartIcon color='#ddd' />
				</span>
			</div>
			<h4
				className={`${
					secondary ? 'text-lg leading-6 font-bold' : 'text-2xl leading-9 font-semibold'
				}  mb-5 tracking-tighter my-3 text-dark-100`}
			>
				{title}
			</h4>
			<div className='flex items-center gap-x-5'>
				<div className='flex items-center gap-x-3 text-dark-60 font-medium text-sm'>
					<TimeIcon color='black' />
					{`${time} Minutes`}
				</div>
				<div className='flex items-center gap-x-3 text-dark-60 font-medium text-sm'>
					<UtensilsIcons color='black' />
					{type}
				</div>
			</div>
		</div>
	);
};

export default Recipe;
