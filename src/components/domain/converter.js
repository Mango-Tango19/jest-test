export const rubToUsd = (rub, course) => {
	return Number((rub / course).toFixed(2));
};

export const usdToRub = (usd, course) => {
	return Number((usd * course).toFixed(2));
};
