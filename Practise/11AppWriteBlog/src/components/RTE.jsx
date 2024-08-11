// setting up our RTE component with react Hook form(to get access to state) and tinyMCE
import React from 'react'
import {Controller} from "react-hook-form"
// whatever we do with forwardref , we can have same functionality with react hook form
import { Editor } from "@tinymce/tinymce-react";

export default function RTE({name, control, label, defaultValue = ""}) {
    // parent will give control and take access to state like "ref"
  return (
    <div className='w-full'>
        {label && <label className='mb-1 pl-1 inline-block'>{label}</label>}

        <Controller
         name={name || "Editor"}
         control={control}
         // in the callback we want when we are rendering , and field might change so we track the field with a onchange event => changes are sync with both onChange's
         render={( {field: {onChange}} ) => (
            <Editor
             initialValue={defaultValue}
             apiKey='wcrolqf0zaqljkuwuyk0ogdd8am6e3e4m9q8elecs2nnond7'
             init={
                {
                    initialValue : defaultValue,
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
                }
             }
             onEditorChange={onChange}
             />
         )}
        />
    </div>
  )
}
// have to read docs for both React Hook form and tiny MCE

