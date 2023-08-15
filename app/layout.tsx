import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: 'Isabella\'s Blog',
  description: 'Created by Isabella Stephens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-primary-200'>
        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  )
}
