<template>
    <el-input-number
        v-model="value"
        :disabled="disabled"
        :autocomplete="schema.autocomplete"
        :placeholder="schema.placeholder"
        :value="value"
        :alt="schema.alt"
        :max="schema.max"
        :maxlength="schema.maxlength"
        :min="schema.min"
        :minlength="schema.minlength"
        :multiple="schema.multiple"
        :name="schema.inputName"
        :size="schema.size"
        :src="schema.src"
        :step="schema.step"
        :width="schema.width"
        :files="schema.files"
				@focus="onFocus"
        controls-position="right"
    >

    </el-input-number>
</template>

<script>
import abstractField from "../abstractField";
import { isFunction } from "lodash";

export default {
	mixins: [abstractField],
	methods: {
		onBlur() {
			if (isFunction(this.debouncedFormatFunc)) {
				this.debouncedFormatFunc.flush();
			}
		},
		onFocus($event) {
			$event.vfg = {
				model: this.schema
			};
			if (isFunction(this.schema.onFocused)) {
				this.schema.onFocused.call(this, this.model, this.schema, $event, this);
			}
		}
	},

	mounted() {
	},

	created() {
	}
};
</script>