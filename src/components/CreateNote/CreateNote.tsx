import { createSignal } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLInputElement>, contentRef: Refs<HTMLInputElement>;

	const handleFocusOut = (e: FocusEvent) => {
		const siblingFocused = e.relatedTarget;
		if(siblingFocused)
			return;
		setFocused(false);
	}

	return (
		<form class="createNote" onFocusIn={() => setFocused(true)} onFocusOut={handleFocusOut}>
			{focused() && <input placeholder="Title" ref={titleRef} onFocus={handleFocusOut}/>}
			<input ref={contentRef} placeholder="Take a note..." />
		</form>
	);
}
