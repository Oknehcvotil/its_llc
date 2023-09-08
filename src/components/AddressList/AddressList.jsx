import { AddressLink, AddrList } from "./AddressList.styled";

const AddressList = () => {
  const addresses = [
    { link: "mailto:office@ua-its.com", textKey: "office@ua-its.com" },
    { link: "tel:+380674455145", textKey: "+38 (067) 445-51-45" },
  ];

  return (
    <AddrList>
      {addresses.map((address, index) => (
        <li key={index}>
          <AddressLink href={address.link}>{address.textKey}</AddressLink>
        </li>
      ))}
    </AddrList>
  );
};

export default AddressList;
