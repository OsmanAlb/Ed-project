import { ProfileInfoRow } from './ProfileInfoRow'
import {
	MailIcon,
	PasswordIcon,
	PhoneIcon,
	ProfileIcon,
	CreditCardIcon,
	PrivacyIcon
} from '../components/ui/icons'

export const ProfileInfo = () => {
	return (
		<>
			<ProfileInfoRow
				name='Name'
				value='Christina Angela'
				icon={<ProfileIcon />}
			/>
			<ProfileInfoRow
				name='Email'
				type='email'
				value='christina.angela123@mail.com'
				icon={<MailIcon />}
			/>
			<ProfileInfoRow
				name='Password'
				type='password'
				safe
				value='value'
				icon={<PasswordIcon />}
			/>
			<ProfileInfoRow
				name='Phone Number'
				type='phone'
				value='(684) 555-0102'
				icon={<PhoneIcon />}
			/>
			<ProfileInfoRow
				name='Payment'
				safe
				value='value'
				icon={<CreditCardIcon />}
			/>
			<ProfileInfoRow
				name='Privacy Policy'
				safe
				link
				value='value'
				icon={<PrivacyIcon />}
			/>
		</>
	)
}
