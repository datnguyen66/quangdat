import { Fragment } from 'react'
import HomeComponent from '@/component/Home'
import CustomCursor from '@/component/Cursor'

export default function Home() {
  return (
    <Fragment>
      <CustomCursor />
      <HomeComponent/>
      
    </Fragment>
  )
}
