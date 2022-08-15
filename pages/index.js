import Header from '../components/Header/Header'
import Layout from '../components/Layout'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Body from '../components/Body/Body'
export default function index() {
  return (
    <Layout>
      <Header />
      <div className='app__body h-full w-full bg-gray-700 flex'>
        <LeftSideBar />
        <Body />
      </div>
    </Layout>
  )
}
