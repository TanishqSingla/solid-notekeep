interface NoteProps {
	title?: string;
	content: string;
}

export default function (props: NoteProps) {
	return (
		<div class="note-element max-w-[18rem] flex flex-col">
			<div class="px-4 py-2 title">{props.title}</div>
			<div class="px-4 py-2 content">{props.content}</div>
		</div>
	);
}
