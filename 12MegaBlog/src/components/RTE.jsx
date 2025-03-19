import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE({ name, control, label, defaultValue = "" }) {
    const [value, setValue] = React.useState(" ");

    const limit = 240;

    const handleInit = (evt, editor) => {
        setValue(editor.getContent({ format: "text" }));
    };

    const handleUpdate = (content, editor) => {
        const length = editor.getContent({ format: "text" }).length;
        const text = editor.getContent({ format: "text" }).replace(/<[^>]*>/g, ""); // Remove HTML tags
        if (length <= limit) {
            setValue(content);
        }
        else {
            editor.undoManager.undo(); // Undo last input to prevent overflow
        }
    };

    const handleBeforeAddUndo = (evt, editor) => {
        const length = value.replace(/<[^>]*>/g, "").length;
        console.log(length)

        if ((length) > limit) {

            evt.preventDefault(); // **Prevents additional typing**
        }
    };

    return (
        <div className='w-full'>
            {label && <label className='text-sm text-gray-600'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='0w2f7no7tcd82lhbldkxkpeen4qc5mp34e8ahdx74sqplh1d'
                        init={{
                            initialValue: defaultValue,
                            setup: (editor) => {
                                editor.on("BeforeInput", (evt) => {
                                    const text = editor.getContent({ format: "text" }).replace(/<[^>]*>/g, ""); // Remove HTML tags
                                    if (text.length >= limit) {
                                        evt.preventDefault(); // Blocks input beyond limit
                                    }
                                });
                            },
                            moticons_database_url: '',
                            plugins: [
                               
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                        }}
                        initialValue={defaultValue}
                        value={value}
                        // onEditorChange={onChange}
                        onEditorChange={(content, editor) => {
                            const length = editor.getContent({ format: "text" }).replace(/<[^>]*>/g, "").length;
                            onChange(content);
                            
                            if (length <= limit) {
                                setValue(content);
                            } else {
                                editor.undoManager.undo();
                            }
                        }}
                        // value={value}
                        onInit={handleInit}
                        // onEditorChange={handleUpdate}
                        onBeforeAddUndo={handleBeforeAddUndo} />
                )}
            />
            {/* <p>Remaining:
                <span className={`${limit - value.replace(/<[^>]*>/g, "").length > 20 ? "text-red-200" : "text-red-600"}`}>
                    {limit - (value.replace(/<[^>]*>/g, "").length)}

                </span>
            </p> */}
            <p>
                Remaining:
                <span className={`${limit - value.replace(/<[^>]*>/g, "").length > 20 ? "text-green-500" : "text-red-600"}`}>
                    {Math.max(limit - value.replace(/<[^>]*>/g, "").length, 0)}
                </span>
            </p>

        </div>

    )
}


