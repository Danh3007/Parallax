import React, { Component } from "react";

class TrangChu extends Component {
  render() {
    return (
      <div>
        <a id="menu" />
        <div className="menu-margin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Special Menu</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            <div className="row inner-menu-box">
              <div className="col-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
                  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Drinks</a>
                  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lunch</a>
                  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-01.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 1</h4>
                            <button>mua</button>
                            <h5> $7.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-02.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 2</h4>
                            <button>mua</button>
                            <h5> $9.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-03.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 3</h4>
                            <button>mua</button>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-04.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 1</h4>
                            <button>mua</button>
                            <h5> $15.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-05.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 2</h4>
                            <button>mua</button>
                            <h5> $18.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-06.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 3</h4>
                            <button>mua</button>
                            <h5> $20.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-07.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 1</h4>
                            <button>mua</button>
                            <h5> $25.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-08.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 2</h4>
                            <button>mua</button>
                            <h5> $22.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-09.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 3</h4>
                            <button>mua</button>
                            <h5> $24.79</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-01.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 1</h4>
                            <button>mua</button>
                            <h5> $7.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-02.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 2</h4>
                            <button>mua</button>
                            <h5> $9.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-03.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Drinks 3</h4>
                            <button>mua</button>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-04.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 1</h4>
                            <button>mua</button>
                            <h5> $15.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-05.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 2</h4>
                            <button>mua</button>
                            <h5> $18.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-06.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Lunch 3</h4>
                            <button>mua</button>
                            <h5> $20.79</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-07.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 1</h4>
                            <button>mua</button>
                            <h5> $25.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-08.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 2</h4>
                            <button>mua</button>
                            <h5> $22.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img src="images_niemvuilon/img-09.jpg" className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>Special Dinner 3</h4>
                            <button>mua</button>
                            <h5> $24.79</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrangChu;
