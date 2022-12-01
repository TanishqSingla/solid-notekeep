import { createSignal } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLInputElement>, contentRef: Refs<HTMLInputElement>;

	const handleFocusOut = (e: FocusEvent) => {
		const siblingFocused = e.relatedTarget;
		if(siblingFocused)
			return;
		setFocused(false);
		if(!contentRef?.value)
			return;
	}

	return (
		<form class="createNote" onFocusOut={handleFocusOut}>
			{focused() && <input placeholder="Title" ref={titleRef} onFocus={handleFocusOut}/>}
			<input ref={contentRef} placeholder="Take a note..." onFocus={() => setFocused(true)}/>
		</form>
	);
}
