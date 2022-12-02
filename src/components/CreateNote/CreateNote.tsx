import { createSignal } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLTextAreaElement>, contentRef: Refs<HTMLTextAreaElement>;

	const handleFocusOut = (e: FocusEvent) => {
		const relatedTarget = e.relatedTarget;

		// if tab is changed while focused.
		if(e.target === document.activeElement) return;

		if(relatedTarget) return;

		setFocused(false);

		if(contentRef?.innerHTML) {
			console.log('save')
		}
	}

	const handleFocus = (e: FocusEvent) => {
		setFocused(true);
		const eventTarget = e.target as HTMLDivElement 
		eventTarget.innerHTML = ''
	}

	return (
		<form class="createNote" onFocusOut={handleFocusOut}>
			{focused() && <textarea ref={titleRef} class="text-lg" />}
			<textarea ref={contentRef} onFocus={handleFocus} class="text-base" />
		</form>
	);
}
