import { Component } from 'react'
import dynamic from 'next/dynamic'

const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react'), {
  ssr: false
})

const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic'), {
  ssr: false
})

class Index extends Component {
  static getInitialProps({ req, query }) {
    return {}
  }
  render() {
    {console.log('ClassicEditor should have a create method', ClassicEditor)}
    return <div>
      CKEditor Example: How can I import "ClassicEditor" library (which is not a react component), in a way that it can be passed as a property to CKEditor component?
      {/* <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
      /> */}
    </div>
  }
}
export default Index