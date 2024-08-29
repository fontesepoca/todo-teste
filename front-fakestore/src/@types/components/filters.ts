export interface filtersProps {
  valueProductName: string;
  setValueProductName: (valueProductName: string) => void;
  valueCategorie: string | undefined;
  setCategorie: (valueCategorie: string | undefined) => void;
  valueOrder: OrderTypes | undefined;
  setOrder: (valueOrder: OrderTypes | undefined) => void;
}

export type OrderTypes = "name asc" | "name desc" | "price asc" | "price desc";
