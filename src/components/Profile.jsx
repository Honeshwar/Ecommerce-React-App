import "../styles/profile.css";
export default  function Profile() {
    return (
      <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                      <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                      <div class="m-b-25">
                      <img src="https://cdn-icons-png.flaticon.com/128/9775/9775776.png" class="img-radius" alt="User-Profile-Image"/>
                      </div>
                      <h6 class="f-w-600">Hembo Tingor</h6>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                      </div>
                      <div class="col-sm-8">
                        <div class="card-block">
                        {/* <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6> */}
                        <div class="row">
                        <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                        </div>
                        <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Phone</p>
                        <h6 class="text-muted f-w-400">98979989898</h6>
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