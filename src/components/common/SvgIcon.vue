<!-- @/components/SvgIcon -->
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
/**
 * svg 图标组件
 * iconClass="图标名称"
 * className="风格名称"
 */
export default {
  name: 'svg-icon',
  props: {
    iconClass: { type: String, required: true },
    className: { type: String }
  },
  computed: {
    iconName () {
      return `#${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 20em;
  height: 20em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

