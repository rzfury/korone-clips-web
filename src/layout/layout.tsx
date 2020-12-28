import React, { useState } from 'react';
import Head from 'next/head';
import conclass from '../utility/conclass';
import Nav from './navbar/navbar';
import SideBar from './sidebar/sidebar';

const sidebar = true;

export default function Layout(props: RazorWindProps.Layout) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarLinks: RazorWindProps.Sidebar.Link[] = [
    {
      links: [
        {
          label: "Home",
          href: '/'
        }
      ]
    },
    {
      label: "Korone Inugami (戌神ころね)",
      links: [
        {
          label: "Youtube",
          href: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1",
          target: '_blank'
        },
        {
          label: "Twitter",
          href: "https://twitter.com/inugamikorone",
          target: '_blank'
        }
      ]
    },
    {
      label: "Korone Clipper Bot",
      links: [
        {
          label: 'About',
          href: '/about'
        },
        {
          label: 'Facebook Page',
          href: 'https://web.facebook.com/randomKoroneClips',
          target: '_blank'
        }
      ]
    }
  ];

  const sidebarHandle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <React.Fragment>
      <Head>
        <title>{props.title || 'Random Korone Clips'}</title>
        <link rel="icon" href="/img/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex">
        {sidebar && <SideBar show={sidebarOpen} nav={{ brand: <img src="/img/icon.png" style={{ height: '32px' }} /> }} links={navbarLinks} />}
        {sidebar && <div className="sidebar-backdrop" onClick={sidebarHandle}></div>}
        <div className={conclass('wrapper-main', sidebarOpen && 'sidebar-open')}>
          <Nav sidebar={sidebar} isSidebarOpen={sidebarOpen} onToggleSidebar={sidebarHandle} brand="Random Korone Clips" links={[]} />
          <main className="pt-18 bg-gray-100 flex-grow">{props.children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}
