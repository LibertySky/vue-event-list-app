<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': 'IconsSprite.svg#' + name }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  // font-size: 12rem;
  // font-weight: 900;
  border: none;

  .icon {
    stroke: currentColor;
    stroke-width: 1;
    // stroke-linecap: round;
    // stroke-linejoin: round;
    // fill: none;

    margin-right: 7px;
  }
}
</style>