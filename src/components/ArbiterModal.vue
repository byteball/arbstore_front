<template>
  <Modal @close="close">
    <template v-slot:body>
    <div class="bgc-1 pt-0 pb-0 radius fastViewBlock fancybox-content" style="">
            <div class="row">
              <div class="col-lg-4">
                <div class="f-32 ff-2b mb-4">
                  {{props.real_name}}
                </div>
                <div class="imgCart radius mb-4">
                  <img :src="BACKEND_URL + '/assets/uploads/'+props.hash+'.jpeg'" onerror="this.src='/avatar.png';"  alt="img">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="d-flex flex-column flex-lg-row">
                  <div class="f-18 ff-2b mr-2">
                    {{props.shortBio}}
                  </div>
                </div>
                <div class="f-18 color-2 long-bio" style="margin-top: 8px">
                  {{props.longBio}}
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center flex-wrap mt-4 mt-lg-0 tags">
              <div class="bgc-2 radius mr-3 tabletFast mb-3" v-for="(tag, key) in props.tags" :key="key">{{key}}</div>
            </div>
            <div class="mt-4">
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Contracts:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2">
                    {{props.total_cnt}}
                  </div>
                </div>
              </div>
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Contracts resolved:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2">
                    {{props.resolved_cnt}}
                  </div>
                </div>
              </div>
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Last activity:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2">
                    {{props.last_unit_date}}
                  </div>
                </div>
              </div>
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Service fees:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2">
                    <div class="row"  v-for="(tag, key) in props.tags" :key="key">
                      <div class="col-3">{{ key }}:</div>
                      <div class="col-9">{{tag}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Languages:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2">
                    {{props.languages}}
                  </div>
                </div>
              </div>
              <div class="row mb-4 flex-column flex-lg-row">
                <div class="col-lg-4">
                  <div class="ff-2b">
                    Address:
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="color-2 d-flex w-100">
                    <input class="addressCartInput w-100" type="text" readonly="" :value="props.address">
                    <div class="clickCopyFast"  @click="copyText(props.address)">
                      <div id="modal-tooltip" class="tool-tip">Copied!</div>
                      <svg width="91" height="30" viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="91" height="30" rx="6" fill="#1D45FE"></rect>
                        <path d="M19.314 17.346H21.024C20.748 18.534 20.172 19.482 19.296 20.19C18.42 20.886 17.298 21.234 15.93 21.234C14.058 21.234 12.6 20.616 11.556 19.38C10.512 18.144 9.99 16.542 9.99 14.574C9.99 12.606 10.518 11.004 11.574 9.768C12.63 8.532 14.088 7.914 15.948 7.914C17.244 7.914 18.324 8.238 19.188 8.886C20.052 9.522 20.616 10.398 20.88 11.514H19.17C18.666 10.098 17.592 9.39 15.948 9.39C14.532 9.39 13.458 9.888 12.726 10.884C11.994 11.88 11.628 13.11 11.628 14.574C11.628 16.05 11.988 17.286 12.708 18.282C13.44 19.266 14.514 19.758 15.93 19.758C16.818 19.758 17.55 19.548 18.126 19.128C18.702 18.696 19.098 18.102 19.314 17.346ZM24.0259 13.044C24.8299 12.144 25.9219 11.694 27.3019 11.694C28.6819 11.694 29.7679 12.144 30.5599 13.044C31.3639 13.944 31.7659 15.084 31.7659 16.464C31.7659 17.844 31.3639 18.984 30.5599 19.884C29.7679 20.784 28.6819 21.234 27.3019 21.234C25.9219 21.234 24.8299 20.784 24.0259 19.884C23.2339 18.984 22.8379 17.844 22.8379 16.464C22.8379 15.084 23.2339 13.944 24.0259 13.044ZM25.1239 18.912C25.6279 19.572 26.3539 19.902 27.3019 19.902C28.2499 19.902 28.9759 19.572 29.4799 18.912C29.9839 18.24 30.2359 17.424 30.2359 16.464C30.2359 15.504 29.9839 14.694 29.4799 14.034C28.9759 13.362 28.2499 13.026 27.3019 13.026C26.3539 13.026 25.6279 13.362 25.1239 14.034C24.6199 14.694 24.3679 15.504 24.3679 16.464C24.3679 17.424 24.6199 18.24 25.1239 18.912ZM38.5097 13.026C37.5617 13.026 36.8477 13.356 36.3677 14.016C35.8997 14.676 35.6657 15.492 35.6657 16.464C35.6657 17.436 35.8997 18.252 36.3677 18.912C36.8477 19.572 37.5617 19.902 38.5097 19.902C39.3977 19.902 40.0817 19.59 40.5617 18.966C41.0537 18.33 41.2997 17.496 41.2997 16.464C41.2997 15.432 41.0537 14.604 40.5617 13.98C40.0817 13.344 39.3977 13.026 38.5097 13.026ZM34.1537 11.928H35.6297V12.9H36.0257C36.6737 12.096 37.6157 11.694 38.8517 11.694C40.0757 11.694 41.0417 12.144 41.7497 13.044C42.4697 13.944 42.8297 15.084 42.8297 16.464C42.8297 17.868 42.4697 19.014 41.7497 19.902C41.0417 20.79 40.0757 21.234 38.8517 21.234C37.6037 21.234 36.6797 20.832 36.0797 20.028H35.6837V24.6H34.1537V11.928ZM47.676 24.6H46.128L48 20.154L44.13 11.928H45.768L48.54 17.904H48.99L51.51 11.928H53.112L47.676 24.6Z" fill="#F4FBFF"></path>
                        <path d="M81 11.94C80.9896 11.8481 80.9695 11.7576 80.94 11.67V11.58C80.8919 11.4772 80.8278 11.3827 80.75 11.3V11.3L74.75 5.3C74.6673 5.22222 74.5728 5.15808 74.47 5.11C74.4402 5.10576 74.4099 5.10576 74.38 5.11C74.2784 5.05174 74.1662 5.01434 74.05 5H70C69.2044 5 68.4413 5.31607 67.8787 5.87868C67.3161 6.44129 67 7.20435 67 8V9H66C65.2044 9 64.4413 9.31607 63.8787 9.87868C63.3161 10.4413 63 11.2044 63 12V22C63 22.7956 63.3161 23.5587 63.8787 24.1213C64.4413 24.6839 65.2044 25 66 25H74C74.7956 25 75.5587 24.6839 76.1213 24.1213C76.6839 23.5587 77 22.7956 77 22V21H78C78.7956 21 79.5587 20.6839 80.1213 20.1213C80.6839 19.5587 81 18.7956 81 18V12C81 12 81 12 81 11.94ZM75 8.41L77.59 11H76C75.7348 11 75.4804 10.8946 75.2929 10.7071C75.1054 10.5196 75 10.2652 75 10V8.41ZM75 22C75 22.2652 74.8946 22.5196 74.7071 22.7071C74.5196 22.8946 74.2652 23 74 23H66C65.7348 23 65.4804 22.8946 65.2929 22.7071C65.1054 22.5196 65 22.2652 65 22V12C65 11.7348 65.1054 11.4804 65.2929 11.2929C65.4804 11.1054 65.7348 11 66 11H67V18C67 18.7956 67.3161 19.5587 67.8787 20.1213C68.4413 20.6839 69.2044 21 70 21H75V22ZM79 18C79 18.2652 78.8946 18.5196 78.7071 18.7071C78.5196 18.8946 78.2652 19 78 19H70C69.7348 19 69.4804 18.8946 69.2929 18.7071C69.1054 18.5196 69 18.2652 69 18V8C69 7.73478 69.1054 7.48043 69.2929 7.29289C69.4804 7.10536 69.7348 7 70 7H73V10C73 10.7956 73.3161 11.5587 73.8787 12.1213C74.4413 12.6839 75.2044 13 76 13H79V18Z" fill="#F4FBFF"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <notifications position="top right" :max="3" :width="200" />
          </div>
    </template>
  </Modal>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
  name: 'ArbiterModal',
  components: {
    Modal,
  },
  props: ['props'],
  data() {
    return {
        BACKEND_URL: process.env.VUE_APP_BACKEND_URL
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    copyText: function(textToCopy){
      // eslint-disable-next-line no-useless-catch
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        let tollTip = document.getElementById('modal-tooltip');
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
          let tollTip = document.getElementById('modal-tooltip');
          tollTip.classList.add("show-tooltip");

          setTimeout (function(){
            tollTip.classList.remove("show-tooltip");
          }, 3000);
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
        });
      }
    },
  },

}
</script>
