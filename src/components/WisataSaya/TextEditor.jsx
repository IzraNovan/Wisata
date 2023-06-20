import { useEffect, useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function TextEditor({ deskripsi, setDeskripsi }) {
	const [editor, setEditor] = useState('');

	useEffect(() => {
		if (editor && deskripsi) {
			editor.setData(deskripsi);
		}
	}, [editor, deskripsi]);

	return (
		<CKEditor
			editor={ClassicEditor}
			data={deskripsi}
			onChange={(_, editor) => {
				const data = editor.getData();
				setDeskripsi(data);
			}}
		/>
	);
}

export default TextEditor;
