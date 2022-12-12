import type { Component } from "solid-js";
import CreateNote from "./components/CreateNote/CreateNote";
import Header from "./components/Layout/Header/Header";
import Note from "./components/Note/Note";

const App: Component = () => {
	return (
		<>
			<Header />
			<main class="p-8">
				<CreateNote />
				<div class="p-8 flex flex-wrap justify-start gap-4 max-w-full">
				</div>
			</main>
		</>
	);
};

export default App;
