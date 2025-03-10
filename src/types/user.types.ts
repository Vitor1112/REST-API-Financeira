type User = {
  name: string;
  email: string;
  password: string;

};

export default User;

export type Sales = {
  coin: string;
  data_purchase: string;
  value_purchase: number; // "float" não é válido no TS, usa-se "number"
  unity_purchase: number; // Corrigido para "number"

  total_money_purchase: number;

  value_sale: number | null; // Corrigido para "number | null"
  data_sale: string | null; // Corrigido para "string | null"
  unity_sale: number | null; // Corrigido para "number | null"
  total_money_sale: number | null; // Corrigido para "number | null"
  profit: number | null; // Corrigido para "number | null"
};