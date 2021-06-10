<template>
  <v-data-table
    :headers="tableHeaders"
    :items="listWithIndex"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-select
                    :items="getCategoriesList"
                    label="Categories"
                    v-model="editedItem.category">
                   </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Value"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
 
<script>
import { mapGetters, mapMutations } from 'vuex'
// import Pagination from "../components/Pagination.vue";

export default {
    components: {
        // Pagination,
    },
    data() {
        return {
            tableHeaders: [
                {text: '#', value: 'index'},
                {text: 'Date', value: 'date'},
                {text: 'Category', value: 'category'},
                {text: 'Value', value: 'price'},
                {text: 'Actions', value: 'actions'},

            ],
            dialog: false,
            dialogDelete: false,
            editedIndex: -1,
            editedItem: {
                date: '',
                category: '',
                price: 0
            },
            defaultItem: {
                date: '',
                category: '',
                price: 0
            },
        }
    },
    methods: {
        ...mapMutations([
            'setPageCount', 'setEditObj'
        ]),
        showForm(name) {
            this.$modal.show(name);
        },

        editItem (item) {
        this.editedIndex = this.listWithIndex.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        this.$store.commit('setEditObj', this.editedItem)
        this.$store.commit('setNewValue', this.editedItem)
      },

      deleteItem (item) {
        this.editedIndex = this.listWithIndex.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
       },

      deleteItemConfirm () {
        this.listWithIndex.splice(this.editedIndex, 1)
        this.$store.commit('delItem', this.editedItem)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.listWithIndex[this.editedIndex], this.editedItem)
        } else {
          this.listWithIndex.push(this.editedItem)
        }
        this.close()
      },
    },
    
    computed: {
 
        ...mapGetters([
            'getPaginatedData', 'getSize', 'getPageNumber', 'getPaymentsList', 'getCategoriesList'
        ]),
        listWithIndex() {
            return this.getPaymentsList.map((obj, i) => {
                obj.index = i + 1;
                return obj;
            })
        },
        formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

}
</script>
 
<style lang="scss" module>
.wrapper {
font-size: 22px;

}
.costs__list {
display: flex
 
}
.costs__list_head {
margin-bottom: 20px;
}
.costs__list_el {
width: 200px;
}
.costs__list_n {
width: 100px;
}
.pagination__block {
    display: flex;
    margin-top: 30px
    
}
 

</style>
