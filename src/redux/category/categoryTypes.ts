export type CategoryItem = {
    id: number;
  category_name:string
};

export interface CategorySliceState {
    items: CategoryItem[];
}