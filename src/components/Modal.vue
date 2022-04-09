<template>
  <transition name="modal-fade">
    <div class="fancybox-container fancybox-is-open fancybox-can-swipe" role="dialog" tabindex="-1" id="fancybox-container-1" style="transition-duration: 366ms;">
      <div class="fancybox-bg"></div>
      <div class="fancybox-inner">
        <div class="fancybox-stage"  >
          <div class="fancybox-slide--html fancybox-slide--current fancybox-slide--complete" style="padding-top: 40px;">
            <div class="container pl-0 pr-0 pl-sm-3 pr-sm-3">
              <div class="col-12 col-sm-11 m-auto p-0">
                <button type="button"  @click="close" class="fancybox-button fancybox-close-small" title="Close">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
                </button>
                <div class="bgc-1 radius p-3 p-sm-5 formScroll noScrollArrow">
                  <div class="f-32 ff-2 mb-4">
                    <slot name="header">
                    </slot>
                  </div>
                  <slot name="body">
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
        <notifications position="top right" :max="3" :width="200" />
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>