<template>
  <div >
    <h1>Bin2Dec</h1>
    <div >
      'Enter' After Input <input v-on:keyup.enter="submit" v-model="input" placeholder="8 binary digits">
      <br>
      <label class="form-control" v-model="output" placeholder="8 binary digits"> {{ output }} </label>
    </div>
  </div>
</template>

<script>
import CheckBinary from '../check/CheckBinary'

export default {
  name: 'HelloWorld',
  components: {
    CheckBinary
  },
  data () {
    return {
      output: ''
    }
  },
  methods: {
    submit() {
      this.output = ""
      if(!CheckBinary.checkLength(this.input))
        this.output = "Only 8 binary digits"
      else if(!CheckBinary.checkZeroOrOne(this.input))
        this.output = "Only 0 or 1 Input"
      else
        this.output = parseInt(this.input, 2);
    }
  }
}
</script>

<style >
</style>
