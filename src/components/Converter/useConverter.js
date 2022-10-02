import { useState } from "react";
import { rubToUsd, usdToRub } from "../domain/converter";

export const useConverter = (initialRuble, course) => {
	const calculatedUsdAmount = rubToUsd(initialRuble, course);
	const [rub, setRub] = useState(initialRuble);
	const [usd, setUsd] = useState(calculatedUsdAmount);

	function updateRub(val) {
		const rub = Number(val);
		const usd = rubToUsd(rub, course);

		setRub(rub);
		setUsd(usd);
	}

	function updateUsd(val) {
		const usd = Number(val);
		const rub = usdToRub(usd, course);

		setRub(rub);
		setUsd(usd);
	}

	return {
		rub,
		usd,
		updateRub,
		updateUsd,
	};
};
