import Head from 'next/head'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'
import SubHeader from '../components/SubHeader'

function Search({ results }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      <SubHeader />
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const data = await fetch('http://localhost:3000/api/searchresults').then(
    (res) => res.json()
  )

  return {
    props: {
      results: data.response,
    },
  }
}
