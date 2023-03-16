export interface IUpdateUser {
  id?: string;
  username?: string;
  phoneNumber?: string | null;
  cellphoneNumber?: string | null;
  email?: string | null;
  addressState?: string | null;
  addressCity?: string | null;
  addressDistrict?: string | null;
  addressStreet?: string | null;
  addressNumber?: string | null;
  permission?: string;
  avatar?: string | null;
  password?: string;
  status?: string;
}
