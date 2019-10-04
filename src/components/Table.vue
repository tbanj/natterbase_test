<template>
  <div class="my-component">
    <vue-good-table :columns="columnss" :rows="checkdata()" styleClass="vgt-table striped">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'status'">
          <button
            type="button"
            class="btn"
            :style="[props.row.status=== 'Completed'?
             {'color': '#6ADD0E','background': 'rgba(106, 221, 14, 0.2)'} : 
             {'color': '#FD5262', 'background': 'rgba(253, 82, 98, 0.2)'}]"
          >
            <i class="fa fa-circle"></i>
            {{props.row.status}}
          </button>
        </span>

        <span v-else-if="props.column.field == 'action'">
          <button type="button" class="btn" style="background: #F58634;">{{props.row.action}}</button>
        </span>

        <span v-else-if="props.column.field == 'moreInfo'">
          <a
            href="/"
            class="btn"
            style="color: #4D0032; text-decoration-line: underline;"
          >{{props.row.moreInfo}}</a>
        </span>
        <span v-else>{{props.formattedRow[props.column.field]}}</span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "my-component",
  components: {
    VueGoodTable
  },
  watch: {
    updateRowd: function() {
      // is use to update async data
      // if (this.rows.length > this.rowss.length) {
      //   return (this.rowss = this.rows);
      // }
      this.checkdata();
    }
  },
  /*  computted is use for reducing logic in template
      though watch is also use for that but watch is majorly use for async
   */
  // computted: {},
  data() {
    return {
      columnss: this.columns,
      rowss: this.rows,
      list: ""
    };
  },
  props: {
    columns: Array,
    rows: Array
  },
  methods: {
    checkdata() {
      this.rowss = this.rows;
      return this.rowss;
    }
  }
};
</script>

<style >
.vgt-table.bordered td,
.vgt-table.bordered th {
  border: 0px solid #ffffff;
}

.vgt-table.bordered td {
  border: 0px 1px solid #ffffff !important;
}

.vgt-table thead th {
  background: linear-gradient(#ffff, white);
}

.vgt-table.striped tbody tr:nth-of-type(odd) {
  background: #f8f7f6;
}

.vgt-right-align {
  text-align: left;
}
</style>
