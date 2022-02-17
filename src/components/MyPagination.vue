<template>

  <div class='VuePagination' :class='props.theme.wrapper'>
    <div class="row align-items-center justify-content-center" v-show="props.showPagination">
      <ul class="pagiWrap">
        <li class="color-1" href="" v-if="props.hasEdgeNav" :class='props.theme.firstPage' @click="props.setFirstPage">
          <div class="prevPagi" v-bind="props.firstPageProps">
            first page
          </div>
        </li>
        <li class="color-1" v-for="page in props.pages" :key="page" :class="props.pageClasses(page)"
           v-on="props.pageEvents(page)">
          <div class="pagiBlock" v-bind="props.aProps" >{{page}}</div>
        </li>

        <li class="color-1" href="" v-if="props.hasEdgeNav" :class="props.theme.lastPage" @click="props.setLastPage">
          <div class="nextPagi" v-bind="props.lastPageProps">
            {{props.texts.last}}
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'MyPagination',
  props: ['props']
}
</script>