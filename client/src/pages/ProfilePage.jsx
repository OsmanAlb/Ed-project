import { Link } from 'react-router-dom'
import { ProfileInfoRow } from '../components/ProfileInfoRow'
import { Button } from '../components/ui/Button'
import {
	MailIcon,
	PasswordIcon,
	PhoneIcon,
	ProfileIcon,
	CreditCardIcon,
	PrivacyIcon
} from '../components/ui/icons'

const ProfilePage = () => {
	return (
		<div className='flex pt-[10px] flex-col items-center font-normal'>
			<div className='w-[100px] h-[100px] mb-[20px]'>
				<img src='/src/assets/images/profile.png' alt='' />
			</div>
			<h2 className='text-[18px] mb-[5px]'>Christina Angela</h2>
			<p className='text-[12px] text-secondary mb-5'>
				@angela.christina123
			</p>
			<div className='mb-[37px]'>
				<Button>General</Button>
				<Button variant='ghost-secondary'>Badges</Button>
			</div>
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
			<Button className='my-[35px]' variant='outline'>
				Become Premium
			</Button>
			<Button
				className='font-semibold text-[18px] leading-[28px]'
				size='small'
				variant='ghost-primary'
			>
				<Link to='/login'>LOG OUT</Link>
			</Button>
		</div>
	)
}

export default ProfilePage
