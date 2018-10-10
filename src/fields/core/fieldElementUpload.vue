<template>
    <el-upload
      :action="schema.url ? schema.url : ''"
      :id="getFieldID(schema)"
      :on-preview="schema.handlePreview"
      :on-remove="schema.handleRemove"
      :before-remove="schema.beforeRemove"
      :multiple="schema.multiple"
      :limit="schema.limit"
      :on-exceed="schema.handleExceed"
      :file-list="schema.fileList"
      :name="schema.inputName"
      :readonly="schema.readonly"
      :required="schema.required"
      :accept="schema.accept"
      :drag="schema.drag"
      :disabled="disabled"
      @change="onChange"
    >
        <el-button v-if="!schema.drag" size="small" type="primary">{{schema.placeholder || "Click to upload"}}</el-button>

        <i v-if="schema.drag" class="el-icon-upload"></i>
        <div v-if="schema.drag" class="el-upload__text">{{schema.placeholder || `Drop file here or click to upload`}}</div>

        <div slot="tip" v-if="schema.tip" class="el-upload__tip">{{schema.tip}}</div>
    </el-upload>
</template>

<script>
import abstractField from "../abstractField";
import { isFunction } from "lodash";

export default {
	mixins: [abstractField],
	methods: {
		onChange($event) {
			if (isFunction(this.schema.onChanged)) {
				// Schema has defined onChange method.
				this.schema.onChanged.call(this, this.model, this.schema, $event, this);
			}
		}
	}
};
</script>

<style lang="scss">
.vue-form-generator .field-input {
	.wrapper {
		width: 100%;
	}
	.helper {
		margin: auto 0.5em;
	}
}
</style>
