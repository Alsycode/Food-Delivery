import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleLeft,
	faAngleRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	[
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Akshay Kumar",
			rating: 3.5,
			content:
				'"The Margherita Pizza was decent, with fresh basil and mozzarella, but the tomato sauce could use more flavor. Still, a solid choice for a quick meal!"',
		},
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "Arjun Kapur",
			rating: 4.5,
			content:
				'"Absolutely loved the Pepperoni Pizza! The pepperoni was perfectly crispy, and the cheese was melted just right. The tangy tomato sauce tied it all together."',
		},
	],
	[
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Raima Sen",
			rating: 5,
			content:
				'"The Beef Steak was phenomenal! Juicy, perfectly grilled, and bursting with garlic and herb flavors. Hands down the best steak I’ve had in a while!"',
		},
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Akshay Kumar",
			rating: 3.5,
			content:
				'"Tried the Mozzarella Sticks, and they were good but not amazing. The cheese was gooey, but the coating could be crispier. Decent appetizer overall."',
		},
	],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
	const { rating, content, photo, name } = item;
	return (
		<div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
			<div className="mt-4">
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center">
						<div className="mr-2">
							<img
								src={photo}
								alt={name}
								className="max-w-full h-auto rounded-full border"
								width="47"
							/>
						</div>
						<div>
							<h5 className="text-xl break-all font-medium">{name}</h5>
						</div>
					</div>
					<Rating rating={rating} showLabel={false} />
				</div>
				<p className="leading-[1.8] opacity-80 mb-6">{content}</p>
			</div>
		</div>
	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Testimonial21 = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section className="ezy__testimonial21 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto relative">
				<div className="flex justify-center text-center mb-6 lg:mb-12">
					<div className="max-w-lg">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
							What Our Clients Say
						</h2>
						<p className="text-lg opacity-80">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-6 mt-12">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-2 md:col-span-1" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
				</div>

				<div className="relative flex justify-center items-center my-12">
					<button
						className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
						onClick={() => handleControl("prev")}
					>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button
						className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
						onClick={() => handleControl("next")}
					>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonial21