import { useSelector } from "react-redux";
import { selectCourse } from "../../store/features/course/slice";
import { style } from "./CurrentCourse.module.css";
function CurrentCourse() {
	const value = useSelector(selectCourse);
	return <div className={style.value}>{value}Р</div>;
}

export default CurrentCourse;
