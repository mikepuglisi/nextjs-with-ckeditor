import { Component } from 'react'
import dynamic from 'next/dynamic'
import CKEditor from '../components/CKEditor'

// const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react'), {
//   ssr: false
// })

// const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic'), {
//   ssr: false
// })

class ComponentAttempt extends Component {
  static getInitialProps({ req, query }) {
    return {}
  }
  render() {

    return <div>

      <CKEditor />
    </div>
  }
}
export default ComponentAttempt