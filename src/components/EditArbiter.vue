<template>
  <Modal @close="close">
    <template v-slot:header>
        Arbiter {{isNew ? "Sign up" : "Edit"}}
    </template>
    <template v-slot:body>
        <Form @submit="onSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="row mb-4">
              <div class="col-lg-12">
                <div class="f-18 color-2 mb-2">
                  Real Name: {{formData.real_name}}
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-lg-12">
                <div class="f-18 color-2 mb-2">
                  Device name: {{formData.device_name}}
                </div>
              </div>
            </div>
            <div class="inputBlock mb-4">
              <div class="f-18 color-2 mb-2">
                Short bio
              </div>
              <Field class="formInput" name="short_bio" placeholder="Max 110 characters" type="text" rules="required" v-model="formData.info.short_bio"/>
              <ErrorMessage class="error_input" name="short_bio" />
            </div>
            <div class="inputBlock mb-4">
              <div class="f-18 color-2 mb-2">
                Bio
              </div>
              <Field
                  as="textarea"
                  name="bio"
                  class="formTextarea"
                  placeholder="Type here"
                  id="bio"
                  rules="required"
                  v-model="formData.info.bio"
              />
              <ErrorMessage class="error_input" name="bio" />

            </div>
            <div class="inputBlock mb-4">
              <div class="f-18 color-2 mb-2">
                Contact info
              </div>
              <Field class="formInput" name="contact_info" placeholder="(999) 999-99-99 testtest@testmail.com" type="text" rules="required" v-model="formData.info.contact_info"/>
              <ErrorMessage class="error_input" name="contact_info" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-12">
                <div class="f-18 color-2 mb-2">
                  Arbiter specializations
                </div>
                <div v-for="(tag, index) in availableTags" :key="index">
                  <label class=" labelCheckPopup d-flex justify-content-between align-items-center mb-4 pr-0">
                    <input type="checkbox" class="d-none" true-value="on" v-model="formData['tag-' + index]"/>
                    <div class="color-2 f-18 mr-3" style="width: 153px; flex-shrink: 0;">
                      {{tag}}
                    </div>
                    <div class="checkArrow">
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2688 0.810683C15.1681 0.709143 15.0483 0.628549 14.9163 0.57355C14.7843 0.518551 14.6427 0.490234 14.4997 0.490234C14.3566 0.490234 14.2151 0.518551 14.083 0.57355C13.951 0.628549 13.8312 0.709143 13.7305 0.810683L5.65966 8.89235L2.26883 5.49068C2.16426 5.38967 2.04083 5.31025 1.90557 5.25695C1.77031 5.20364 1.62587 5.1775 1.48051 5.18002C1.33515 5.18253 1.1917 5.21365 1.05837 5.2716C0.925034 5.32956 0.804419 5.4132 0.703411 5.51777C0.602402 5.62233 0.522979 5.74577 0.469675 5.88103C0.41637 6.01629 0.390229 6.16072 0.392744 6.30608C0.395259 6.45145 0.426381 6.59489 0.484332 6.72823C0.542283 6.86156 0.625929 6.98217 0.730494 7.08318L4.89049 11.2432C4.9912 11.3447 5.11102 11.4253 5.24304 11.4803C5.37505 11.5353 5.51665 11.5636 5.65966 11.5636C5.80267 11.5636 5.94427 11.5353 6.07629 11.4803C6.2083 11.4253 6.32812 11.3447 6.42883 11.2432L15.2688 2.40318C15.3788 2.30174 15.4665 2.17861 15.5266 2.04157C15.5866 1.90453 15.6176 1.75654 15.6176 1.60693C15.6176 1.45732 15.5866 1.30933 15.5266 1.17229C15.4665 1.03525 15.3788 0.912128 15.2688 0.810683Z" fill="#F4FBFF"/>
                      </svg>
                    </div>
                    <div class="inputBlock checkInputOn"  style="margin-left: 5px;">
                      <Field class="formInput" :disabled="!formData['tag-' + index]" :name="'price-tag-' + index" autocomplete="off" placeholder="1-5%" type="text" v-model="formData.info.tags[tag]"/>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="inputBlock mb-4">
              <div class="f-18 color-2 mb-2">
                Languages
              </div>
              <Multiselect
                  v-model="formData.info.languages"
                  mode="tags"
                  :searchable="true"
                  :options="availableLangs"
                  required
              >
              </Multiselect>
              <span v-if="this.languages_error" class="error_input">This field is required</span>
            </div>
            <div class="inputBlock mb-4">
              <label class=" labelCheckPopup d-flex  align-items-center mb-4 pr-0 pr-lg-4">
                <input type="checkbox" name="visible" class="d-none" v-model="formData.visible" true-value="1" false-value="0"/>
                <div class="color-2 f-18 mr-3 mwi-100">
                  Visible
                </div>
                <div class="checkArrow">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2688 0.810683C15.1681 0.709143 15.0483 0.628549 14.9163 0.57355C14.7843 0.518551 14.6427 0.490234 14.4997 0.490234C14.3566 0.490234 14.2151 0.518551 14.083 0.57355C13.951 0.628549 13.8312 0.709143 13.7305 0.810683L5.65966 8.89235L2.26883 5.49068C2.16426 5.38967 2.04083 5.31025 1.90557 5.25695C1.77031 5.20364 1.62587 5.1775 1.48051 5.18002C1.33515 5.18253 1.1917 5.21365 1.05837 5.2716C0.925034 5.32956 0.804419 5.4132 0.703411 5.51777C0.602402 5.62233 0.522979 5.74577 0.469675 5.88103C0.41637 6.01629 0.390229 6.16072 0.392744 6.30608C0.395259 6.45145 0.426381 6.59489 0.484332 6.72823C0.542283 6.86156 0.625929 6.98217 0.730494 7.08318L4.89049 11.2432C4.9912 11.3447 5.11102 11.4253 5.24304 11.4803C5.37505 11.5353 5.51665 11.5636 5.65966 11.5636C5.80267 11.5636 5.94427 11.5353 6.07629 11.4803C6.2083 11.4253 6.32812 11.3447 6.42883 11.2432L15.2688 2.40318C15.3788 2.30174 15.4665 2.17861 15.5266 2.04157C15.5866 1.90453 15.6176 1.75654 15.6176 1.60693C15.6176 1.45732 15.5866 1.30933 15.5266 1.17229C15.4665 1.03525 15.3788 0.912128 15.2688 0.810683Z" fill="#F4FBFF"/>
                  </svg>
                </div>
              </label>
            </div>
            <div class="input__wrapper">

                <input name="photo" type="file" id="files" ref="files" accept="image/*" class="input input__file" @change="handleFileUpload()" />


              <label for="files" class="input__file-button">
                <span class="input__file-button-text f-18 color-2">Upload photo</span>
                <span class="input__file-icon-wrapper">
                            <svg class="input__file-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="6" fill="#1D45FE"/>
                            <path d="M11.71 10.7099L14 8.4099V17.9999C14 18.2651 14.1054 18.5195 14.2929 18.707C14.4804 18.8945 14.7348 18.9999 15 18.9999C15.2652 18.9999 15.5196 18.8945 15.7071 18.707C15.8946 18.5195 16 18.2651 16 17.9999V8.4099L18.29 10.7099C18.383 10.8036 18.4936 10.878 18.6154 10.9288C18.7373 10.9796 18.868 11.0057 19 11.0057C19.132 11.0057 19.2627 10.9796 19.3846 10.9288C19.5064 10.878 19.617 10.8036 19.71 10.7099C19.8037 10.6169 19.8781 10.5063 19.9289 10.3845C19.9797 10.2626 20.0058 10.1319 20.0058 9.9999C20.0058 9.86788 19.9797 9.73718 19.9289 9.61532C19.8781 9.49346 19.8037 9.38286 19.71 9.2899L15.71 5.2899C15.6149 5.19886 15.5028 5.12749 15.38 5.0799C15.1365 4.97988 14.8635 4.97988 14.62 5.0799C14.4972 5.12749 14.3851 5.19886 14.29 5.2899L10.29 9.2899C10.1968 9.38313 10.1228 9.49383 10.0723 9.61565C10.0219 9.73747 9.99591 9.86804 9.99591 9.9999C9.99591 10.1318 10.0219 10.2623 10.0723 10.3841C10.1228 10.506 10.1968 10.6167 10.29 10.7099C10.3832 10.8031 10.4939 10.8771 10.6158 10.9276C10.7376 10.978 10.8681 11.004 11 11.004C11.1319 11.004 11.2624 10.978 11.3842 10.9276C11.5061 10.8771 11.6168 10.8031 11.71 10.7099ZM24 14.9999C23.7348 14.9999 23.4804 15.1053 23.2929 15.2928C23.1054 15.4803 23 15.7347 23 15.9999V21.9999C23 22.2651 22.8946 22.5195 22.7071 22.707C22.5196 22.8945 22.2652 22.9999 22 22.9999H8C7.73478 22.9999 7.48043 22.8945 7.29289 22.707C7.10536 22.5195 7 22.2651 7 21.9999V15.9999C7 15.7347 6.89464 15.4803 6.70711 15.2928C6.51957 15.1053 6.26522 14.9999 6 14.9999C5.73478 14.9999 5.48043 15.1053 5.29289 15.2928C5.10536 15.4803 5 15.7347 5 15.9999V21.9999C5 22.7955 5.31607 23.5586 5.87868 24.1212C6.44129 24.6838 7.20435 24.9999 8 24.9999H22C22.7956 24.9999 23.5587 24.6838 24.1213 24.1212C24.6839 23.5586 25 22.7955 25 21.9999V15.9999C25 15.7347 24.8946 15.4803 24.7071 15.2928C24.5196 15.1053 24.2652 14.9999 24 14.9999Z" fill="#F4FBFF"/>
                            </svg>
                        </span>
              </label>
              <div id="preview" class="upload_prev">
                <img v-if="url" :src="url"/>
                <img v-if="formData.hash && !noPhoto && !url" :src="BACKEND_URL + '/assets/uploads/'+formData.hash+'.jpeg'" @error="noPhotoHandler"/>
                <span v-if="url" class="remove-file"  @click="removeFile"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg>
</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3">
            <button type="submit" class="button small f-18 w-100">
              {{isNew ? 'Sign up' : 'Save'}}
            </button>
          </div>
        </div>
      </Form>
    </template>
  </Modal>
</template>
<script>

import Multiselect from '@vueform/multiselect'


import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';
import Modal from '../components/Modal.vue';

import axios from "axios";

defineRule('required', required);

const APIURL = `${process.env.VUE_APP_BACKEND_URL}/api/v1/`;

export default {
  name: 'EditArbiter',
  components: {
    Field,
    Form,
    ErrorMessage,
    Multiselect,
    Modal
  },
  props: {
    token: String
  },
  data(){
    return{
      isNew: true,
      url: null,
      file: null,
      languages_error:null,
      noty:null,
      formData: {
        info: {
          tags: {}
        }
      },
      noPhoto: false,
      BACKEND_URL: process.env.VUE_APP_BACKEND_URL,
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleFileUpload(){
      this.file = this.$refs.files.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    removeFile(  ){
      console.log(this.file);
      this.file=null;
      this.url=null;
    },
    onSubmit(values) {

      if(this.formData.info.languages.length==0){
        this.languages_error=true;
        return;
      }

      let formValues = new FormData();


      for (let k in values) {
        if(values[k] !==undefined){
          formValues.append(k, values[k]);
        }
      }
      // checkboxes
      for (const key in this.formData) {
        if (this.formData[key] === true || this.formData[key] === 'true' || this.formData[key] === 1 || this.formData[key] === '1' || this.formData[key] === 'on')
          formValues.append(key, this.formData[key])
      }
      formValues.append('photo', this.file);
      for ( let leng of this.formData.info.languages){
        formValues.append('languages[]', leng);
      }
      //console.log(formData);
      let $this = this
      axios.post(`${APIURL}${this.token}`,
          formValues,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Accept": "application/json"
            }
          }
      ).then(function(resp){
        console.log('resp', resp);
        const { data } = resp;
        if (data.success){
          $this.$notify({
            text: data.is_new_arbiter ? 'Saved your data, please continue in chat.' : 'Data updated',
            type: 'success',
            duration: 15000,
          });
        }
        else{
          $this.$notify({
            text: data.error,
            type: 'error',
            duration: 15000,
          });
        }
      }).catch(function(error){
        console.log('catched', JSON.stringify(error));
        $this.$notify({
          text:error,
          type:'error',
          duration: 15000,
        });
      });
    },
    noPhotoHandler() {
      this.noPhoto = true;
    }
  },
  watch: {
    'formData.info.languages'() {
      this.languages_error=false;
    },
    'this.noty'() {
      this.$notify({
        text:this.noty.text,
        type:this.noty.type,
      });
    },
  },
  computed:{
    availableLangs(){
      let neObj = [];

      Object.keys(this.$store.state.languages).forEach(function(key, i) {
        neObj[i]={value: key, label: this[key].name}
      }, this.$store.state.languages);
      return neObj;
    },
    availableTags() {
      return this.$store.state.tags;
    }
  },
  mounted() {
    axios.get(`${APIURL}${this.token}`).then(resp => {
      this.isNew = !resp.data.announce_unit;
      for (const field in resp.data) {
        if (resp.data[field] !== "" && resp.data[field] !== null)
          this.formData[field] = resp.data[field];
      }
      for (let i = 0; i < this.availableTags.length; i++) {
        if (this.formData.info.tags[this.availableTags[i]])
          this.formData['tag-' + i] = "on";
      }
    }).catch(error => {
      console.log(error);
    })
  }
}
</script>