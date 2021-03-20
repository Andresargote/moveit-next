import Head from "next/head";
import LoginWithGithub from "../components/LoginWithGithub";
import Loader from "../components/Loader";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();
  if(loading) {
    return <Loader />
  }
  if (session) {
    router.push("/home");
  }
  return (
      <>
      {!session && (
        <>
          <Head>
            <title>Login | moveit</title>
          </Head>
          <LoginWithGithub/>
        </>
      )}
      </>
  )
}