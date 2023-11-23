import {ref, computed} from "vue";

export const collapsed = ref(false) //Реактивная переменная, которая будет изменяться
export const toggleSidebar = () => (collapsed.value = !collapsed.value) //Изменяем значение

export const SIDEBAR_WIDTH = 274 //Параметры сайдбара, в развернутом виде
export const SIDEBAR_WIDTH_COLLAPSED = 73 //В свернутом виде
export const sidebarWidthChange = computed( //компьютед свойство, которое будет определять текущую ширину блока сайдбара
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)


