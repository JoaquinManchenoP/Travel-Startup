import Header from '../components/Header/Header'
import Layout from '../components/Layout'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Body from '../components/Body/Body';
import FilterSection from '../components/FilterSection/FilterSection';

export default function index() {


  return (
    <Layout>
      <Header />
      <FilterSection />
      <div className='app__body h-full w-full flex'>
        <LeftSideBar />
        <Body />
      </div>
    </Layout>
  )
}
