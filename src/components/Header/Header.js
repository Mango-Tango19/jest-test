import CurrentCourse from "../CurrentCourse/CurrentCourse";
//import { style } from "./Header.module.css";
export const Header = () => {
	return (
		<header>
			<CurrentCourse />
			Курс на текущий момент
		</header>
	);
};
