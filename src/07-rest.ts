 import { ROLES, User} from './01-enums';

 const currentUser: User = {
    userName: 'Heider',
    role: ROLES.CUSTOMER
 }

 export const checkAdminRole = (user: User) => {
    return user.role === ROLES.ADMIN;
 }

 const isAdmin = checkAdminRole(currentUser);
 console.log(isAdmin);


 export const checkRole = (user: User, ...rolesToCheck: ROLES[]) => {
    return rolesToCheck.includes(user.role);
 }

 console.log(checkRole(currentUser, ROLES.CUSTOMER, ROLES.ADMIN));
