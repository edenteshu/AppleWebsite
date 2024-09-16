import React, { useEffect, useState } from "react";

function Youtube() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=date&key=AIzaSyDzbQfky6PeKlMqEXrGr9Sm_P6cFLPOiho"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeVideos(data.items);
      });
  }, []);

  return (
    <section className="youtube-videos-wrapper">
      <div className="all-videos-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                Latest Videos <br />
              </div>
            </div>
            {youtubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = "https://www.youtube.com/watch?v=${vidId}";
              return (
                <div
                  key={i}
                  className="col-sm-12 col-md-6 col-lg-4 video-container"
                >
                  <div className="single-video-wrapper">
                    <div className="video-thumbnails">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="video-info-wrapper">
                      <div className="video-title">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="video-desc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
