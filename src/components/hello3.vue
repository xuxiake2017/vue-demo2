<template>
  <div>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    ></blog-post>

    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component
      :is="currentTabComponent"
      class="tab"
    ></component>
    <base-checkbox v-model="lovingVue"></base-checkbox>
  </div>
</template>

<script>
let blogPost = {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
}
let tabHome = {
  template: '<div>Home component</div>'
}
let tabPosts = {
  template: '<div>Posts component</div>'
}
let tabArchive = {
  template: '<div>Archive component</div>'
}
let baseCheckbox = {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  >
`
}
export default {
  name: 'hello3',
  data: () => {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive'],
      lovingVue: false
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  watch: {
    lovingVue: function (val) {
      if (val) {
        this.$message('勾选了')
      }
    }
  },
  components: {
    'blog-post': blogPost,
    'tab-home': tabHome,
    'tab-posts': tabPosts,
    'tab-archive': tabArchive,
    'base-checkbox': baseCheckbox
  }
}

</script>

<style scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
