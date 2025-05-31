/* eslint-disable react/prop-types */
// Real Time Editor
// RTE.JS and PostForm.jsx file kese bni vaps dekhna ya smjna ache se for RTE video ref adding form and slug values 

import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';



export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}

        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')) 
        />
    )}
    />

     </div>
  )
}