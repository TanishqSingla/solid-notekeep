interface NoteProps {
	title?: string;
	content: string;
}

export default function (props: NoteProps) {
	return (
		<div class="border border-[#5f6368] shadow-sm shadow-black rounded-lg flex flex-col max-w-[240px] w-full">
			<div class="px-4 py-2 title">{props.title}</div>
			<div class="px-4 py-2 content">{props.content}</div>
		</div>
	);
}
