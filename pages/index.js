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
      <div className='app__body h-vw w-full flex pb-10'>
        <LeftSideBar />
        <Body />
      </div>
    </Layout>
  )
}
