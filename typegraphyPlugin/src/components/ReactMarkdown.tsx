import {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
~~~js
console.log('It works!')
~~~


`
const ReactMarkdownn= () => {


  return (
    <div>
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      <ReactMarkdown className='' children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  )
}

export default ReactMarkdownn