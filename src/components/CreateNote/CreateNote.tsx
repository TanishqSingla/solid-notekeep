import { createSignal } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLDivElement>, contentRef: Refs<HTMLDivElement>;

	const handleFocusOut = (e: FocusEvent) => {
		const relatedTarget = e.relatedTarget;
		if (relatedTarget) return;
		if (e.target === document.activeElement) return;
		setFocused(false);
	}

	const handleFocusIn = (e: FocusEvent) => {
		setFocused(true);
	}

	return (
		<div class="createNote" onFocusOut={handleFocusOut} onFocusIn={handleFocusIn}>
			{focused() && <div><div contentEditable ref={titleRef} class="titleInput input" aria-label="Title" /></div>}
			<div><div contentEditable ref={contentRef} class="contentInput input" aria-label="Take a note..." /></div>
		</div>
	);
}
