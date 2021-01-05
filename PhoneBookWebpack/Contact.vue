<template>
  <tr>
    <td><!--suppress HtmlFormInputWithoutLabel -->
      <input type="checkbox" v-model="item.checked"></td>
    <td>{{ index + 1 }}</td>
    <td>{{ item.surname }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.phone }}</td>
    <td>
      <button type='button' @click="deleteContact" class="btn btn-outline-danger" title='Удалить контакт'>x
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    deleteContact() {
      this.$emit("delete-contact", this.item);
    }
  },
}
</script>