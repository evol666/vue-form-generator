<template>
	<el-checkbox
		:id="getFieldID(schema)"
    :disabled="disabled"
    v-model="value"
    :autocomplete="schema.autocomplete"
		:name="schema.inputName"
		:class="schema.fieldClasses"
  >{{schema.text}}</el-checkbox>
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField]
};
</script>

<style lang="scss">
.vue-form-generator .field-checkbox input {
	margin-left: 12px;
}
</style>
