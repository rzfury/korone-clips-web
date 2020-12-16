import React from "react";
import Image from "next/image";
import _ from 'lodash';

import Card from "../components/card/card";
import Layout from "../layout/layout";
import http from "../services/http";

import Button from "../components/button";
import conclass from "../utility/conclass";
import formatClock from "../utility/formatClock";
import styles from "../styles/pages/index.module.css";

export default class Index extends React.Component<any, any> {
  elVideoPlayer = React.createRef<HTMLVideoElement>();
  elVideoSource = React.createRef<HTMLSourceElement>();

  constructor(props: any) {
    super(props);

    this.state = {
      liveStatus: {},
      clips: [],
      isLoadingClips: false,
      currentPage: 1,
      totalClips: 0,
      playVideoOverlay: false
    }
  }

  async componentDidMount() {
    this.loadClipList();
    this.getLiveStatus();
  }

  async loadClipList(page: number = 1) {
    this.setState({ isLoadingClips: true });
    await http.get(`/api/clips?sort=desc&page=${page}`)
      .then((res: any) => {
        this.setState({ clips: res.data, currentPage: page, totalClips: res.total });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoadingClips: false });
      })
  }

  async getLiveStatus() {
    await http.get('/api/live')
      .then((res) => {
        this.setState({ liveStatus: res });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleLoadMore = () => {
    this.loadClipList(this.state.currentPage + 1);
  }

  handleDownload = (url: string) => {
    window.location.href = url;
  }

  onPlayVideo = async (url: string) => {
    await this.setState({
      playVideoOverlay: true
    });

    this.elVideoSource.current.src = url;
    this.elVideoPlayer.current.load();
    this.elVideoPlayer.current.play();
  }

  renderClipList = () => {
    const { clips } = this.state;

    return clips.map(item => {
      return this.renderClipListItem(item);
    });
  }

  renderClipListItem = (item: { id: string, data: any }) => {
    return (
      <div className="w-full sm:w-1/4 p-2">
        <Card shadow>
          <a className="cursor-pointer" onClick={() => this.onPlayVideo(item.data?.fileUrl)}>            
            <Image src="/img/temp/GSwv15Nd8Ng.jpg" width="1280" height="720" />
          </a>
          <Card.Body className="py-1 pr-2 h-fit">
            <div className="flex w-full justify-between">
              <div className="w-3/4">
                <div className="block text-gray-400 text-xs">[ {formatClock(item.data?.clipTimestamp)} - {formatClock(item.data?.clipTimestamp + 5)} ]</div>
                <div className="truncate text-md">{item.data?.stream_title}</div>
              </div>
              <div className="">
                <Button onClick={() => this.handleDownload(item.data?.fileUrl)} rounded className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className={styles.main}>
          <Card shadow className={conclass('bg-white mb-4', _.isEmpty(this.state.liveStatus) && 'hidden')}>
            <Card.Body>
              <div className="block sm:flex">
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: 'red' }}>&nbsp;</span>
                  <span className="ml-2 text-xl">LIVE NOW</span>
                </div>
                <a href={`https://www.youtube.com/watch?v=${this.state.liveStatus?.yt_video_key}`}>
                  <span className="ml-2 text-xl text-blue-500">{this.state.liveStatus?.title}</span>
                </a>
              </div>
            </Card.Body>
          </Card>

          <Card shadow className="bg-white">
            <Card.Body>
              <div className="mb-1 text-xl">Latest Clips</div>
              <div className="flex flex-wrap">
                {this.renderClipList()}
              </div>
              <div className={conclass(this.isLoadedAll() ? 'hidden' : 'flex justify-center mt-4')}>
                <Button onClick={this.handleLoadMore} disabled={this.state.isLoadingClips}>More</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className={conclass(styles.overlayVideo, this.state.playVideoOverlay && styles.show)}>
          <div className={this.state.playVideoOverlay ? 'fixed inset-0' : 'hidden'} onClick={() => this.setState({ playVideoOverlay: false })}></div>
          <video ref={this.elVideoPlayer} controls className={styles.video}>
            <source ref={this.elVideoSource} src={this.state.playVideoUrl} type="video/mp4"/>
          </video>
        </div>
      </Layout>
    )
  }

  isLoadedAll = () => {
    return this.state.clips.length >= this.state.totalClips;
  }
}
