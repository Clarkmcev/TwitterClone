import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import TweetBox from '../components/TweetBox'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {

  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
        <Head>
        <title>Twitter 2.0</title>
        </Head>
      <main className="grid grid-cols-9"> 
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  }
}
