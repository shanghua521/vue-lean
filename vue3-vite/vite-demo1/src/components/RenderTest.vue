<script>
import { h } from "vue";

export default {
  props: {
    counter: {
      type: Number,
      default: 1,
    },
  },
  render() {
    // this.$scoptedSlots.content(); for vue2
    this.$slots.content();
    this.$slots.default();
    /* const emit = this.$emit;
        const counter = this.counter; */
    return h("div", [
      h(
        "div",
        {
          onClick: this.onClick,
          /* () {
                emit("update:counter", counter + 1);
              },*/
        },
        `I am RenderTest: ${this.counter}`,
        this.$slots.default(),
        this.$slots.content()
      ),
    ]);
  },
  methods: {
    onClick() {
      this.$emit("update:counter", this.counter + 1);
    },
  },
};
</script>