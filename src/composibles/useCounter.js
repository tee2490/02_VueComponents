import { ref } from "vue";

export function useCounter() {
  const count = ref(10);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}