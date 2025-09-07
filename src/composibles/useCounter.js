import { ref } from "vue";

export function useCounter(initailValue = 0, step = 1) {
  const count = ref(initailValue);

  const increment = () => {
    count.value += step;
  };

  const decrement = () => {
    count.value -= step;
  };

  return { count, increment, decrement };
}