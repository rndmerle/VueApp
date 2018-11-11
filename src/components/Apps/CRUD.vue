<template>
  <div class="container" id="wqmt">

    <section>
      <h1>CRUD App</h1>

      <br>

      <hr>

      <!-- <b-field grouped>
        <p class="control"><button class="button is-link" @click="isAddModalActive = true">+ Add Item</button></p>
        <p class="control is-expanded"><b-input type="search" placeholder="Search..." v-model="searchTerm" @click.prevent="fetchItems()"></b-input></p>
        <p class="control"><button class="button is-link" @click.prevent="searchItems()">Search</button></p>
      </b-field> -->

      <b-field grouped>
        <div class="control">
          <a class="button is-info" @click="isAddModalActive = true">
            + Add Item
          </a>
        </div>

        <div class="field has-addons is-expanded">
          <div class="control is-expanded">
            <input class="input" type="search" placeholder="Search Items" v-model="searchTerm">
          </div>

          <div class="control">
            <a class="button is-info" @click.prevent="searchItems()">
              Search
            </a>
          </div>
        </div>

      </b-field>

      <b-modal :active.sync="isAddModalActive" :width="640" scroll="keep">

        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Add Item</p>
            </header>

            <section class="modal-card-body">
              <b-field horizontal label="Delivery">
                <b-input name="subject" expanded required v-model="delivery"></b-input>
              </b-field>

              <b-field horizontal label="Issue">
                <b-select placeholder="Select a Issue" v-model="issue">
                  <option value="Packing Slip - Missing">Packing Slip - Missing</option>
                  <option value="Packing Slip - Incorrect Data">Packing Slip - Incorrect Data</option>
                  <option value="Packing Slip - Printed on Double Sided Paper">Packing Slip - Printed on Double Sided Paper</option>
                  <option value="Packing Slip - Missing Serial Number">Packing Slip - Missing Serial Number</option>
                  <option value="Packing Slip - Incorrect Serial Number">Packing Slip - Incorrect Serial Number</option>
                  <option value="Packing Slip - Other (Enter Detail)">Packing Slip - Other (Enter Detail)</option>
                  <option value="Placard - Missing">Placard - Missing</option>
                  <option value="Placard - Incorrect Data">Placard - Incorrect Data</option>
                  <option value="Placard - Other (Enter Detail)">Placard - Other (Enter Detail)</option>
                  <option value="Damage - Damaged Packaging">Damage - Damaged Packaging</option>
                  <option value="Damage - Improperly Packaged">Damage - Improperly Packaged</option>
                  <option value="Damage - Other (Enter Detail)">Damage - Other (Enter Detail)</option>
                  <option value="Other (Enter Detail)">Other (Enter Detail)</option>
                </b-select>
              </b-field>

              <b-field horizontal label="Detail">
                <b-input type="textarea" v-model="detail"></b-input>
              </b-field>
            </section>

            <footer class="modal-card-foot">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-link is-right" @click="postItem(), isAddModalActive = false">Save</a>
                </p>
                <p class="control">
                  <a class="button is-right" @click="isAddModalActive = false">Cancel</a>
                </p>
              </div>
            </footer>
          </div>
        </form>
      </b-modal>

    </section>

    <hr>

    <!-- Table -->
    <section>
      <b-table
        :data="items"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :paginated="isPaginated"
        :per-page="20"
        :default-sort-direction="defaultSortDirection"
        default-sort="updated_at">

        <template slot-scope="props">
          <b-table-column field="delivery" label="Delivery" width="100" sortable numeric>
            {{ props.row.delivery }}
          </b-table-column>
          <b-table-column field="issue" label="Issue" width="300" sortable>
            {{ props.row.issue }}
          </b-table-column>
          <b-table-column field="detail" label="Detail">
            {{ props.row.detail }}
          </b-table-column>
          <b-table-column field="updated_at" label="Update Date" width="180" sortable>
            {{ new Date(props.row.updated_at).toLocaleString() }}
          </b-table-column>
          <b-table-column label="Actions" width="100" centered>
            <button class="button is-small is-danger" @click="fetchItem(props.row.pk), isEditModalActive = true">Edit</button>
          </b-table-column>
        </template>
      </b-table>
    </section>

    <!-- Edit Modal -->
    <b-modal :active.sync="isEditModalActive" :width="640" scroll="keep">

      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Edit Item</p>
          </header>

          <section class="modal-card-body">
            <b-field horizontal label="Subject">
              <b-input name="subject" expanded required v-model="item.delivery"></b-input>
            </b-field>

            <b-field horizontal label="Issue">
              <b-select placeholder="Select a Issue" v-model="item.issue">
                <option value="Packing Slip - Missing">Packing Slip - Missing</option>
                <option value="Packing Slip - Incorrect Data">Packing Slip - Incorrect Data</option>
                <option value="Packing Slip - Printed on Double Sided Paper">Packing Slip - Printed on Double Sided Paper</option>
                <option value="Packing Slip - Missing Serial Number">Packing Slip - Missing Serial Number</option>
                <option value="Packing Slip - Incorrect Serial Number">Packing Slip - Incorrect Serial Number</option>
                <option value="Packing Slip - Other (Enter Detail)">Packing Slip - Other (Enter Detail)</option>
                <option value="Placard - Missing">Placard - Missing</option>
                <option value="Placard - Incorrect Data">Placard - Incorrect Data</option>
                <option value="Placard - Other (Enter Detail)">Placard - Other (Enter Detail)</option>
                <option value="Damage - Damaged Packaging">Damage - Damaged Packaging</option>
                <option value="Damage - Improperly Packaged">Damage - Improperly Packaged</option>
                <option value="Damage - Other (Enter Detail)">Damage - Other (Enter Detail)</option>
                <option value="Other (Enter Detail)">Other (Enter Detail)</option>
              </b-select>
            </b-field>

            <b-field horizontal label="Detail">
              <b-input type="textarea" v-model="item.detail"></b-input>
            </b-field>
          </section>

          <footer class="modal-card-foot">

            <div class="field is-grouped">
              <p class="control">
                <a class="button is-link is-right" @click="updateItem(item.pk, item.delivery, item.issue, item.detail), isEditModalActive = false">Save</a>
                <!-- <a class="button is-link is-right" @click="updateItem(), isEditModalActive = false">Save</a> -->
              </p>
              <p class="control">
                <a class="button is-right" @click="isEditModalActive = false">Cancel</a>
              </p>
              <p class="control">
                <a class="button is-right is-danger" @click="deleteItem(item.pk), isEditModalActive = false">Delete</a>
              </p>
            </div>

          </footer>
        </div>
      </form>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'WQMT',
  data () {
    return {
      loading: true,
      searchTerm: '',

      items: [],
      item: [],
      delivery: null,
      detail: null,
      issue: null,
      itemID: null,

      isAddModalActive: false,
      isEditModalActive: false,

      isPaginated: true,
      isPaginationSimple: false,
      isStriped: true,
      isNarrowed: true,
      defaultSortDirection: 'asc',
      perPage: 20
    }
  },

  mounted () {
    this.fetchItems()
  },

  methods: {

    fetchItems () {
      this.$backend.$fetchItems().then(responseData => {
        this.items = responseData
      })
    },

    fetchItem (itemID) {
      this.$backend.$fetchItem(itemID).then(responseData => {
        this.item = responseData
        this.delivery = ''
        this.issue = ''
        this.detail = ''
      })
    },

    searchItems () {
      this.$backend.$searchItems(this.searchTerm).then(responseData => {
        this.items = responseData
      })
    },

    postItem () {
      const payload = { delivery: this.delivery, issue_category: 'test', issue: this.issue, detail: this.detail }
      this.$backend.$postItem(payload).then(() => {
        this.fetchItems()
        this.delivery = ''
        this.issue = ''
        this.detail = ''
      })
    },

    updateItem (itemID, itemDelivery, itemIssue, itemDetail) {
      const payload = { delivery: itemDelivery, issue_category: 'test', issue: itemIssue, detail: itemDetail }
      this.$backend.$updateItem(itemID, payload).then(() => {
        this.fetchItems()
        this.delivery = ''
        this.detail = ''
      })
    },

    deleteItem (itemID) {
      this.$backend.$deleteItem(itemID).then(() => {
        this.items = this.items.filter(i => i.pk !== itemID)
        this.fetchItems()
      })
    }

  }
}
</script>

<style>

#wqmt{
  padding: 20px;
}

h1{
  font-size: 30px;
}

thead {
  background-color: lightblue;
  font-size: 16px;
}

</style>
