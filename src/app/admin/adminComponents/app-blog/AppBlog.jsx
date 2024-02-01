import React from "react";

const AppBlog = () => {
  return (
    <div className="page-body blog-app px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-3">
      <div className="container-fluid">
        {/* Section: latest-post */}
        <div className="section latest-post">
          <div className="container">
            <div className="row g-xl-4 g-3 row-deck">
              <div className="col-xl-8 col-lg-12">
                <div className="card overflow-hidden">
                  <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators justify-content-start">
                      <button
                        type="button"
                        data-bs-target="#blog_slider"
                        data-bs-slide-to={0}
                        className=""
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#blog_slider"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#blog_slider"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                        className="active"
                        aria-current="true"
                      />
                    </div>
                    <div className="carousel-inner">
                      <div
                        className="thumb-overlay carousel-item"
                        style={{ height: 500 }}
                      >
                        <img
                          src="../assets/img/gallery/1.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="content-overlay carousel-caption d-none d-md-block text-start">
                          <span className="bg-primary text-light px-1 small text-uppercase rounded mb-3 d-inline-flex">
                            Design
                          </span>
                          <a
                            href="app-blog-detail.html"
                            className="h3 d-flex text-white"
                          >
                            Beachmaster Elephant Seal Fights off Rival Male, The
                            match is uncompromising
                          </a>
                          <span className="text-muted">20 minutes ago</span>
                          <span className="text-muted px-3">|</span>
                          <span className="text-muted">3k Views</span>
                        </div>
                      </div>
                      <div
                        className="thumb-overlay carousel-item"
                        style={{ height: 500 }}
                      >
                        <img
                          src="../assets/img/gallery/2.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="content-overlay carousel-caption d-none d-md-block text-start">
                          <span className="bg-danger text-light px-1 small text-uppercase rounded mb-3 d-inline-flex">
                            Angular
                          </span>
                          <a
                            href="app-blog-detail.html"
                            className="h3 d-flex text-white"
                          >
                            This genius photo experiment shows we are all just
                            sheeple in the consumer matrix
                          </a>
                          <span className="text-muted">30 minutes ago</span>
                          <span className="text-muted px-3">|</span>
                          <span className="text-muted">8k Views</span>
                        </div>
                      </div>
                      <div
                        className="thumb-overlay carousel-item active"
                        style={{ height: 500 }}
                      >
                        <img
                          src="../assets/img/gallery/3.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="content-overlay carousel-caption d-none d-md-block text-start">
                          <span className="bg-secondary text-light px-1 small text-uppercase rounded mb-3 d-inline-flex">
                            Marketing
                          </span>
                          <a
                            href="app-blog-detail.html"
                            className="h3 d-flex text-white"
                          >
                            Beachmaster Elephant Seal Fights off Rival Male, The
                            match is uncompromising
                          </a>
                          <span className="text-muted">45 minutes ago</span>
                          <span className="text-muted px-3">|</span>
                          <span className="text-muted">53k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card overflow-hidden lift">
                  <img
                    src="../assets/img/gallery/10.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <a
                        className="small fw-bold text-info text-uppercase"
                        href="#"
                      >
                        Design
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-light mb-xl-4 mb-3">
                        <a
                          className="color-600"
                          href="app-blog-detail.html"
                          title=""
                        >
                          Contrary to popular belief, not simply random text
                        </a>
                      </h3>
                      <div className="small text-muted text-uppercase">
                        <span className="post-on">27 August</span>
                        <span className="mx-2 time-reading has-dot">
                          12 mins read
                        </span>
                        <span className="post-by has-dot">23k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card overflow-hidden lift">
                  <img
                    src="../assets/img/gallery/11.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <a
                        className="small fw-bold text-success text-uppercase"
                        href="#"
                      >
                        Lifestyle.
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-light mb-xl-4 mb-3">
                        <a
                          className="color-600"
                          href="app-blog-detail.html"
                          title=""
                        >
                          Life and Death in the Empire of the Tiger
                        </a>
                      </h3>
                      <div className="small text-muted text-uppercase">
                        <span className="post-on">27 August</span>
                        <span className="mx-2 time-reading has-dot">
                          12 mins read
                        </span>
                        <span className="post-by has-dot">23k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card overflow-hidden lift">
                  <img
                    src="../assets/img/gallery/12.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <a
                        className="small fw-bold text-warning text-uppercase"
                        href="#"
                      >
                        Travel.
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-light mb-xl-4 mb-3">
                        <a
                          className="color-600"
                          href="app-blog-detail.html"
                          title=""
                        >
                          When Two Wheels Are Better Than Four
                        </a>
                      </h3>
                      <div className="small text-muted text-uppercase">
                        <span className="post-on">27 August</span>
                        <span className="mx-2 time-reading has-dot">
                          12 mins read
                        </span>
                        <span className="post-by has-dot">23k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card overflow-hidden lift">
                  <img
                    src="../assets/img/gallery/13.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <a
                        className="small fw-bold text-danger text-uppercase"
                        href="#"
                      >
                        Fashion.
                      </a>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-light mb-xl-4 mb-3">
                        <a className="color-600" href="#" title="">
                          it look like readable English packages and web
                        </a>
                      </h3>
                      <div className="small text-muted text-uppercase">
                        <span className="post-on">27 August</span>
                        <span className="mx-2 time-reading has-dot">
                          12 mins read
                        </span>
                        <span className="post-by has-dot">23k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .row end */}
          </div>
        </div>
        {/* Blog: marketing banner */}
        <div className="blog-banner py-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <a
                  target="_blank"
                  href="https://alui.thememakker.com/index.html"
                  title="LUNO Admin"
                >
                  <img
                    className="img-fluid rounded-4"
                    src="../assets/img/add-banner.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>{" "}
            {/* .row end */}
          </div>
        </div>
        {/* Blog: Latest posts */}
        <div className="blog-posts py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="text-uppercase mb-3 pb-2 border-bottom">
                  <strong>Latest</strong> posts
                </div>
                <div className="card bg-transparent border-0 mb-xl-5 mb-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <img
                        src="../assets/img/gallery/4.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                      <div className="ps-0 ps-md-4 pt-2 pt-md-0">
                        <div className="mb-2">
                          <a
                            className="small fw-bold text-info text-uppercase"
                            href="#"
                          >
                            Design
                          </a>
                        </div>
                        <a
                          href="#"
                          className="h4 d-flex mb-md-3 mb-2 color-600"
                        >
                          Helpful Tips for Working from Home as a Freelancer
                        </a>
                        <div className="small text-muted text-uppercase">
                          <span className="post-on">22 August</span>
                          <span className="mx-2 time-reading has-dot">
                            45 mins read
                          </span>
                          <span className="post-by has-dot">2k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent border-0 mb-xl-5 mb-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <img
                        src="../assets/img/gallery/5.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                      <div className="ps-0 ps-md-4 pt-2 pt-md-0">
                        <div className="mb-2">
                          <a
                            className="small fw-bold text-danger text-uppercase"
                            href="#"
                          >
                            FASHION.
                          </a>
                        </div>
                        <a
                          href="#"
                          className="h4 d-flex mb-md-3 mb-2 color-600"
                        >
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </a>
                        <div className="small text-muted text-uppercase">
                          <span className="post-on">21 August</span>
                          <span className="mx-2 time-reading has-dot">
                            45 mins read
                          </span>
                          <span className="post-by has-dot">2k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent border-0 mb-xl-5 mb-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <img
                        src="../assets/img/gallery/6.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                      <div className="ps-0 ps-md-4 pt-2 pt-md-0">
                        <div className="mb-2">
                          <a
                            className="small fw-bold text-info text-uppercase"
                            href="#"
                          >
                            Design
                          </a>
                        </div>
                        <a
                          href="#"
                          className="h4 d-flex mb-md-3 mb-2 color-600"
                        >
                          There are many variations of passages of Lorem Ipsum
                          available
                        </a>
                        <div className="small text-muted text-uppercase">
                          <span className="post-on">15 August</span>
                          <span className="mx-2 time-reading has-dot">
                            45 mins read
                          </span>
                          <span className="post-by has-dot">2k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent border-0 mb-xl-5 mb-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <img
                        src="../assets/img/gallery/7.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                      <div className="ps-0 ps-md-4 pt-2 pt-md-0">
                        <div className="mb-2">
                          <a
                            className="small fw-bold text-info text-uppercase"
                            href="#"
                          >
                            Design
                          </a>
                        </div>
                        <a
                          href="#"
                          className="h4 d-flex mb-md-3 mb-2 color-600"
                        >
                          It is a long established fact that a reader will be
                          distracted
                        </a>
                        <div className="small text-muted text-uppercase">
                          <span className="post-on">11 August</span>
                          <span className="mx-2 time-reading has-dot">
                            45 mins read
                          </span>
                          <span className="post-by has-dot">2k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-transparent border-0 mb-xl-5 mb-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <img
                        src="../assets/img/gallery/9.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                      <div className="ps-0 ps-md-4 pt-2 pt-md-0">
                        <div className="mb-2">
                          <a
                            className="small fw-bold text-info text-uppercase"
                            href="#"
                          >
                            Design
                          </a>
                        </div>
                        <a
                          href="#"
                          className="h4 d-flex mb-md-3 mb-2 color-600"
                        >
                          It is a long established fact that a reader will be
                          distracted
                        </a>
                        <div className="small text-muted text-uppercase">
                          <span className="post-on">11 August</span>
                          <span className="mx-2 time-reading has-dot">
                            45 mins read
                          </span>
                          <span className="post-by has-dot">2k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="mt-3">
                  <ul className="pagination">
                    <li className="page-item">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="text-uppercase mb-3 pb-2 border-bottom">
                  About <strong>Me</strong>
                </div>
                <div className="card bg-transparent border-0 mb-xl-4 mb-3">
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3">
                      <img
                        className="rounded img-thumbnail"
                        src="../assets/img/xs/avatar1.jpg"
                        alt="avatar lg"
                        title=""
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">
                        <a href="../page-profile.html" title="">
                          Allie Grater
                        </a>
                      </h5>
                      <span className="text-muted">Author</span>
                      <div>
                        <a className="pe-3" target="_blank" href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a className="pe-3" target="_blank" href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a className="pe-3" target="_blank" href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      The functional aspect comes first in the work process
                      because it's the core of the object: What is its purpose?
                      something else?
                    </p>
                    <a href="#" className="btn btn-lg btn-danger">
                      Connect With Me
                    </a>
                  </div>
                </div>
                <div className="mb-4 rounded-4 overflow-hidden">
                  <img
                    src="../assets/img/ads-01.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text-uppercase mb-3 pb-2 border-bottom">
                  <strong>Cate</strong>gories
                </div>
                <div className="card bg-transparent border-0 mb-xl-4 mb-3">
                  <div className="d-flex flex-wrap tag-group">
                    <a
                      href="#"
                      className="m-1 small tag py-1 px-3 border border-primary rounded lift"
                    >
                      Family
                    </a>
                    <a
                      href="#"
                      className="m-1 small tag py-1 px-3 border border-primary rounded lift"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="m-1 small tag py-1 px-3 border border-primary rounded lift bg-primary text-light"
                    >
                      UI/UX Designer
                    </a>
                    <a
                      href="#"
                      className="m-1 small tag py-1 px-3 border border-primary rounded lift"
                    >
                      ReactJs
                    </a>
                    <a
                      href="#"
                      className="m-1 small tag py-1 px-3 border border-primary rounded lift"
                    >
                      Angular
                    </a>
                  </div>
                </div>
                <div className="text-uppercase mb-3 pb-2 border-bottom">
                  <strong>Insta</strong>gram
                </div>
                <div className="card bg-transparent border-0 mb-xl-4 mb-3">
                  <div className="row g-1">
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/1.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/1.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/2.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/2.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/3.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/3.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/4.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/4.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/5.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/5.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/6.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/6.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/7.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/7.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/8.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/8.jpg"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="fancybox rounded d-block"
                        rel="ligthbox"
                        href="../assets/img/gallery/9.jpg"
                      >
                        <img
                          className="img-fluid rounded"
                          alt=""
                          src="../assets/img/gallery/9.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Plugin Js */}
                {/* Jquery Page Js */}
              </div>
            </div>{" "}
            {/* .row end */}
          </div>
        </div>
        {/* Blog: Trending Topics */}
        <div className="blog-topics py-5 bg-dark mb-5 border-bottom border-secondary border-3">
          <div className="container">
            <div className="row mb-3">
              <div className="col-6">
                <h5 className="mb-0 color-400">Trending Topics</h5>
              </div>
              <div className="col-6 text-end">
                <a className="" href="#">
                  See All Topics
                </a>
              </div>
            </div>
            <div className="row row-cols-xxl-6 cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2 g-1 row-deck">
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/1.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">Sports &amp; Fitness</h6>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/2.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">Travel</h6>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/3.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">lifestyle</h6>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/4.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">Health</h6>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/5.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">Animals</h6>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="card thumb-overlay text-center overflow-hidden lift"
                >
                  <img
                    className="card-img"
                    src="../assets/img/gallery/6.jpg"
                    alt="img hover"
                  />
                  <div className="card-img-overlay content-overlay d-flex align-items-end justify-content-center">
                    <h6 className="mb-0 text-white">Food &amp; Drink</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBlog;
