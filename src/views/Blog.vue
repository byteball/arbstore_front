<template>
  <main class="mt-5 blog">
    <div class="container pb-5">
      <h1 class="f-98 ff-2 mb-4">Blog</h1>
      <div class="row">
        <div class="col-lg-7">
          <div class="f-32 f-52m ff-2 mb-4">
            You can find all the latest news and updates about our company and
            our products here.
          </div>
        </div>
      </div>
      <div class="row">
        <div class="posts mt-5" v-if="!loading">
          <div class="col-lg-10 mb-5" v-for="post in posts" :key="post.id">
            <div v-if="post.attributes.visible">
              <h2 class="f-48 f-52m ff-2 mb-3" style="max-width: 70%">
                <router-link :to="this.getPostLink(post.attributes.slug)">
                  {{ post.attributes.title }}
                </router-link>
              </h2>

              <div class="published-at d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  style="width: 1em; height: 1em; margin-right: 5px;"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ new Date(post.attributes.publishedAt).toLocaleString() }}
              </div>

              <div v-html="post.attributes.short_content" />

              <div>
                <router-link :to="this.getPostLink(post.attributes.slug)">
                  Read more
                  <svg
                    fill="none"
                    viewBox="0 0 20 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    style="height: 1.5em; margin-left: -5px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-3" v-if="!this.posts.length && !loading"><div>No posts</div></div>
        <div v-if="loading" class="mt-5 ml-5" style="min-height: 400px">
          <div class="loader" />
        </div>
        <div class="pagination" v-if="this.pagination !== null && this.posts.length">
          <vue-awesome-paginate
            :total-items="pagination.total"
            :items-per-page="3"
            v-model="currentPage"
            :on-click="scrollToTop"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Blog",
  data() {
    return {
      posts: [],
      pagination: null,
      loading: true,
      currentPage: ref(1),
    };
  },
  watch: {
    currentPage: function (val) {
      this.loadPosts(val);
    },
  },
  computed: {},
  methods: {
    getPostLink(id) {
      return `/blog/post/${id}`;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    loadPosts: async function (page) {
      const POSTS_PER_PAGE = 3;
      this.loading = true;

      const result = await axios.get(
        `${process.env.VUE_APP_BLOG_API_URL}/posts?pagination[pageSize]=${POSTS_PER_PAGE}&pagination[page]=${page}&sort=-publishedAt`,
        {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_BLOG_API_KEY}`,
          },
        }
      );

      this.pagination = result.data.meta.pagination;
      this.posts = result.data.data;
      this.loading = false;
    },
  },
  mounted() {
    this.loadPosts(1);
  },
};
</script>
