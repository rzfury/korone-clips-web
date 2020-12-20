import React from "react";
import Card from "../components/card/card";
import Layout from "../layout/layout";
import styles from "../styles/pages/about.module.css";

export default function Index() {
  const P = (props: any) => {
    return <p className="pb-2">{props.children}</p>
  }

  const A = (props: any) => {
    return <a target={props.target} href={props.href} className="text-blue-400 hover:underline">{props.children}</a>
  }

  return (
    <Layout>
      <div className={styles.main}>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="text-2xl font-semibold">DISCLAIMER</div>
            <div className="pt-4">
              <P>This projects is a fan work and it is <strong>NOT</strong> affiliated with Hololive official, CoverCorp, and/or any related company.</P>
            </div>
          </Card.Body>
        </Card>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="text-2xl font-semibold">Korone Clipper Bot</div>
            <div className="pt-4">
              <P><span className="line-through">Bot Repository: <A href="">https://</A></span> Not ready.</P>
              <P>This is a Facebook Page Bot Project, a program that automatically post something to a Facebook Page with a given intervals. (e.g. once every hour)</P>
              <P>This bot post a random clip video from a random video on <A href="https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1">Korone Inugami's Channel</A> to a <A href="https://web.facebook.com/randomKoroneClips">Facebook Page</A> every hour.</P>
              <P>This bot uses <A href="https://nodejs.org/en/">NodeJS</A> as it's backend, along with <A href="https://firebase.google.com/">Firebase</A> for the database and storage. The backend is hosted on <A href="https://www.heroku.com/"></A>heroku.</P>
            </div>
          </Card.Body>
        </Card>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="text-2xl font-semibold">About this website</div>
            <div className="pt-4">
              <P>Website Repository: <A target="_blank" href="https://github.com/rzfury/korone-clips-web">https://github.com/rzfury/korone-clips-web</A></P>
              <P>This is a website for playing and downloading clips that already been posted on the Facebook Page.</P>
              <P>This website also display a card if Korone is currently streaming or there's upcoming stream.</P>
              <P>This website uses <A href="https://nextjs.org/">NextJS</A> as development framework, <A href="https://tailwindcss.com/">Tailwind</A> as CSS Framework, Deployed with <A href="https://vercel.com/">Vercel</A>.</P>
            </div>
          </Card.Body>
        </Card>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="text-2xl font-semibold">Credit</div>
            <div className="pt-4">
              <ul className="list-inside ml-4" style={{ listStyleType: 'disc' }}>
                <li>Developer : <A href="https://github.com/rzfury">RZFury</A></li>
                <li>
                  Assets:
                  <ul className="list-inside ml-4" style={{ listStyleType: 'circle' }}>
                    <li><A href="https://korone.icu/">korone.icu</A> (Korone finger icon)</li>
                    <li><A href="https://heroicons.com/">heroicons</A></li>
                    <li><A href="https://loading.io/">loading.io</A> (Loading Icons)</li>
                  </ul>
                </li>
                <li>
                  Other:
                  <ul className="list-inside ml-4" style={{ listStyleType: 'circle' }}>
                    <li><A href="https://hololive.jetri.co/">HoloTools</A> (HoloTools API)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}
