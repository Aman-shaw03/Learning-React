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
        // whatever parent form/component will give control , it will take that
        render={() => ()}
        />
    </div>
  )
}
