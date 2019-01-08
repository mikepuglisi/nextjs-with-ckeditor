import { Component } from 'react'
import dynamic from 'next/dynamic'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorDynamic = dynamic(() => import('@ckeditor/ckeditor5-react'), {
  ssr: false
})

class CKEditor extends Component {
  render() {
    return <div>
      <CKEditorDynamic
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
      />
    </div>
  }
}

export default CKEditor;