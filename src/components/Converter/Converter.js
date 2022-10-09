import React from "react";
import { useSelector } from "react-redux";
import { selectCourse } from "../../store/features/course/slice";

import { useConverter as ConverterHook } from "./useConverter";

export function Converter({ useConverter = ConverterHook }) {
	const initialCourse = useSelector(selectCourse);
	const { rub, usd, updateRub, updateUsd } = ConverterHook(
		100,
		initialCourse
	);
	return (
		<form>
			<label>
				<p>Сумма в рублях</p>
				<input
					type='number'
					name='rub'
					min='0'
					step='1'
					value={rub}
					onChange={(e) => updateRub(e.target.value)}
				/>
			</label>

			<label>
				<p>Сумма в долларах</p>
				<input
					type='number'
					name='usd'
					min='0'
					step='1'
					value={usd}
					onChange={(e) => updateUsd(e.target.value)}
				/>
			</label>
		</form>
	);
}
