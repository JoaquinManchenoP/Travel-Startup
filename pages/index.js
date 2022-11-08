import Header from '../components/Header/Header'
import Layout from '../components/Layouts/Layout'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Body from '../components/Body/Body';
import FilterSection from '../components/FilterSection/FilterSection';

export default function index() {

  return (
    <Layout>
      <Header />
      <FilterSection />
      <div className='flex w-full pb-10 app__body h-vw'>
        <LeftSideBar />
        <Body />
      </div>
    </Layout>
  )
}
