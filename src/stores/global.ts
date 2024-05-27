import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => {
        return {
            isSidebarVisible: false
        }
    },
    actions: {
        toggleSidebar(val: boolean) {
            this.isSidebarVisible = val
        }
    }
})
