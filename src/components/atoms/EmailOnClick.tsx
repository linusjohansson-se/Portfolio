export default function EmailOnClick() {
    const contactAdress = "Y29udGFjdEBvbnRoZWxpbmUuc2U=";
    window.open(`mailto:${atob(contactAdress)}`);
}