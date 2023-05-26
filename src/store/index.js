import { createStore } from 'vuex'



export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

const cardsData = [
  {
    id: '01',
    title: "Хлопчатобумажная пряжа кардная <br class='desktop-only'>Ne 32/1, 100%",
    description: 'Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...',
    image: require("../assets/img/pp1.png"),
  },
  {
    id: '02',
    title: "Пряжа 100% х/б, сурова, кардная, ткацкая, пневмопрядельная хлопчатобумажная OE NE 20/1",
    description: "Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...",
    image: require("../assets/img/pp2.png"),
  },
  {
    id: '03',
    title: "Хлопчатобумажная пряжа кардная <br class='desktop-only'> Ne 30/1, 100%",
    description: 'Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...',
    image: require("../assets/img/pp3.png"),
  },
  {
    id: "04",
    title: 'Пряжа 100% х/б, сурова, кардная,<br class="desktop-only"> ткацкая,пневмопрядельная хлопчатобумажная OE NE 12/1',
    description: "Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...</p>",
    image: require("../assets/img/pp4.png"),
  }
]

export { cardsData }