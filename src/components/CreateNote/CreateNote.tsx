import { createSignal } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLInputElement>, contentRef: Refs<HTMLInputElement>;

	const handleFocusOut = (e: FocusEvent) => {
		const relatedTarget = e.relatedTarget;

		// if tab is changed while focused.
		if(e.target === document.activeElement) return;

		if(relatedTarget) return;

		setFocused(false);

		if(!contentRef?.value) return;
	}

	return (
		<form class="createNote" onFocusOut={handleFocusOut}>
			{focused() && <input placeholder="Title" ref={titleRef} />}
			<input ref={contentRef} placeholder="Take a note..." onFocus={() => setFocused(true)}/>
		</form>
	);
}
