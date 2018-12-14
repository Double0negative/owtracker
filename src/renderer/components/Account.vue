<template>
    <div class="map card"  @click="gotoAccount(account)">
        <div v-if="!edit">
            {{account.id}}
            {{account.name}}
            {{account.battleTag}}
            <button @click.stop="makeEdit">Edit</button>
            <button @click.stop="remove">Delete</button>
        </div>
        <div v-else>
            {{account.id}}
            <input v-model="name">
            <input v-model="battleTag">
            <button @click="updateAccount" class="btn waves">Save</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'account',
    props: ['account'],
    data() {
        return {
            edit: false,
            name: this.account.name,
            battleTag: this.account.battleTag
        }
    },
    methods: {
        async remove() {
            await this.$store.dispatch("deleteAccount", this.account)
        },
        makeEdit() {
            this.name = this.account.name;
            this.battleTag = this.account.battleTag
            this.edit = true
        },
        async updateAccount() {
            await this.$store.dispatch("updateAccount",  {id: this.account.id, name: this.name, battleTag: this.battleTag})
            this.edit = false
        },
        gotoAccount(account) {
            if(!this.edit)
                this.$router.push({ name: 'history', params: { accountId: account.id }})
        }
    }
  }
</script>

