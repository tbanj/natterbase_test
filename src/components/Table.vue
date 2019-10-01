<template>
  <div class="my-component">
  

    <vue-good-table :columns="columns" :rows="rows" styleClass="vgt-table striped">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'status'">
          <button
            type="button"
            class="btn"
            :style="[props.row.action=== 'Make a Claim'?
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
  data() {
    return {
      columns: [
        {
          label: "S/N",
          field: "id",
          type: "number"
        },
        {
          label: "Insurance Type",
          field: "insuranceType",
          type: "number"
        },
        {
          label: "Amount",
          field: "amount",
          type: "number"
        },
        {
          label: "Date",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy:MM-dd"
        },
        {
          label: "Status",
          field: "status",
          type: "name"
        },
        {
          label: "Action",
          field: "action",
          type: "name"
        },
        {
          label: "",
          field: "moreInfo",
          type: "link"
        }
      ],
      rows: [
        {
          id: 1,
          insuranceType: "Travel Insurance",
          amount: 31400000,
          createdAt: "2011-10-31",
          status: "Completed",
          action: "Make a Claim",
          moreInfo: "More Actions"
        },
        {
          id: 2,
          insuranceType: "Travel Better",
          amount: 21400000,
          createdAt: "2011-10-30",
          status: "Completed",
          action: "Complete Process",
          moreInfo: "More Actions"
        },
        {
          id: 3,
          insuranceType: "Travel Better",
          amount: 21400000,
          createdAt: "2011-10-30",
          status: "Completed",
          action: "Make a Claim",
          moreInfo: "More Actions"
        }
      ]
    };
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
</style>
