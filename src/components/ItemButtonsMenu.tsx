interface ItemButtonsMenuProps {
	isAllDone: boolean;
	handleToggleDoneAllItems: () => void;
	handleDeleteAllDoneItems: () => void;
}

const ItemButtonsMenu = ({
	isAllDone,
	handleToggleDoneAllItems,
	handleDeleteAllDoneItems,
}: ItemButtonsMenuProps) => (
	<div className="item-buttons-menu">
		<div className="item-buttons-menu__button-group">
			<button
				className="item-buttons-menu__button"
				type="button"
				onClick={handleToggleDoneAllItems}
				title={isAllDone ? 'make all done items undone' : 'make all items done'}
			>
				{isAllDone ? 'Reset Done' : 'Done All'}
			</button>

			<button
				className="item-buttons-menu__button"
				type="button"
				onClick={handleDeleteAllDoneItems}
				title="delete all done items"
			>
				Delete Done
			</button>
		</div>
	</div>
);

export default ItemButtonsMenu;
