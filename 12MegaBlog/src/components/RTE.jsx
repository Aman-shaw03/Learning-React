import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

export default function RTE({name, label, control, defaultValue = ""}) {
    // this control is what gives the data/state to the form(or any place/component) which uses this RTE component
  return (
    <div className='w-full'>
        {label && <label className='mb-1 pl-1 inline-block'>{label}</label>}

        <Controller
        name={name || "content"}
        control={control}
        // whatever parent form/component will get control , it will Give that
        render={({field: {onChange}}) => (
            <Editor
                initialValue={defaultValue}
                apiKey='pbbr9b8moku4zmoi9b30djhlz2xq7aaaqthrmusxf7fp2wh6' 
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
            />
        )}
        />
    </div>
  )
}
