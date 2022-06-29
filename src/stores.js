import { writable } from "svelte/store"

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Nisi id elit nulla deserunt nisi ea amet velit minim. Commodo non nostrud duis est mollit Lorem exercitation. Ea sint consectetur nostrud nostrud Lorem nostrud ipsum qui fugiat ad enim aliquip adipisicing. Esse consequat anim nostrud dolor aliqua consectetur ea excepteur sunt pariatur exercitation magna laborum eiusmod.'
  }, {
    id: 2,
    rating: 9,
    text: 'Qui consectetur adipisicing eiusmod mollit culpa ullamco sit voluptate aliqua aute esse id cupidatat ex. Do excepteur anim ex amet. Elit veniam dolore cillum consectetur. Dolor ea ex velit nisi. In tempor anim anim eiusmod. Velit eu id laboris occaecat occaecat occaecat laboris exercitation in officia eiusmod. Culpa reprehenderit in officia culpa velit veniam fugiat duis.'
  }, {
    id: 3,
    rating: 8,
    text: 'Commodo magna aliquip elit cillum eu eu nulla consequat. Irure Lorem laborum minim reprehenderit. Elit consectetur nulla aliquip duis quis sit aute aliqua labore pariatur adipisicing irure. Laborum incididunt id eiusmod velit aliquip occaecat magna nisi id ex qui. Pariatur dolore esse ullamco proident officia ut in. Ullamco proident pariatur occaecat anim irure ea fugiat mollit pariatur mollit aliquip quis cillum Lorem. Esse ullamco eu esse dolor cillum tempor.'
  },
])