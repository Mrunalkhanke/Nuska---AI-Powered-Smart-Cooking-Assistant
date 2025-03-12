"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useRecipeStore } from "@/app/providers/recipe-store/recipe-store.provider";
import { shareRecipe } from "@/app/helpers/helpers";
import Background from "./background";

import styles from "./styles.module.css";

const Recipe: React.FC = () => {
	const recipe = useRecipeStore((state) => state.recipe);
	const isLoading = useRecipeStore((state) => state.isLoading);

	const handleShareClick = () => shareRecipe(recipe);

	return (
		<div className={styles.recipe}>
			<Background />
			<div className={styles.recipe__header}>
				<h3 className={styles.recipe__title}>Your Recipe</h3>
				<button
					onClick={handleShareClick}
					className={styles.recipe__btn}
					disabled={!recipe}
				>
					<FontAwesomeIcon icon={faShare} /> Share Recipe
				</button>
			</div>
			<div className={styles.recipe__content}>
				<p className={styles.recipe__desc}>
					{isLoading
						? "Cooking up your recipe... 🍳🥕🥦🍆🌽"
						: recipe ||
						  "Add your ingredients, click 'Create Recipe,' and watch your custom recipe appear here!"}
				</p>
			</div>
		</div>
	);
};

export default Recipe;