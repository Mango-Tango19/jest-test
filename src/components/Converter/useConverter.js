import { useState, useEffect } from "react";
import { rubToUsd, usdToRub } from "../domain/converter";

export const useConverter = (initialRuble, course) => {
	const calculatedUsdAmount = rubToUsd(initialRuble, course);
	const [rub, setRub] = useState(initialRuble);
	const [usd, setUsd] = useState(calculatedUsdAmount);

	useEffect(() => {
		setRub(initialRuble);
		setUsd(rubToUsd(initialRuble, course));
	}, [initialRuble, course]);

	function createUpdater(direction) {
		const isFromRub = direction === "rub-usd";
		const convert = isFromRub ? rubToUsd : usdToRub;
		const setOriginal = isFromRub ? setRub : setUsd;
		const setTarget = isFromRub ? setUsd : setRub;

		return function update(val) {
			const original = Number(val);
			const target = convert(original, course);

			setOriginal(original);
			setTarget(target);
		};
	}

	const updateRub = createUpdater("rub-usd");
	const updateUsd = createUpdater("usd-rub");

	return {
		rub,
		usd,
		updateRub,
		updateUsd,
	};
};
