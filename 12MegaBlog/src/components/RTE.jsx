import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

export default function RTE({name, label, control, defaultValue = ""}) {
    // this control is what gives the data/state to the form(or any parent/component) which uses this RTE component
    // so parent component will give the control and take access to state
  return (
    <div className='w-full'>
        {label && <label className='mb-1 pl-1 inline-block'>{label}</label>}

        <Controller
        name={name || "content"}
        control={control}
        // whatever parent form/component want control to state , it will Give control
        // in the call back we want to set tracking(event change) on the "field", so below is the syntax
        render={({field: {onChange}}) => (
            <Editor
                initialValue={defaultValue}
                // in project we dont have to setup apikey but it will crash so i did it
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
