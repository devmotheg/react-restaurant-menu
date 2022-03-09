/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";
import dishes from "../data/dishes";

interface ButtonProps {
	text: string;
	clickHandler: () => void;
}

interface ItemProps {
	id: number;
	title: string;
	category: string;
	price: number;
	img: any;
	desc: string;
}

const Button = ({ text, clickHandler }: ButtonProps) => {
	return (
		<button
			className="p-2 text-lg text-yellow-600 capitalize transition rounded hover:text-white hover:bg-yellow-600"
			onClick={clickHandler}>
			{text}
		</button>
	);
};

const Item = (props: ItemProps) => {
	const { title, price, img, desc } = props;
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<div className="w-full p-1 bg-yellow-600 rounded h-52 md:w-56 md:h-36">
				<img
					className="object-cover w-full h-full"
					src={img}
					alt="Food Image"
				/>
			</div>
			<div className="w-full md:w-[calc(100%-14rem)]">
				<div className="flex items-center justify-between gap-4 border-dashed font-bold border-b-[0.05rem] border-black pb-2 mb-4">
					<span className="block capitalize">{title}</span>
					<span className="font-bold text-yellow-600">${price}</span>
				</div>
				<p className="text-slate-800">{desc}</p>
			</div>
		</div>
	);
};

const Project = () => {
	const [list, setList] = useState(dishes);

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-yellow-600">
				our menu
			</h1>
			<div className="flex items-center justify-center gap-4 mb-8">
				<Button text="all" clickHandler={() => setList(dishes)} />
				<Button
					text="breakfast"
					clickHandler={() =>
						setList(dishes.filter(d => d.category === "breakfast"))
					}
				/>
				<Button
					text="lunch"
					clickHandler={() =>
						setList(dishes.filter(d => d.category === "lunch"))
					}
				/>
				<Button
					text="shakes"
					clickHandler={() =>
						setList(dishes.filter(d => d.category === "shakes"))
					}
				/>
			</div>
			<ul className="grid grid-cols-1 gap-10 lg:grid-cols-2">
				{list.map(d => (
					<li key={d.id}>
						<Item {...d} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Project;
