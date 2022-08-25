<template>
  <div class="container m-5">
    <!-- input section -->
    <div class="container m-2">
      <input class="form-control" type="text" placeholder="create entry" aria-label="default input example">
      <div class="clearfix mx-5 my-2">
        <button type="button" class="btn btn-success float-start">Create Entry</button>
        <button type="button" class="btn btn-danger float-end">Delete Entry</button>
      </div>
    </div>

    <!-- list body -->
    <ul class="list-group">
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
          Item Name
        </div>
        <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
          <i class="fas fa-times text-primary"></i>
        </a>
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
        <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
          <i class="fas fa-times text-primary"></i>
        </a>
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
        <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
          <i class="fas fa-times text-primary"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script></script>
