<template>
  <div class="container d-flex align-items-center justify-content-center flex-column" style="min-height: 100vh">
    <!-- input section -->
    <div class="container m-2">
      <input
        class="form-control"
        type="text"
        placeholder="create entry"
        aria-label="default input example"
      />
      <div class="clearfix mx-5 my-2">
        <button type="button" class="btn btn-success float-start">
          Create Entry
        </button>
        <button type="button" class="btn btn-danger float-end">
          Delete Entry
        </button>
      </div>
    </div>

    <!-- list body -->
    <ul class="list-group" style="min-width: 100%">
      <!-- list item -->
      <li
        class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div class="d-flex align-items-center">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Item Name #1
        </div>

        <div class="d-flex justify-content-between gap-3">
          <!-- modal toggle button -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit Task
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit Task
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="create entry"
                    aria-label="default input example"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- remove item -->
          <div class="modal-dialog modal-dialog-centered">
            <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
              <i class="fas fa-times text-primary"></i>
            </a>
          </div>
        </div>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div class="d-flex align-items-center">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Item Name #2
        </div>

        <div class="d-flex justify-content-between gap-3">
          <!-- modal toggle button -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit Task
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit Task
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="create entry"
                    aria-label="default input example"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- remove item -->
          <div class="modal-dialog modal-dialog-centered">
            <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
              <i class="fas fa-times text-primary"></i>
            </a>
          </div>
        </div>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div class="d-flex align-items-center">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
          />
          Item Name #3
        </div>

        <div class="d-flex justify-content-between gap-3">
          <!-- modal toggle button -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit Task
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit Task
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="create entry"
                    aria-label="default input example"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- remove item -->
          <div class="modal-dialog modal-dialog-centered">
            <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
              <i class="fas fa-times text-primary"></i>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>
