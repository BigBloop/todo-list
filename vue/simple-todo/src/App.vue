<template>
  <div
    class="container d-flex align-items-center justify-content-center flex-column"
    style="min-height: 100vh"
  >
    <h1>MESSENGER 2.0</h1>
    <a>powered by kape and tinapay</a>
    <!-- input section -->
    <div class="container m-2">
      <input
        v-model="item"
        class="form-control"
        type="text"
        placeholder="Add todo"
        aria-label="default input example"
      />
      <button
        type="button"
        class="btn btn-success my-2"
        :disabled="addTodoDisabled"
        @click="AddItem()"
      >
        Add Todo
      </button>
    </div>

    <!-- list body -->
    <ul class="list-group" style="min-width: 100%">
      <!-- list item -->
      <li
        v-for="item in items"
        :key="item._id"
        class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div class="d-flex align-items-center">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
            v-model="item.done"
            @change="UpdateTodoStatus($event, item._id, item.done)"
          />
          {{ item.todo }}
        </div>

        <div class="d-flex justify-content-between gap-3">
          <!-- modal toggle button -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="InitModal(item.todo, item._id)"
          >
            Edit Todo
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
                    Edit Todo
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
                    :disabled="editTodoDisabled"
                    @click="EditItem(update_item_id)"
                  >
                    Commit Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- remove item -->
          <!-- <div class="modal-dialog modal-dialog-centered"> -->
          <button type="button" @click="DeleteItem(item._id)" class="btn">
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
      update_item_id: "",
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
      this.item = "";
    },
    async EditItem(item_id) {
      let res = await axios.put(baseURL + "/update/" + item_id, {
        todo: this.update_item,
      });
      this.GetItems();
      console.log(res);
    },
    async UpdateTodoStatus(e, id, status) {
      const res = await axios.put(baseURL + "/update/status/" + id, {
        status: status,
      });
      this.GetItems();
      console.log(res);
    },
    async DeleteItem(item_id) {
      let res = await axios.delete(baseURL + "/delete/" + item_id);
      this.GetItems();
      console.log(res);
    },
    InitModal(todo, id) {
      this.update_item = todo;
      this.update_item_id = id;
    },
  },
  computed: {
    addTodoDisabled() {
      return this.item.length === 0;
    },
    editTodoDisabled() {
      return this.update_item.length === 0;
    },
  },
};
</script>
