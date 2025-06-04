import { BodyProps } from '@/models/PageBodyProps'
import React from 'react'
import PageMenu from './components/PageMenu/PageMenu'

function PageBody(Props: BodyProps) {
  return (
    <div className="w-full">
        <PageMenu menuOptions={Props.menuOptions}/>
    </div>
  )
}

export default PageBody