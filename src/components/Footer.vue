<template>
  <footer class="mt-100">
    <div class="container">
      <div class="mb-4 sb">
        <div class="d-flex form">
          <input
            v-model="email"
            type="email"
            :disabled="subscribeStatus !== 'none'"
            class="formInput bgc-1"
            v-on:keyup.enter="subscribe"
            placeholder="Email for ArbStore newsletter"
          />
          
          <button :disabled="subscribeStatus !== 'none'" class="button small" @click="subscribe" :style="subscribeStatus === 'pending' ? 'display: flex; align-items: center;' : ''"><span v-if="subscribeStatus === 'pending'" class="loader mr-2" /> Subscribe</button>
        </div>
        
        <div v-if="subscribeError" class="text-center mt-1 error-label">
          {{ subscribeError }}
        </div>

        <div v-if="subscribeStatus === 'ok'" class="mt-1 text-center success-label">
          You have successfully subscribed
        </div>
      </div>

      <div class="legal-menu mb-3">
        <router-link to="/about">About ArbStore</router-link>
        <router-link to="/partners">For partners</router-link>
      </div>

      <div class="legal-menu mb-3">
        <router-link to="/privacy">Privacy policy</router-link>
        <router-link to="/terms">Terms &amp; conditions</router-link>
        <router-link to="/arbiters-listing-criteria">Arbiter listing criteria</router-link>
        <router-link to="/arbiter-code-of-conduct">Code of conduct for arbiters</router-link>
      </div>

      <div class="row justify-content-center align-items-center">
        <a href="https://github.com/byteball/arbstore_front" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2.80859C12.0319 2.80872 9.16061 3.86499 6.89999 5.7884C4.63937 7.71182 3.13691 10.3769 2.66145 13.3067C2.18599 16.2365 2.76856 19.2399 4.30491 21.7795C5.84126 24.3191 8.23114 26.2292 11.0469 27.168C11.6719 27.2774 11.9063 26.9024 11.9063 26.5742C11.9063 26.2773 11.8907 25.293 11.8907 24.2461C8.75003 24.8242 7.93753 23.4805 7.68753 22.7774C7.41013 22.0935 6.97038 21.4875 6.40628 21.0117C5.96878 20.7773 5.34378 20.1992 6.39065 20.1836C6.79038 20.227 7.17377 20.3661 7.50832 20.5891C7.84288 20.8121 8.11874 21.1125 8.31253 21.4648C8.4835 21.772 8.71338 22.0423 8.98902 22.2605C9.26466 22.4786 9.58063 22.6402 9.91882 22.736C10.257 22.8318 10.6108 22.8599 10.9599 22.8187C11.309 22.7776 11.6465 22.6679 11.9531 22.4961C12.0072 21.8606 12.2905 21.2665 12.75 20.8243C9.96878 20.5118 7.06253 19.4336 7.06253 14.6524C7.04497 13.4101 7.50339 12.2081 8.34378 11.293C7.96164 10.2133 8.00635 9.02836 8.46878 7.98051C8.46878 7.98051 9.51562 7.65237 11.9063 9.26176C13.9516 8.69922 16.1109 8.69922 18.1563 9.26176C20.5469 7.63676 21.5938 7.98051 21.5938 7.98051C22.0563 9.02835 22.101 10.2133 21.7188 11.293C22.5617 12.2065 23.0205 13.4095 23 14.6524C23 19.4492 20.0781 20.5118 17.2969 20.8243C17.5952 21.1266 17.825 21.4896 17.9706 21.8886C18.1161 22.2877 18.1742 22.7133 18.1407 23.1368C18.1407 24.8087 18.125 26.1524 18.125 26.5743C18.125 26.9024 18.3594 27.293 18.9844 27.168C21.7952 26.2216 24.1782 24.3071 25.708 21.7662C27.2379 19.2253 27.8149 16.2234 27.3361 13.2964C26.8574 10.3694 25.354 7.70781 23.0944 5.78673C20.8347 3.86566 17.9659 2.81014 15 2.80859Z" fill="#F4FBFF"/>
          </svg>
        </a>
        <a href="https://www.reddit.com/r/obyte/" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15ZM21.5186 13.1802C22.5181 13.1802 23.3384 13.9857 23.3384 15C23.3384 15.7457 22.891 16.3871 22.2646 16.6707C22.2943 16.8495 22.3093 17.0436 22.3093 17.2227C22.3093 20.0417 19.0426 22.3092 15.0151 22.3092C10.9877 22.3092 7.72094 20.0267 7.72094 17.2227C7.72094 17.0286 7.73568 16.8495 7.76571 16.6707C7.139 16.3871 6.69163 15.7607 6.69163 15.015C6.69163 14.0154 7.49712 13.1952 8.51142 13.1952C8.98362 13.1945 9.43783 13.3762 9.7793 13.7023C11.0472 12.7923 12.7925 12.2106 14.7315 12.1509L15.6566 7.79531C15.6713 7.70578 15.7161 7.63126 15.7906 7.5865C15.8504 7.54173 15.9399 7.52672 16.0294 7.54173L19.0573 8.18318C19.2661 7.75054 19.7138 7.4522 20.2209 7.4522C20.9369 7.4522 21.5186 8.03387 21.5186 8.74983C21.5186 9.46607 20.9369 10.0477 20.2209 10.0477C19.5197 10.0477 18.9531 9.49582 18.923 8.80961L16.2082 8.22794L15.373 12.1361C17.2823 12.2106 18.9978 12.7923 20.2507 13.6873C20.5788 13.374 21.0264 13.1802 21.5186 13.1802ZM12.1363 15C11.42 15 10.8384 15.5816 10.8384 16.2976C10.8384 17.0136 11.42 17.6102 12.1363 17.5955C12.8522 17.5955 13.4339 17.0136 13.4339 16.2976C13.4339 15.5816 12.8522 15 12.1363 15ZM15.0151 20.6982C15.5073 20.6982 17.2078 20.6384 18.1028 19.7434C18.2221 19.6091 18.2221 19.4003 18.1028 19.266C17.9685 19.132 17.7597 19.132 17.6254 19.266C17.0735 19.8329 15.8654 20.0267 15.0151 20.0267C14.1649 20.0267 12.9715 19.8329 12.4046 19.266C12.2703 19.132 12.0615 19.132 11.9272 19.266C11.7932 19.4003 11.7932 19.6091 11.9272 19.7434C12.8075 20.6234 14.508 20.6982 15.0151 20.6982ZM16.5663 16.3126C16.5663 17.0286 17.148 17.6102 17.864 17.6102C18.5802 17.6102 19.1619 17.0136 19.1619 16.3126C19.1619 15.5967 18.5802 15.015 17.864 15.015C17.148 15.015 16.5663 15.5967 16.5663 16.3126Z" fill="#F4FBFF"/>
          </svg>
        </a>
        <a href="https://twitter.com/ObyteOrg" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5 7.24977C26.5604 7.65739 25.5668 7.92685 24.55 8.04977C25.6227 7.40892 26.4266 6.40075 26.8125 5.21227C25.8044 5.81235 24.701 6.23514 23.55 6.46227C22.7807 5.62799 21.7562 5.07264 20.6373 4.88334C19.5183 4.69403 18.3682 4.88147 17.3672 5.41626C16.3663 5.95105 15.5712 6.80294 15.1066 7.83832C14.6419 8.8737 14.5341 10.034 14.8 11.1373C12.7618 11.0342 10.7681 10.5035 8.94832 9.5796C7.12859 8.65574 5.52356 7.35939 4.2375 5.77477C3.78642 6.56248 3.5494 7.45455 3.55 8.36227C3.5484 9.20525 3.75527 10.0355 4.15219 10.7792C4.54912 11.5229 5.12377 12.1569 5.825 12.6248C5.00997 12.6026 4.21236 12.3839 3.5 11.9873V12.0498C3.50611 13.2309 3.91999 14.3736 4.67164 15.2847C5.42329 16.1958 6.46657 16.8193 7.625 17.0498C7.17907 17.1855 6.71609 17.257 6.25 17.2623C5.92736 17.2585 5.60553 17.2292 5.2875 17.1748C5.61739 18.1908 6.25578 19.0787 7.11384 19.715C7.97191 20.3512 9.00697 20.7042 10.075 20.7248C8.2715 22.1439 6.04485 22.9183 3.75 22.9248C3.33217 22.9261 2.91467 22.9011 2.5 22.8498C4.84304 24.3626 7.57352 25.1657 10.3625 25.1623C12.2871 25.1823 14.1964 24.8185 15.9789 24.0924C17.7614 23.3662 19.3813 22.2921 20.744 20.9329C22.1067 19.5737 23.185 17.9565 23.9157 16.1759C24.6464 14.3953 25.015 12.4869 25 10.5623C25 10.3498 25 10.1248 25 9.89977C25.9809 9.16829 26.8268 8.27155 27.5 7.24977Z" fill="#F4FBFF"/>
          </svg>
        </a>
        <a href="https://t.me/obyteorg" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9922 2.5C12.5199 2.5 10.1032 3.23311 8.04757 4.60663C5.99195 5.98015 4.38979 7.93238 3.4437 10.2165C2.4976 12.5005 2.25006 15.0139 2.73238 17.4386C3.21469 19.8634 4.4052 22.0907 6.15336 23.8388C7.90152 25.587 10.1288 26.7775 12.5536 27.2598C14.9783 27.7421 17.4917 27.4946 19.7757 26.5485C22.0598 25.6024 24.012 24.0002 25.3856 21.9446C26.7591 19.889 27.4922 17.4723 27.4922 15C27.4923 13.3584 27.1691 11.7329 26.541 10.2163C25.9128 8.69966 24.9921 7.32162 23.8313 6.16086C22.6706 5.0001 21.2925 4.07936 19.7759 3.45123C18.2593 2.82309 16.6338 2.49986 14.9922 2.5ZM18.9666 21.4406C18.9198 21.5572 18.8486 21.6626 18.7578 21.7495C18.667 21.8364 18.5586 21.9028 18.44 21.9445C18.3214 21.9861 18.1953 22.0018 18.0701 21.9907C17.9449 21.9796 17.8235 21.9418 17.7141 21.88L14.3207 19.2432L12.1428 21.2525C12.0923 21.2898 12.0332 21.3139 11.9709 21.3224C11.9087 21.3309 11.8453 21.3236 11.7866 21.3012L12.2041 17.5656L12.2175 17.5762L12.226 17.5024C12.226 17.5024 18.3322 11.9431 18.581 11.7062C18.8328 11.4699 18.7497 11.4187 18.7497 11.4187C18.7641 11.1305 18.2978 11.4187 18.2978 11.4187L10.2072 16.6237L6.83783 15.4762C6.83783 15.4762 6.32033 15.2906 6.27158 14.8825C6.22033 14.4775 6.85469 14.2575 6.85469 14.2575L20.2509 8.93561C20.2509 8.93561 21.3522 8.44496 21.3522 9.2575L18.9666 21.4406Z" fill="#F4FBFF"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/obyte" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5867 2.50017H4.41172C4.17369 2.49687 3.93734 2.54048 3.71618 2.62853C3.49501 2.71657 3.29335 2.84733 3.12272 3.01331C2.95208 3.1793 2.81582 3.37728 2.72171 3.59594C2.6276 3.81459 2.57748 4.04965 2.57422 4.28767V25.7127C2.57748 25.9507 2.6276 26.1858 2.72171 26.4044C2.81582 26.6231 2.95208 26.821 3.12272 26.987C3.29335 27.153 3.49501 27.2838 3.71618 27.3718C3.93734 27.4599 4.17369 27.5035 4.41172 27.5002H25.5867C25.8247 27.5035 26.0611 27.4599 26.2823 27.3718C26.5034 27.2838 26.7051 27.153 26.8757 26.987C27.0464 26.821 27.1826 26.6231 27.2767 26.4044C27.3708 26.1858 27.421 25.9507 27.4242 25.7127V4.28767C27.421 4.04965 27.3708 3.81459 27.2767 3.59594C27.1826 3.37728 27.0464 3.1793 26.8757 3.01331C26.7051 2.84733 26.5034 2.71657 26.2823 2.62853C26.0611 2.54048 25.8247 2.49687 25.5867 2.50017ZM10.1117 23.4252H6.36172V12.1752H10.1117V23.4252ZM8.23672 10.6002C7.71955 10.6002 7.22356 10.3947 6.85786 10.029C6.49216 9.66334 6.28672 9.16735 6.28672 8.65017C6.28672 8.133 6.49216 7.63701 6.85786 7.27132C7.22356 6.90562 7.71955 6.70017 8.23672 6.70017C8.51134 6.66903 8.78944 6.69624 9.05281 6.78003C9.31619 6.86382 9.55889 7.00229 9.76504 7.18638C9.97119 7.37047 10.1361 7.59602 10.2491 7.84828C10.362 8.10053 10.4204 8.3738 10.4204 8.65017C10.4204 8.92655 10.362 9.19982 10.2491 9.45207C10.1361 9.70433 9.97119 9.92988 9.76504 10.114C9.55889 10.2981 9.31619 10.4365 9.05281 10.5203C8.78944 10.6041 8.51134 10.6313 8.23672 10.6002ZM23.6367 23.4252H19.8867V17.3877C19.8867 15.8752 19.3492 14.8877 17.9867 14.8877C17.565 14.8908 17.1545 15.023 16.8103 15.2666C16.4661 15.5103 16.2048 15.8535 16.0617 16.2502C15.9639 16.544 15.9215 16.8534 15.9367 17.1627V23.4127H12.1867C12.1867 23.4127 12.1867 13.1877 12.1867 12.1627H15.9367V13.7502C16.2774 13.1591 16.7729 12.6721 17.3698 12.3417C17.9667 12.0113 18.6424 11.85 19.3242 11.8752C21.8242 11.8752 23.6367 13.4877 23.6367 16.9502V23.4252Z" fill="#F4FBFF"/>
          </svg>
        </a>
        <a href="https://discord.obyte.org" target="_blank" rel="noopener" class="mr-3 mb-3 mb-lg-0">
          <svg width="35" height="35" viewBox="-5 -5 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" fill="#F4FBFF"/>
          </svg>
        </a>
      </div>
      <div class="row justify-content-center align-items-center mt-2">
        &copy;&nbsp;<a href="https://obyte.org" target="_blank" rel="noopener">Obyte.org</a>
      </div>
    </div>
    <EditArbiter v-if="$route.params.token && editFormVisible" @close="closeEditForm" :token="$route.params.token"/>
    <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
            Sign up as Arbiter
        </template>
        <template v-slot:body>

          <div class="row pt-0">
            <div class="col-lg-12">
              <div class="f-18 ff-1 pl-4">
                By signing up you agree to the <router-link to="/terms">terms</router-link>.
              </div>
            </div>
          </div>

          <div class="row pt-0">
            <div class="col-lg-6 mb-4">
                <div class="f-18 ff-2 bgc-1 radius p-4 position-relative h-100 d-flex flex-column justify-content-between">
                  <div class="numberAbs ff-2b">
                    1
                  </div>
                  Download Obyte app
                  <div class="ff-1 f-18 color-2 mb-4 mt-4">ArbStore is based on <a href="https://obyte.org" target="_blank" rel="noopener">Obyte</a> cryptocurrency platform. Sign up process begins with opening the ArbStore chatbot in the app.</div>
                  <div class="d-flex mt-3">
                    <a href="https://apps.apple.com/us/app/obyte-formerly-byteball/id1147137332" target="_blank" rel="noopener" class="mr-4">
                      <AppStoreSVG/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=org.byteball.wallet" target="_blank" rel="noopener">
                      <PlayMarketSVG/>
                    </a>
                  </div>
                  <div class="ff-1 f-18 color-2 mb-0 mt-1">
                    <a href="https://obyte.org/downloads/Obyte-win64.exe" target="_blank" rel="noopener">Windows</a>
                    &nbsp;
                    <a href="https://obyte.org/downloads/Obyte-osx64.dmg" target="_blank" rel="noopener">Mac</a>
                    &nbsp;
                    <a href="https://obyte.org/downloads/Obyte-x86_64.AppImage" target="_blank" rel="noopener">Linux</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="f-18 ff-2 bgc-1 radius p-4 position-relative h-100 d-flex flex-column justify-content-between">
                  <div class="numberAbs ff-2b">
                    2
                  </div>
                  Pair with the ArbStore chatbot
                  <div class="ff-1 f-18 color-2 mb-4 mt-4">Click the below link to open a dialog with the ArbStore bot in your Obyte wallet:</div>
                  <br>
                  <div class="d-flex mt-3">
                    <a :href="'obyte:'+pairingCode">Pair with ArbStore</a>
                  </div>
                  <br><br>
                </div>
              </div>
            </div>
        </template>
    </Modal>
  </footer>

</template>

<script>
import { email } from "@vee-validate/rules";
import axios from "axios";

import EditArbiter from '@/components/EditArbiter';
import Modal from '../components/Modal.vue';
import AppStoreSVG from '../components/AppStoreSVG'
import PlayMarketSVG from '../components/PlayMarketSVG'

export default {
  name: "Footer",
  components: {
    EditArbiter,
    Modal,
    AppStoreSVG,
    PlayMarketSVG,
  },
  data() {
    return {
      email: "",
      subscribeError: null,
      subscribeStatus: "none",
      isModalVisible: false,
      editFormVisible: true,
      pairingCode: process.env.VUE_APP_ARBSTORE_PAIRING_CODE
    };
  },
  watch: {
    '$store.state.showReg': function () {
      if (this.$store.state.showReg) {
        this.isModalVisible = true;
      }
    }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
      this.$store.dispatch('showReg', false );
    },
    closeEditForm() {
      this.editFormVisible = false
    },
    async subscribe() {
      if (this.subscribeStatus === "none") {
        this.subscribeError = null;

        if (this.email && email(String(this.email))) {
          this.subscribeStatus = "pending";

          await axios.post(
            `${process.env.VUE_APP_BACKEND_URL}/api/v1/subscribe`,
            { email: this.email },
            { headers: { "Content-Type": "application/json" }}
          );

          this.subscribeStatus = "ok";
          
        } else {
          this.subscribeError = "Email is incorrect";
          this.subscribeStatus === "none";
        }
      }
    }
  }
};
</script>
