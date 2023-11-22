import { MouseEventHandler, ReactElement } from 'react'

import { ButtonContainer } from './button.styles'

export type ButtonAppearance = 'accent' | 'neutral' | 'system'
export type ButtonHierarchy = 'primary' | 'secondary'

export interface ButtonProps {
	appearance: ButtonAppearance
	hierarchy: ButtonHierarchy
	icon?: ReactElement
	text: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
	const { appearance, hierarchy, icon, text, handleClick } = props

	return (
		<ButtonContainer
			appearance={appearance}
			hierarchy={hierarchy}
			onClick={handleClick}
		>
			{icon}
			<span>{text}</span>
		</ButtonContainer>
	)
}
