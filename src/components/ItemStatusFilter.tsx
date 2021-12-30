import React, { memo } from 'react';
import '../styles/item-status-filter.scss';
import {FilterMode} from '../types/TodoTypes';

const buttonNames = [
		{ name: FilterMode.all, label: 'All' },
		{ name: FilterMode.active, label: 'Active' },
		{ name: FilterMode.done, label: 'Done' },
		{ name: FilterMode.actual, label: 'Actual' },
		{ name: FilterMode.overdue, label: 'Overdue' }
];

interface ItemStatusFilterProps {
		filter: FilterMode;
		handleFilterChange: (name: FilterMode) => void;
	}

const ItemStatusFilter = ({filter, handleFilterChange}: ItemStatusFilterProps) => {
		console.log('ItemStatusFilter render');

		const buttons = buttonNames.map(({name, label}) => {
				return (
						<button
								type="button"
								className={`item-status-filter__button ${filter === name ? 'item-status-filter__button--active' : ''}`}
								key={name}
								onClick={() => handleFilterChange(name)}
						>
								{label}
						</button>
				);
		});

		return (
				<div className="item-status-filter__button-group">
						{buttons}
				</div>
		);
};

export default memo(ItemStatusFilter);