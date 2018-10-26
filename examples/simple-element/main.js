var VueFormGenerator = window.VueFormGenerator;
function fileUpload (model, schema, event, instance) {
	console.log(event.target.files[0].raw instanceof File)
	console.log(this.model['' + event.target.name])
	this.model['' + event.target.name] = event.target.files
	console.log(model)
}
var vm = new Vue({
	el: "#app",
	components: {
		"vue-form-generator": VueFormGenerator.component
	},

	methods: {
		prettyJSON: function(json) {
			if (json) {
				json = JSON.stringify(json, undefined, 4);
				json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
					var cls = "number";
					if (/^"/.test(match)) {
						if (/:$/.test(match)) {
							cls = "key";
						} else {
							cls = "string";
						}
					} else if (/true|false/.test(match)) {
						cls = "boolean";
					} else if (/null/.test(match)) {
						cls = "null";
					}
					return "<span class=\"" + cls + "\">" + match + "</span>";
				});
			}
		}
	},

	data: {
		model: {
			id: 1,
			name: "John Doe",
			password: "J0hnD03!x4",
			skill: 'javascript',
			email: "john.doe@gmail.com",
			status: true,
			lang: 'en-US',
			file: '',
			dbo: new Date() + '',
			motto: 'hello world'
		},
		schema: {
			fields: [
				{
					type: "upload",
					label: "Upload",
					model: "file",
					url: "https://jsonplaceholder.typicode.com/posts/",
					multiple: false,
					limit: 1,
					onChanged: fileUpload
				},
				{
					type: "input",
					inputType: "text",
					label: "ID",
					model: "id",
					readonly: true,
					featured: false,
					disabled: true
				},
				{
					type: "input",
					inputType: "text",
					label: "Name",
					model: "name",
					readonly: false,
					featured: true,
					required: true,
					disabled: false,
					placeholder: "User's name",
					validator: VueFormGenerator.validators.string
				},
				{
					type: "input",
					inputType: "password",
					label: "Password",
					model: "password",
					min: 6,
					required: true,
					hint: "Minimum 6 characters",
					validator: VueFormGenerator.validators.string
				},	
				{
					type: "input",
					inputType: "email",
					label: "E-mail",
					model: "email",
					placeholder: "User's e-mail address",
					validator: VueFormGenerator.validators.email
				},
				{
					type: "checkbox",
					label: "Status",
					model: "status",
					multi: true,
					readonly: false,
					featured: false,
					disabled: false,
					default: true
				},
				{
					type: "select",
					label: "Language",
					model: "lang",
					multiple: true,
					filterable: true,
					values: function() {
						return [
							{ id: "en-GB", name: "English (GB)" },
							{ id: "en-US", name: "English (US)" },
							{ id: "de", name: "German" },
							{ id: "it", name: "Italic" },
							{ id: "fr", name: "French" }
						]
					}
				},
				{
					type: "select",
					label: "Skills",
					model: "skill",
					filterable: true,
					values: function() {
						return [
							{ id: "javascript", name: "Javascript" },
							{ id: "en-GB", name: "English (GB)" },
							{ id: "en-US", name: "English (US)" },
							{ id: "de", name: "German" },
							{ id: "it", name: "Italic" },
							{ id: "fr", name: "French" }
						]
					}
				},
				{
					type: "elementRadios",
					label: "Favorite Color",
					model: "color",
					values: [
							{name: "Deep Pink", value:"#FF1493"},
							{name: "Peach Puff", value:"#FFDAB9"},
							{name: "Dark Orange", value:"#FF8C00"},
							{name: "Light Green", value:"#90EE90"}
					]
				},
				{
					type: "elementTextArea",
					label: 'Motto',
					model: "motto"
				}
			]
		},

		formOptions: {
			validateAfterLoad: true,
			validateAfterChanged: true,
			theme: 'element',
			labelWidth: "100px"
		}
	}
});