export function Converter() {
	return (
		<form>
			<label>
				<p>Сумма в рублях</p>
				<input type='number' name='rub' min='0' step='1' value={2} />
			</label>

			<label>
				<p>Сумма в доллрарах</p>
				<input type='number' name='usd' min='0' step='1' value={32} />
			</label>
		</form>
	);
}
