import React from 'react'
import routes from 'toc/toc'
import Folder from './Folder'
import File from './File'

let indexTOC = 0
let indexPage = 0

const r = routes.map((r, i) => {
    if (r.type === 'toc') {
      indexTOC++
      indexPage = 0
      return <Folder key={i} number={indexTOC} level={1}>{r.title}</Folder>
    } else {
      indexPage++
      return <File key={i} number={indexPage} path={r.path} status={r.status} level={2}>{r.title}</File>
    }
  }
)

const TOCOutline = () => {
  return (
    <div>
      {r}
    </div>
  )
}
export default TOCOutline
