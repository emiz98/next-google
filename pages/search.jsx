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
  const base_url = process.env.NEXTAUTH_URL
  const data = await fetch(`${base_url}/api/searchresults`).then((res) =>
    res.json()
  )

  return {
    props: {
      results: data.response,
    },
  }
}
