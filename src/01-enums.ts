enum ROLES {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  CUSTOMER = "CUSTOMER"
}

type User = {
  userName: string,
  role: ROLES
}


const usuario1: User = {
  userName: 'Heider',
  role: ROLES.ADMIN
}
 