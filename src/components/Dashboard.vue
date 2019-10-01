<template>
  <div>
    <div class="container">
      <h3 id="dashboardTitle">Welcome, Lois!</h3>
      <p id="subTitle">Monday, July 22, 2019.</p>
    </div>
    <div class="container">
      <div class="row">
        <div v-bind:key="item.id" class="col-md-3 mb-3" v-for="item in items">
          <div class="card shadow-sm" :style="{ backgroundImage: `url(${item.imgBackground})` }">
            <div class="card-body">
              <img class="imgInsurance" alt="Insuarance logo" :src="`${item.imgInner}`" />
              <h3 class="headerText">{{item.textInner}}</h3>
              <p class="insuranceText">{{item.totalAmountText}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="card shawdow-sm">
        <h5 class="applyInsure card-header">Insurance Applications</h5>
        <!-- <hr /> -->
        <Tablemin :rows="rowss" :columns="columnss" :bottom="bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import Tablemin from "./Table.vue";
import axios from "axios";
import env from "../env";
export default {
  name: "Dashboard",
  components: {
    Tablemin
  },
  props: {},
  data: function() {
    return {
      columnss: [
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
          type: "string"
          // dateInputFormat: "yyyy-MM-dd",
          // dateOutputFormat: "yyyy:MM-dd"
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
      bottom: false,
      rowss: [],
      beers: [],
      items: [
        {
          id: 1,
          imgBackground: require("../../public/images/Group_4_c1.png"),
          imgInner: require("../../public/images/Insurance_bought_icon.svg"),
          textInner: 6,
          totalAmountText: "Total Insurance Bought"
        },
        {
          id: 2,
          imgBackground: require("../../public/images/Card_c2.svg"),
          imgInner: require("../../public/images/total amount insurance icon.svg"),
          textInner: "₦21,400,000",
          totalAmountText: "Total Amount of Insurance"
        },
        {
          id: 3,
          imgBackground: require("../../public/images/Card_c4.svg"),
          imgInner: require("../../public/images/insurance_claim_icon.svg"),
          textInner: 3,
          totalAmountText: "Total Insurance Claims"
        },

        {
          id: 4,
          imgBackground: require("../../public/images/Card_c4.svg"),
          imgInner: require("../../public/images/amount_of_claims_icon.svg"),
          textInner: "₦1,400,000",
          totalAmountText: "Total Amount of Claims"
        }
      ]
    };
  },
  watch: {},
  created() {
    this.addApplication();
  },
  methods: {
    convertDate(data) {
      let dateConvert = new Date(data);
      dateConvert = dateConvert.toDateString();
      let dateConverti = dateConvert.split(" ");
      let actualDate = dateConverti.slice(1);

      return actualDate.join(" ");
    },
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addApplication() {
      axios
        .get(env.api, {
          headers: { token: env.token }
        })
        .then(response => {
          // let api = response.data[0];
          if (response.data) {
            let api = response.data.applications;
            let id = 1;
            for (let index = 0; index < api.length; index++) {
              let apiInfo = {
                id: id++,
                insuranceType: api[index].insuranceType,
                amount: api[index].amount,
                createdAt: this.convertDate(api[index].createdDate),
                status: api[index].complete ? "Completed" : "Incomplete",
                action: api[index].complete
                  ? "Make a Claim"
                  : "Complete Process",
                moreInfo: "More Actions"
              };
              this.rowss.push(apiInfo);
            }
            this.bottom = true;
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgInsurance {
  width: 64px;
  height: 64px;
}
#insuranceId {
  background-image: url("/images/Group 4_c1.png");
}
.headerText {
  color: #4d0032;
}
.applyInsure {
  background-color: #ffffff;
  color: #4d0032;
}
.insuranceSize {
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  height: 200px;
  width: 260px;
}
.insuranceText {
  font-family: Avenir Next;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #240f00;
}
</style>
