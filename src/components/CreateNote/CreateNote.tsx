import { createSignal, onMount } from "solid-js";

export default function () {
	const [focused, setFocused] = createSignal(false);

	let titleRef: Refs<HTMLDivElement>, contentRef: Refs<HTMLDivElement>;

	const resetDiv = () => {
		setFocused(false);
		titleRef!.innerHTML = "";
		contentRef!.innerHTML = "";
	};

	const handleFocusOut = (e: FocusEvent) => {
		const relatedTarget = e.relatedTarget;
		const eventTarget = e.target as HTMLDivElement;
		if (relatedTarget) return;
		if (e.target === document.activeElement) return;
		if (!eventTarget.textContent) {
			eventTarget.innerHTML = "";
		}
		console.log(eventTarget.innerText);
		resetDiv();
	};

	return (
		<div class="createNote" onFocusOut={handleFocusOut}>
			{focused() && (
				<div>
					<div
						contentEditable
						ref={titleRef}
						class="titleInput input"
						aria-label="Title"
					/>
				</div>
			)}
			<div>
				<div
					contentEditable
					ref={contentRef}
					onFocus={() => setFocused(true)}
					class="contentInput input"
					aria-label="Take a note..."
				/>
			</div>
		</div>
	);
}
