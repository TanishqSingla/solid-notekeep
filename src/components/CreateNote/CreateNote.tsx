import { createSignal, Ref } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLInputElement>, contentRef: Refs<HTMLInputElement>;

	const handleFocusIn = () => {
		setFocused(true);
	};

	const handleFocusOut = () => {
		setFocused(false);
		console.log(contentRef?.value)
	};

	return (
		<form onFocusOut={handleFocusOut} onFocusIn={handleFocusIn}>
			{focused() && <input ref={titleRef} />}
			<input ref={contentRef} />
		</form>
	);
}
