import React from 'react'
import { fetchList } from '@/api/artical'

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log('执行到这里')
    fetchList().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home
