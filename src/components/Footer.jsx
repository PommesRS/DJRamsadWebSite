import { logo } from '../assets';
import styles, { layout } from '../style'; 
import { footerLinks } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <h1 className={`${styles.heading2} text-gradient font-bold`}>DJRamsad</h1>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new world of content.</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
         {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className=' list-none mt-7'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' :' mb-0'}`}>
                  <a target='_blank' href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>&copy; 2023 DJRamsad.com - All Rights Reserved.</p>
      <p className=' text-gray-700'>Made by Robin Schulze</p>
    </div>
  </section>
)


export default Footer