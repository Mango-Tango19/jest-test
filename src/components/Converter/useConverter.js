import { useState } from "react";
import { rubToUsd } from "../domain/converter";

export const useConverter = (initialRuble, course) => {
	const calculatedUsdAmount = rubToUsd(initialRuble, course);
	const [rub, setRub] = useState(initialRuble);
	const [usd, setUsd] = useState(calculatedUsdAmount);

	return {
		rub,
		usd,
		updateRub: setRub,
		updateUsd: setUsd,
	};
};
