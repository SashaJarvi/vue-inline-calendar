<template>
  <li ref="root" class="observer" />
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "TheObserver",
  props: {
    options: {
      type: Object,
    },
  },
  emits: ["intersect"],
  setup(props, { emit }) {
    const root = ref(null);
    const observer = ref(null);

    onMounted(() => {
      const options = props.options || {};

      observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          emit("intersect");
        }
      }, options);

      observer.value.observe(root.value);
    });

    onUnmounted(() => {
      observer.value.disconnect();
    });

    return {
      root,
    };
  },
};
</script>

<style scoped></style>
