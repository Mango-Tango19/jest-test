import { Quote } from "./components/Quote/Quote";
import { Converter } from "./components/Converter/Converter";
import { Header } from "./components/Header/Header";
const App = () => {
	return (
		<>
			<Header />
			<Quote />;
			<Converter />
		</>
	);
};

export default App;
