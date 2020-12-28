import React, { useEffect, useState } from "react";
import Card from "../components/card/card";
import Layout from "../layout/layout";
import http from "../services/http";
import styles from "../styles/pages/about.module.css";

export default function Index() {
  const [botOnline, setStatus] = useState('UNKNOWN');

  useEffect(() => {
    http.get('/api/bot')
      .then(() => {
        setStatus('ONLINE');
      })
      .catch(() => {
        setStatus('OFFLINE');
      });
  }, []);

  const P = (props: any) => (<p className="pb-2">{props.children}</p>);
  const A = (props: any) => (<a target={props.target} href={props.href} className="text-blue-400 hover:underline">{props.children}</a>);

  const BotStatus = () => {
    if(botOnline == 'ONLINE') {
      return <i className="inline-block w-3 h-3 ml-2 rounded-full bg-green-400" title="Bot is online.">&nbsp;</i>;
    }
    else if(botOnline == 'OFFLINE') {
      return <i className="inline-block w-3 h-3 ml-2 rounded-full bg-red-500" title="Bot is offline!">&nbsp;</i>;
    }
    else {
      return <i className="inline-block w-3 h-3 ml-2 rounded-full bg-gray-400" title="Bot is at unknown state.">&nbsp;</i>;
    }
  }

  return (
    <Layout>
      <div className={styles.main}>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="text-2xl font-semibold">DISCLAIMER</div>
            <div className="pt-4">
              <P>This project is a fan work and it is <strong>NOT</strong> affiliated with Hololive official, CoverCorp, and/or any related company.</P>
            </div>
          </Card.Body>
        </Card>

        <Card shadow className="bg-white mb-4">
          <Card.Body>
            <div className="flex items-center">
              <span className="text-2xl font-semibold">Korone Clipper Bot</span>
              <BotStatus/>
            </div>
            <div className="pt-4">
              <P>Bot Repository: <A target="_blank" href="https://github.com/rzfury/korone-clipper-bot">https://github.com/rzfury/korone-clipper-bot</A></P>
              <P>This is a Facebook Page Bot Project, a program that automatically post something to a Facebook Page with a given intervals. (e.g. once every hour)</P>
              <P>This bot post a random clip video from a random video on <A href="https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1">Korone Inugami's Channel</A> to a <A href="https://web.facebook.com/randomKoroneClips">Facebook Page</A> every hour.</P>
              <P>This bot is written with Typescript and developed with <A href="https://nodejs.org/en/">NodeJS</A>, along with <A href="https://ffmpeg.org/">FFMPEG</A> to clip the stream, <A href="https://firebase.google.com/">Firebase</A> for the database and storage, and it's hosted on <A href="https://www.heroku.com/">heroku</A>.</P>
              <P>(P.S.: The bot actually can generate clip from any youtube channel. This project specify the bot to generate clip from Korone's channel)</P>
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
