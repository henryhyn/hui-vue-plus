<template lang="pug">
ul.list-unstyled
  li(v-for='i in 3') Item {{ i }}
ul.list-inline
  li(v-for='i in 3') Item {{ i }}
ul.list-inline.separated.by-gt
  li(v-for='i in 3') Item {{ i }}
ul.list-inline.separated.by-middot
  li(v-for='i in 3') Item {{ i }}
</template>
