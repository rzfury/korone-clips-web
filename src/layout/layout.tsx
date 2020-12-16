import React, { useState } from 'react';
import conclass from '../utility/conclass';
import Nav from './navbar/navbar';
import SideBar from './sidebar/sidebar';

const sidebar = true;

export default function Layout(props: RazorWindProps.Layout) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarLinks: RazorWindProps.Navigation.Link[] = [
    {
      label: "Youtube",
      href: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q"
    }
  ];

  const sidebarHandle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex">
      {sidebar && <SideBar show={sidebarOpen} nav={{ brand: "" }} links={[{ links: navbarLinks }]}/>}
      {sidebar && <div className="sidebar-backdrop" onClick={sidebarHandle}></div>}
      <div className={conclass('wrapper-main', sidebarOpen && 'sidebar-open')}>
        <Nav sidebar={sidebar} isSidebarOpen={sidebarOpen} onToggleSidebar={sidebarHandle} brand="" links={navbarLinks}/>
        <main className="pt-18 bg-gray-100">{props.children}</main>
      </div>
    </div>
  );
}
