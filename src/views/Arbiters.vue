<template>
  <main class="mt-5">
    <div class="container pb-5">
      <h1 class="f-98 ff-2b mb-5">
        Choose an arbiter
      </h1>
      <div class="row d-flex d-xl-none mb-5 mr-0 ml-0">
        <div class="button small f-18" @click="mobFilter">
          Filters
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.82 16.9765L21 16.9765C21.2652 16.9765 21.5196 16.8711 21.7071 16.6836C21.8946 16.496 22 16.2417 22 15.9765C22 15.7113 21.8946 15.4569 21.7071 15.2694C21.5196 15.0818 21.2652 14.9765 21 14.9765L9.82 14.9765C9.6098 14.3973 9.22637 13.8969 8.72183 13.5433C8.2173 13.1897 7.61612 13 7 13C6.38388 13 5.7827 13.1897 5.27817 13.5433C4.77363 13.8969 4.39021 14.3973 4.18 14.9765L3 14.9765C2.73478 14.9765 2.48043 15.0818 2.29289 15.2694C2.10536 15.4569 2 15.7113 2 15.9765C2 16.2417 2.10536 16.496 2.29289 16.6836C2.48043 16.8711 2.73478 16.9765 3 16.9765L4.18 16.9765C4.3902 17.5556 4.77363 18.056 5.27817 18.4096C5.7827 18.7633 6.38388 18.953 7 18.953C7.61612 18.953 8.2173 18.7633 8.72183 18.4096C9.22637 18.056 9.6098 17.5556 9.82 16.9765ZM6 15.9765C6 15.7787 6.05865 15.5854 6.16853 15.4209C6.27841 15.2565 6.43459 15.1283 6.61732 15.0526C6.80004 14.9769 7.00111 14.9571 7.19509 14.9957C7.38907 15.0343 7.56725 15.1295 7.70711 15.2694C7.84696 15.4092 7.9422 15.5874 7.98078 15.7814C8.01937 15.9754 7.99957 16.1764 7.92388 16.3592C7.84819 16.5419 7.72002 16.6981 7.55557 16.8079C7.39112 16.9178 7.19778 16.9765 7 16.9765C6.73478 16.9765 6.48043 16.8711 6.29289 16.6836C6.10536 16.496 6 16.2417 6 15.9765ZM17.82 9.97648L21 9.97648C21.2652 9.97648 21.5196 9.87112 21.7071 9.68358C21.8946 9.49605 22 9.24169 22 8.97648C22 8.71126 21.8946 8.45691 21.7071 8.26937C21.5196 8.08183 21.2652 7.97648 21 7.97648L17.82 7.97648C17.6098 7.39732 17.2264 6.89694 16.7218 6.54332C16.2173 6.1897 15.6161 6 15 6C14.3839 6 13.7827 6.1897 13.2782 6.54332C12.7736 6.89694 12.3902 7.39732 12.18 7.97648L3 7.97648C2.73478 7.97648 2.48043 8.08183 2.29289 8.26937C2.10536 8.45691 2 8.71126 2 8.97648C2 9.24169 2.10536 9.49605 2.29289 9.68358C2.48043 9.87112 2.73478 9.97648 3 9.97648L12.18 9.97648C12.3902 10.5556 12.7736 11.056 13.2782 11.4096C13.7827 11.7633 14.3839 11.953 15 11.953C15.6161 11.953 16.2173 11.7633 16.7218 11.4096C17.2264 11.056 17.6098 10.5556 17.82 9.97648ZM14 8.97648C14 8.77869 14.0586 8.58536 14.1685 8.42091C14.2784 8.25646 14.4346 8.12828 14.6173 8.0526C14.8 7.97691 15.0011 7.95711 15.1951 7.99569C15.3891 8.03428 15.5673 8.12952 15.7071 8.26937C15.847 8.40922 15.9422 8.58741 15.9808 8.78139C16.0194 8.97537 15.9996 9.17643 15.9239 9.35916C15.8482 9.54189 15.72 9.69806 15.5556 9.80795C15.3911 9.91783 15.1978 9.97648 15 9.97648C14.7348 9.97648 14.4804 9.87112 14.2929 9.68358C14.1054 9.49605 14 9.24169 14 8.97648Z" fill="#F4FBFF"/>
          </svg>
        </div>
      </div>
      <div class="row">
        <div id="mobFilter" class="col-xl-3" :class="{active: isActive}">
          <div class="filterWrap">
            <div class="closePopupButton d-flex d-xl-none"  @click="mobFilter">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9594 2.24691C23.35 2.63743 23.35 3.2706 22.9594 3.66112L3.16046 23.4601C2.76993 23.8506 2.13677 23.8506 1.74624 23.4601L1.03914 22.753C0.648614 22.3625 0.648614 21.7293 1.03914 21.3388L20.8381 1.5398C21.2287 1.14928 21.8618 1.14928 22.2523 1.5398L22.9594 2.24691Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2521 23.4604C21.8616 23.8509 21.2284 23.8509 20.8379 23.4604L1.03891 3.66143C0.648387 3.27091 0.648387 2.63775 1.03891 2.24722L1.74602 1.54011C2.13654 1.14959 2.76971 1.14959 3.16023 1.54012L22.9592 21.3391C23.3497 21.7296 23.3497 22.3628 22.9592 22.7533L22.2521 23.4604Z" fill="white"/>
              </svg>
            </div>
            <div class="filterCategory mb-5">
              <div class="filterCatName mb-4 f-24 ff-2">
                Category
              </div>
              <label class="labelCheck" v-for="(tag, index) in eliminateDuplicatedCategories($store.state.products)" :key="index">
                <input type="checkbox" class="d-none" v-model="filterByCategory" :value="tag" :true-value="tag">
                <div class="checkArrow mr-3">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2688 0.810683C15.1681 0.709143 15.0483 0.628549 14.9163 0.57355C14.7843 0.518551 14.6427 0.490234 14.4997 0.490234C14.3566 0.490234 14.2151 0.518551 14.083 0.57355C13.951 0.628549 13.8312 0.709143 13.7305 0.810683L5.65966 8.89235L2.26883 5.49068C2.16426 5.38967 2.04083 5.31025 1.90557 5.25695C1.77031 5.20364 1.62587 5.1775 1.48051 5.18002C1.33515 5.18253 1.1917 5.21365 1.05837 5.2716C0.925034 5.32956 0.804419 5.4132 0.703411 5.51777C0.602402 5.62233 0.522979 5.74577 0.469675 5.88103C0.41637 6.01629 0.390229 6.16072 0.392744 6.30608C0.395259 6.45145 0.426381 6.59489 0.484332 6.72823C0.542283 6.86156 0.625929 6.98217 0.730494 7.08318L4.89049 11.2432C4.9912 11.3447 5.11102 11.4253 5.24304 11.4803C5.37505 11.5353 5.51665 11.5636 5.65966 11.5636C5.80267 11.5636 5.94427 11.5353 6.07629 11.4803C6.2083 11.4253 6.32812 11.3447 6.42883 11.2432L15.2688 2.40318C15.3788 2.30174 15.4665 2.17861 15.5266 2.04157C15.5866 1.90453 15.6176 1.75654 15.6176 1.60693C15.6176 1.45732 15.5866 1.30933 15.5266 1.17229C15.4665 1.03525 15.3788 0.912128 15.2688 0.810683Z" fill="#F4FBFF"/>
                  </svg>
                </div>
                <div class="color-2 f-18">
                  {{tag}}
                </div>
              </label>
            </div>
            <div class="filterCategory mb-5">
              <div class="filterCatName mb-4 f-24 ff-2">
                Contracts resolved
              </div>
              <div class="filterInpBlock">
                <div class="filterInp bgc-1 radius-1">
                  <div class="color-2 mr-2">
                    from
                  </div>
                  <input placeholder="0" type="text" max="100" v-model="resolvedFrom">
                </div>
              </div>
              <div class="filterInpBlock">
                <div class="filterInp bgc-1 radius-1">
                  <div class="color-2 mr-2">
                    up to
                  </div>
                  <input placeholder="100" type="text" max="100" v-model="resolvedUpTo">
                </div>
              </div>
            </div>
            <div class="filterCategory mb-5">
              <div class="filterCatName mb-4 f-24 ff-2">
                Language
              </div>

              <label class="labelCheck" v-for="(lang, key) in eliminateDuplicatedLang($store.state.products)" :key="key">
                <input type="checkbox" class="d-none" v-model="filterByLang" :value="lang" :true-value="lang">
                <div class="checkArrow mr-3">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2688 0.810683C15.1681 0.709143 15.0483 0.628549 14.9163 0.57355C14.7843 0.518551 14.6427 0.490234 14.4997 0.490234C14.3566 0.490234 14.2151 0.518551 14.083 0.57355C13.951 0.628549 13.8312 0.709143 13.7305 0.810683L5.65966 8.89235L2.26883 5.49068C2.16426 5.38967 2.04083 5.31025 1.90557 5.25695C1.77031 5.20364 1.62587 5.1775 1.48051 5.18002C1.33515 5.18253 1.1917 5.21365 1.05837 5.2716C0.925034 5.32956 0.804419 5.4132 0.703411 5.51777C0.602402 5.62233 0.522979 5.74577 0.469675 5.88103C0.41637 6.01629 0.390229 6.16072 0.392744 6.30608C0.395259 6.45145 0.426381 6.59489 0.484332 6.72823C0.542283 6.86156 0.625929 6.98217 0.730494 7.08318L4.89049 11.2432C4.9912 11.3447 5.11102 11.4253 5.24304 11.4803C5.37505 11.5353 5.51665 11.5636 5.65966 11.5636C5.80267 11.5636 5.94427 11.5353 6.07629 11.4803C6.2083 11.4253 6.32812 11.3447 6.42883 11.2432L15.2688 2.40318C15.3788 2.30174 15.4665 2.17861 15.5266 2.04157C15.5866 1.90453 15.6176 1.75654 15.6176 1.60693C15.6176 1.45732 15.5866 1.30933 15.5266 1.17229C15.4665 1.03525 15.3788 0.912128 15.2688 0.810683Z" fill="#F4FBFF"/>
                  </svg>
                </div>
                <div class="color-2 f-18">
                  {{lang}}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="col-xl-9">
          <!-- Display Products -->

          <div class="row bgc-1 radius p-4 mb-5"  v-for="product in filterProducts" :key="product.hash" v-bind:id="product.hash">
            <div class="col-sm-4 col-lg-4 cartBlockName">
              <div class="f-32 ff-2b mb-4">
                {{product.real_name}}
              </div>
              <div class="imgCart radius mb-4">
                <img :src="BACKEND_URL + '/assets/uploads/'+product.hash+'.jpeg'"  onerror="this.onerror=null;this.src='/avatar.png';"  alt="img">
              </div>
              <div class="button small f-18 text-center mb-4" @click="displayProductModal(product.hash)">Info</div>
            </div>
            <div class="col-sm col-lg-8">
              <div class="d-flex mb-4 flex-column flex-lg-row">
                <div class="ff-2b mr-2">
                  Bio:
                </div>
                <div class="color-2">
                  {{product.info.short_bio}}
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column flex-lg-row mb-4">
                <div class="ff-2b col-12 col-lg-5 pl-0">
                  Contracts:
                </div>
                <div class="color-2 text-left text-lg-right">
                  {{product.total_cnt}}
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column flex-lg-row mb-4">
                <div class="ff-2b col-12 col-lg-5 pl-0">
                  Contracts resolved:
                </div>
                <div class="color-2 text-left text-lg-right">
                  {{product.resolved_cnt}}
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column flex-lg-row mb-4">
                <div class="ff-2b col-12 col-lg-5 pl-0">
                  Last activity:
                </div>
                <div class="color-2 text-left text-lg-right">
                  {{product.last_unit_date}}
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column flex-lg-row mb-4">
                <div class="ff-2b col-12 col-lg-5 pl-0">
                  Service fees:
                </div>
                <div class="color-2 text-left text-lg-right">
                  <div v-for="(name, index) in product.info.tags" :key="index">
                    {{index}}: {{name}}
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column flex-lg-row mb-4">
                <div class="ff-2b col-12 col-lg-5 pl-0">
                  Languages:
                </div>
                <div class="color-2 text-left text-lg-right">
                  {{product.info.languages.join(', ')}}
                </div>
              </div>
              <div class="d-flex justify-content-between flex-column align-items-center flex-lg-row mb-4">
                <div class="addressName ff-2b pr-0 mr-3">
                  Address:
                </div>
                <div class="color-2 d-flex w-100">
                  <input class="addressCartInput w-100 text-left text-lg-right" type="text" v-bind:value="product.address" readonly>
                  <div class="clickCopy"  @click="copyText(product.address, product.hash)">
                    <div class="tool-tip">Copied!</div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="30" height="30" rx="6" fill="#1D45FE"/>
                      <path d="M24 11.94C23.9896 11.8481 23.9695 11.7576 23.94 11.67V11.58C23.8919 11.4772 23.8278 11.3827 23.75 11.3L17.75 5.3C17.6673 5.22222 17.5728 5.15808 17.47 5.11C17.4402 5.10576 17.4099 5.10576 17.38 5.11C17.2784 5.05174 17.1662 5.01434 17.05 5H13C12.2044 5 11.4413 5.31607 10.8787 5.87868C10.3161 6.44129 10 7.20435 10 8V9H9C8.20435 9 7.44129 9.31607 6.87868 9.87868C6.31607 10.4413 6 11.2044 6 12V22C6 22.7956 6.31607 23.5587 6.87868 24.1213C7.44129 24.6839 8.20435 25 9 25H17C17.7956 25 18.5587 24.6839 19.1213 24.1213C19.6839 23.5587 20 22.7956 20 22V21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V12C24 12 24 12 24 11.94ZM18 8.41L20.59 11H19C18.7348 11 18.4804 10.8946 18.2929 10.7071C18.1054 10.5196 18 10.2652 18 10V8.41ZM18 22C18 22.2652 17.8946 22.5196 17.7071 22.7071C17.5196 22.8946 17.2652 23 17 23H9C8.73478 23 8.48043 22.8946 8.29289 22.7071C8.10536 22.5196 8 22.2652 8 22V12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1054 8.73478 11 9 11H10V18C10 18.7956 10.3161 19.5587 10.8787 20.1213C11.4413 20.6839 12.2044 21 13 21H18V22ZM22 18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H13C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7H16V10C16 10.7956 16.3161 11.5587 16.8787 12.1213C17.4413 12.6839 18.2044 13 19 13H22V18Z" fill="#F4FBFF"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--pagination-->
          <pagination v-model="page"
                      :options="options"
                      :per-page="PER_PAGE"
                      :records="rows"
                      @paginate="goToTop()"
                     />
          <!--end pagination-->
        </div>
      </div>
    </div>
    <div class="container mt-100 pb-5">
      <div class="row">
        <div class="col-12">
      <div class=" bgc-1 radius pr-4 pl-4 pt-5 pb-5 nobgMob bg-7">
        <div class="col-lg-9">
          <div class="f-52 ff-2b mb-4">
            Arbiters wanted!
          </div>
          <div class="f-32 ff-2b mb-5">
            Passionate professionals with expert knowledge and high reputation. We offer great opportunity to transform the legal landscape!
          </div>
          <div class="d-flex align-items-center justify-content-center d-lg-none">
            <img class="w-100" src="../assets/image/bg-7.png" alt="bg-7">
          </div>
          <div class="row mr-0 ml-0">
            <a href="javascript:void(0);" @click="showRegModl">
              <div class="button small">
                Sign up as arbiter
              </div>
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <ArbiterModal
        v-if="isModalVisible"
        @close="closeModal"
        :props="props"
    />
    <notifications position="top right" :max="3" :width="200" />
  </main>
</template>

<script>
import Pagination from 'v-pagination-3';
import axios from 'axios'
import {markRaw} from 'vue'
import MyPagination from '../components/MyPagination'
import ArbiterModal from '../components/ArbiterModal.vue';

export default {
  name: 'Arbiters',
  components: {
    Pagination,
    ArbiterModal
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          if (this.$route.params?.id) {
            this.showDetail(this.$route.params.id);
          }
        }
    )
  },
  data(){

    if (this.$route.params?.id) {
      this.showDetail(this.$route.params.id);
    }

    return{
      isActive: false,
      isModalVisible: false,
      searchProduct: '',
      filterByCategory: [],
      filterByLang: [],
      sortByPrice: '',
      sortByRating: '',
      resolvedFrom:'',
      resolvedUpTo:'',
      page: 1,
      PER_PAGE:4,
      props: {},
      options: {
        template: markRaw(MyPagination),
        chunksNavigation: false,
      },
      pairingCode: process.env.VUE_APP_ARBSTORE_PAIRING_CODE,
      BACKEND_URL: process.env.VUE_APP_BACKEND_URL,
    }
  },

  computed:{
    filterProducts(){
      let start = 0;
      if(this.page>1){
        start = (this.PER_PAGE*this.page)-this.PER_PAGE;
      }
      let end = start + this.PER_PAGE;

      let arrProd = this.$store.state.products.filter(product => {
        if(this.filterByCategory.length>0){
          let tags = product.info.tags;
          for (let key of Object.keys(tags)) {
            for ( var selectCat of this.filterByCategory){
              if( key == selectCat){
                    return product;
              }
            }
          }
        } else {
          return product;
        }
      }).filter(product => {
        if(this.filterByLang.length>0){
          let languages = product.info.languages;
          for ( let lang of languages){
            for ( var selectLang of this.filterByLang){
              if( lang == selectLang){
                return product;
              }
            }
          }
        }else{
          return product;
        }
      }).filter(product => {
        if(this.resolvedFrom>0){
          if( product.resolved_cnt >= this.resolvedFrom){
            return product;
          }
        }else{
          return product;
        }
      }).filter(product => {
        if(this.resolvedUpTo>0){
          if( product.resolved_cnt <= this.resolvedUpTo){
            return product;
          }
        }else{
          return product;
        }
      });
      this.$store.dispatch('addCount', { count:arrProd.length });
      for (let key of Object.keys(arrProd)) {
        arrProd[key].img=require('../assets/image/avatar.png');
      }
      return arrProd.slice(start,end);
    },
    rows() {
      return this.$store.state.count.count;
    },

  },
  methods:{
    mobFilter: function(){
      this.isActive = !this.isActive;
    },
    avatar: function (e){
      e.src=require('../assets/image/avatar.png');
    },
    getImg: function (hash){
      let result;
      let img = new Image();
      img.src = process.env.VUE_APP_BACKEND_URL + '/assets/uploads/'+hash+'.jpeg';
      img.onload = function(){
      };
      return result
    },
    copyText: function(textToCopy, e){
      // eslint-disable-next-line no-useless-catch
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        let hello1 = document.getElementById(e);
        let tollTip = hello1.querySelector('.tool-tip');
        tollTip.classList.add("show-tooltip");

        setTimeout (function(){
          tollTip.classList.remove("show-tooltip");
        }, 3000);
        return navigator.clipboard.writeText(textToCopy);
      } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
          // here the magic happens
          let hello1 = document.getElementById(e);
          let tollTip = hello1.querySelector('.tool-tip');
          tollTip.classList.add("show-tooltip");
          setTimeout (function(){
            tollTip.classList.remove("show-tooltip");
          }, 3000);
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
        });
      }
    },
    eliminateDuplicatedCategories(products){
      let arr = []
      for (const product of products) {

        let tags = product.info.tags;
        for (var key of Object.keys(tags)) {
          arr.push(key)
        }
      }
      return [...new Set(arr)];

    },
    eliminateDuplicatedLang(products){
      let arr = []
      for (const product of products) {
        product.info.languages.forEach(lang => {
          arr.push(lang)
        })
      }
      return [...new Set(arr)];

    },
    displayProductModal: function (id){
      this.showDetail(id);
      window.history.pushState({}, null, `/arbiters/${id}`);
    },
    hideProductModal() {
      window.history.pushState({}, null, `/arbiters`);
    },
    showDetail: function(e) {
      axios.get(process.env.VUE_APP_BACKEND_URL + '/api/v1/arbiter/' + e)
          .then((response) => {
            this.isModalVisible = true;
            this.props=response.data;
            this.props.longBio=response.data.info.bio;
            this.props.tags=response.data.info.tags;
            this.props.languages=response.data.info.languages.join(', ');
            this.props.shortBio =response.data.info.short_bio;
            this.props.contact_info =response.data.info.contact_info;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    closeModal() {
      this.hideProductModal();
      this.isModalVisible = false;
    },
    showRegModl: function() {
      this.$store.dispatch('showReg', true );
    },
    goToTop: function () {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
  },
}

</script>
