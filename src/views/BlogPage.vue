<template>
  <main class="mt-5 blog">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-10">
          <h1 class="f-52 ff-2 mb-3" v-if="!loading && post.attributes.visible">
            {{ post.attributes.title }}
          </h1>
        </div>
      </div>

      <div class="published-at d-flex align-items-center" v-if="!loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          style="width: 1em; height: 1em; margin-right: 5px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {{ new Date(post.attributes.publishedAt).toLocaleString() }}
      </div>

      <div class="row mt-4">
        <div class="posts col-lg-10" v-if="!loading">
          <div class="mb-5">
            <div v-if="post.attributes.visible">
              <div v-html="post.attributes.content" />
            </div>
          </div>
        </div>
        <div v-if="loading" class="mt-5 ml-5" style="min-height: 400px">
          <div class="loader" />
        </div>
      </div>
    </div>
  </main>
</template>
  
<script>
import axios from "axios";

export default {
  name: "Blog",
  data() {
    return {
      post: null,
      loading: true,
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
    loadPost: async function (id) {
      try {
        this.loading = true;

        const result = await axios.get(
          `${process.env.VUE_APP_BLOG_API_URL}/posts/?filters[slug][$eq]=${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_BLOG_API_KEY}`,
            },
          }
        );

        this.pagination = result.data.meta.pagination;
        this.post = result.data.data[0];
        this.loading = false;
        document.title = `ArbStore — ${this.post.attributes.title}`;
      } catch {
        this.loading = false;
        this.$router.push({ path: "/blog" });
      }
    },
  },
  mounted() {
    this.loadPost(this.$route.params?.id);
  },
};
</script>
