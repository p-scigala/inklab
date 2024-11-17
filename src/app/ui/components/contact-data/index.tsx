import IconStreet from '/public/icons/street.svg';
import IconAddress from '/public/icons/address.svg';
import IconPhone from '/public/icons/phone-mobile.svg';
import IconEmail from '/public/icons/email.svg';
import Icon from '../../primitives/icon';
import clsx from 'clsx';

interface ContactDataProps {
  address: AddressType
  withIcons?: boolean
  inline?: boolean
}

interface AddressType {
  street?: string
  number?: string
  city: string
  phone?: string
  zipCode?: string
  country?: string
  countryShort?: string
  email?: string
}

export default function ContactData({ address, withIcons, inline }: ContactDataProps) {
  const paragraphClassName = clsx("flex gap-2 mb-4 text-xl leading-[32px]", inline && "flex-col items-center text-center");
  const iconClassName = "h-[32px]";

  return (
    <div className={clsx(inline && "flex gap-8")}>
      {address.street &&
        <p className={paragraphClassName}>
          {withIcons && <Icon image={IconStreet} className={iconClassName} />}
          <span>{address.street} {address.number}</span>
        </p>
      }
      <p className={paragraphClassName}>
        {withIcons && <Icon image={IconAddress} className={iconClassName} />}
        <span>
          {address.zipCode && `${address.zipCode} `}
          {address.city}
          {address.country && <><br />{address.country}</>}
        </span>
      </p>
      {
        address.street &&
        <p className={paragraphClassName}>
          {withIcons && <Icon image={IconPhone} className={iconClassName} />
          }
          <span>{address.phone}</span>
        </p >
      }
      {
        address.email &&
        <p className={paragraphClassName}>
          {withIcons && <Icon image={IconEmail} className={iconClassName} />
          }
          <span>{address.email}</span>
        </p >
      }
    </div >
  );
}
