'use strict'
function olderThan14(birthday) {
    const birthDate = new Date(birthday)

    const birthDateObj = new Date(birthDate);

    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDateObj.getFullYear();

    // Проверяем, старше ли 14 лет
    return age > 14;

}
console.log(olderThan14('2002-10-30'))