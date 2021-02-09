export const Validations =
// export const ValidationPatterns =
{
    email_pattern :/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/,
    phone_pattern :/^[0-9-+() ]*$/ ,   //THIS STRING DOEST NOT ALLOW THE USER TO ENTER ANY ALPHABETICAL VALUES......
    alpha_numeric: /^[A-Z0-9]+$/i,
    alpha_numeric1: /^[\w -]*$/,
    url_pattern: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
    onlyNum_pattern : /^-?(0|[1-9]\d*)?$/,
    price_pattern : /^[0-9]+(\.[0-9]{1,50})?$/,
    decimal : /^[0-9]+(\.[0-9]{1,2})?$/,
    name_pattern: /^[a-zA-z ]+$/,
    username_pattern: /^[\w.'-]+$/,
    whitespace: /^\S.*$/,
    number_pattern: /^-?([1-9]\d*)?$/,
    password_pattern: /(?=^[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]{6,}$)(?=([!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*\W+){1,})[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*$/
}
