import Head from "next/head";
import {useSession} from "next-auth/client";
import {GetServerSideProps} from "next";
import ExperienceBar from "../components/ExperienceBar";  
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import Loader from "../components/Loader";
import Login from "../containers/Login";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../context/CountdownContext";
import { ChallengesProvider } from "../context/ChallengesContext";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

function Home(props: HomeProps){

    const [session, loading] = useSession();

    if(loading) return <Loader />
    return (
      <>
      {!session ? (
        <Login/>
      ) : (
        <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
    
          <div className={styles.container}>
    
            <Head>
              <title>Inicio | move.it</title>
            </Head>
    
            <ExperienceBar/>
    
    
            <CountdownProvider>
              <section>
                <div>
                  <Profile/>
                  <CompletedChallenges/>
                  <Countdown/>
                </div>
    
                <div>
                  <ChallengeBox/>
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      )}
      </>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      }
    }
}  
export default Home; 