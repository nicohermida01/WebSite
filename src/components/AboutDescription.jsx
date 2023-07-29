import Link from 'next/link'

import { getDictionary } from 'utils/dictionaries'

export async function AboutDescription() {
	const i18nDict = await getDictionary()

	return (
		<div className='descriptionCard'>
			<div className='flex flex-col gap-[8px] text-TEXT-DESCRIPTION'>
				<div className='text-black'>
					<p className='font-bold text-[26px]'>
						{i18nDict['about-description#paragraph1']}
					</p>
					<p className='text-[20px] leading-[12px]'>
						{i18nDict['about-description#paragraph2']}
					</p>
					<p className='text-[18px]'>
						{i18nDict['about-description#paragraph3']}``
					</p>
				</div>
				<p>{i18nDict['about-description#paragraph4']}</p>
				<p>{i18nDict['about-description#paragraph5']}</p>
				<p>{i18nDict['about-description#paragraph6']}</p>
				<p>{i18nDict['about-description#paragraph7']}</p>
			</div>

			<Link
				href='#'
				className='inline-block bg-PRIMARY text-white py-[8px] px-[16px] rounded-[20px] font-bold mt-[16px] hover:bg-PRIMARY-HOVER defaultTransition'
			>
				{i18nDict['about-cv']}
			</Link>
		</div>
	)
}
