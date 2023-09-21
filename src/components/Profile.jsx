import "../styles/profile.css";
export default  function Profile() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                      <div className="m-b-25">
                      <img src="https://cdn-icons-png.flaticon.com/128/9775/9775776.png" className="img-radius" alt="User Profile"/>
                      </div>
                      <h6 className="f-w-600">Hembo Tingor</h6>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                        <div className="row">
                        <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                        </div>
                        <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">98979989898</h6>
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