<script setup>
const usersList = [
  {
    id: 23,
    gender: 'female',
    firstname: 'Emily',
    lastname: 'Parker',
    age: 24,
    account: {
      premium: true,
      avatar: {
        url: 'https://res.cloudinary.com/lereacteur-apollo/image/upload/v1706536025/RNCP31114/cours-vue/exos-sem-3/conditionnal-display-emily_py1pu1.jpg',
      },
    },
  },
  {
    id: 54,
    gender: 'male',
    firstname: 'Marcus',
    lastname: 'Bennett',
    age: 38,
    account: {
      premium: false,
    },
  },
]
</script>
<template>
  <div class="card">
    <div v-for="user in usersList" :key="user.id" class="card1">
      <div class="userPicture">
        <font-awesome-icon :icon="['fas', 'user']" v-if="!user.account.avatar" />
        <img :src="user.account.avatar.url" alt="" v-if="user.account.avatar" />
      </div>
      <div>
        <p>{{ user.firstname }}</p>
        <p>{{ user.lastname }}</p>
        <p>{{ user.age }} ans</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
}
svg {
  font-size: 100px;
}
.card {
  /* border: 1px solid red; */
  display: flex;
  gap: 100px;
}
.card1 {
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 60px 10px 10px;
}
div > p {
  line-height: 20px;
}
</style>
