<template>
  <div
    class="container d-flex align-items-center justify-content-center flex-column"
    style="min-height: 100vh"
  >
    <!-- input section -->
    <div class="container m-2">
      <input
        v-model="item"
        class="form-control"
        type="text"
        placeholder="create entry"
        aria-label="default input example"
      />
      <div class="clearfix mx-5 my-2">
        <button
          type="button"
          class="btn btn-success float-start"
          @click="AddItem()"
        >
          Create Entry
        </button>
        <button type="button" class="btn btn-danger float-end">
          Delete Entry
        </button>
      </div>
    </div>

    <!-- list body -->
    <ul
      class="list-group"
      style="min-width: 100%"
      v-for="(item, i) in items"
      :key="item._id"
    >
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
          {{ items[i].todo }}
        </div>

        <div class="d-flex justify-content-between gap-3">
          <!-- modal toggle button -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="update_item = items[i].todo"
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
                    v-model="update_item"
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="EditItem(items[i]._id)"
                  >
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- remove item -->
          <!-- <div class="modal-dialog modal-dialog-centered"> -->
          <button type="button" @click="DeleteItem(items[i]._id, i)">
            <i class="fas fa-times text-primary"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
let baseURL = "http://localhost:3000/api/todo";
export default {
  data() {
    return {
      item: "",
      items: [],
      update_item: "",
    };
  },
  async mounted() {
    this.GetItems();
    console.log(this.items);
  },
  methods: {
    async GetItems() {
      const response = await axios.get(baseURL + "/");
      this.items = response.data;
    },
    async GetItem(item_id) {
      let res = await axios.get(baseURL + "/" + item_id);
      console.log(res);
    },
    async AddItem() {
      let res = await axios.post(baseURL + "/add/", { todo: this.item });
      console.log(res);
      this.GetItems();
    },
    async EditItem(item_id) {
      let res = await axios.post(baseURL + "/update/" + item_id, {
        todo: this.update_item,
      });
      this.GetItems();
      console.log(res);
    },
    async DeleteItem(item_id) {
      let res = await axios.delete(baseURL + "/delete/" + item_id);
      this.GetItems();
      console.log(res);
    },
  },
};
</script>
