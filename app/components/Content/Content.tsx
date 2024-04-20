import React from 'react'
import styles from "./Content.module.css";
import { Trends } from './Trends/Trends'

export const Content = (): JSX.Element => {
  return (
	<section className={styles.section}>
		<Trends />
	</section>
  )
}
