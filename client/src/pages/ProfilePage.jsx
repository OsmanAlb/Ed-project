import ProfileLayout from '../layout/ProfileLayout'
import userImage from '../assets/images/profile.png'

const ProfilePage = () => {
	return (
		<ProfileLayout
			userRole={'teacher'}
			userData={{
				userName: 'Christina Angela',
				nickName: 'angela.christina123',
				userImage,
				balance: '15,567',
				approved: '236',
				pending: '587',
				bages: [
					{
						title: 'Good Listener',
						subtitle: 'Lorem ipsum dolor sit amet'
					},
					{
						title: 'Focused',
						subtitle: 'Lorem ipsum dolor sit amet'
					},
					{
						title: 'Fast Learner',
						subtitle: 'Lorem ipsum dolor sit amet'
					},
					{
						title: 'Story Teller',
						subtitle: 'Lorem ipsum dolor sit amet'
					},
					{
						title: 'Champion',
						subtitle: 'Lorem ipsum dolor sit amet'
					}
				]
			}}
		></ProfileLayout>
	)
}

export default ProfilePage
