import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';

const CategoryMain = () => {
	const [values, setValues] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false
	});

	const { name, error, success, categories, removed, reload } = values;
	const token = getCookie('token');

	useEffect(() => {
		loadCategories();
	}, [reload]);

	const loadCategories = () => {
		getCategories().then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, categories: data });
			}
		});
	};

	const showCategories = () => {
		return categories.map((c, i) => {
			return (
				<div
				
					key={i}
				>
					{c.name}
				</div>
			);
		});
	};;






	return (
		<React.Fragment>
		
			<div>
				{showCategories()}
			</div>
		</React.Fragment>
	);
};

export default CategoryMain;