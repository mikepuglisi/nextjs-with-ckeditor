import { Component } from 'react'
import dynamic from 'next/dynamic'

const CKEditor = dynamic(() => import('../components/CKEditor'), {
  ssr: false
})

class ComponentAttempt extends Component {
  static getInitialProps({ req, query }) {
    return {}
  }
  render() {

    return <div>
      <CKEditor data="Some Default Data"/>
    </div>
  }
}
export default ComponentAttempt