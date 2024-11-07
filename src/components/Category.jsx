/* eslint-disable react/prop-types */
const Category = ({ title, imgUrl }) => {
	return (
		<div
			className={`flex flex-col items-center gap-8 pb-5 w-[31.333%] lg:w-auto lg:flex-1 mb-5 rounded-3xl bg-gradient-to-t from-[#7082461a] to-white`}
		>
			<img className='w-[90px] h-[90px] object-contain' src={imgUrl} alt={title} />
			<p className='text-xl text-center font-bold'>{title}</p>
		</div>
	);
};

export default Category;
