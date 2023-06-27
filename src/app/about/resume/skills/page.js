'use client';

import Topnav from '@/components/Topnav';
import Image from 'next/image';
import { useState } from 'react';

import './skills.css';

import c from '../../../../assets/images/skills/c.png';
import cpp from '../../../../assets/images/skills/cpp.png';
import java from '../../../../assets/images/skills/java.png';
import kotlin from '../../../../assets/images/skills/kotlin.png';
import python from '../../../../assets/images/skills/python.png';

import html from '../../../../assets/images/skills/html.png';
import css from '../../../../assets/images/skills/css.png';
import js from '../../../../assets/images/skills/js.png';
import tailwind from '../../../../assets/images/skills/tailwind.png';
import react from '../../../../assets/images/skills/react.png';
import next from '../../../../assets/images/skills/next.png';
import vue from '../../../../assets/images/skills/vue.png';
import nuxt from '../../../../assets/images/skills/nuxt.png';
import flutter from '../../../../assets/images/skills/flutter.png';
import node from '../../../../assets/images/skills/node.png';
import express from '../../../../assets/images/skills/express.png';
import leaflet from '../../../../assets/images/skills/leaftlet.png';
import springboot from '../../../../assets/images/skills/springboot.png';

import oracle from '../../../../assets/images/skills/oracle.png';
import mysql from '../../../../assets/images/skills/mysql.png';
import mongodb from '../../../../assets/images/skills/mongodb.png';
import firebase from '../../../../assets/images/skills/firebase.png';

import unity from '../../../../assets/images/skills/unity.png';
import figma from '../../../../assets/images/skills/figma.png';
import adobexd from '../../../../assets/images/skills/adobexd.png';
import illustrator from '../../../../assets/images/skills/illustrator.png';
import photoshop from '../../../../assets/images/skills/photoshop.png';
import premierepro from '../../../../assets/images/skills/premierepro.png';
import aftereffects from '../../../../assets/images/skills/aftereffects.png';
import blender from '../../../../assets/images/skills/blender.png';
import matlab from '../../../../assets/images/skills/matlab.png';
import github from '../../../../assets/images/skills/github.png';

export default function Skills() {
	let [activeCategory, setActiveCategory] = useState(0);

	return (
		<>
			<Topnav routeLink="/about/resume" routeName="RESUME"></Topnav>
			<div className="page flex-center-hor">
				<div className="container">
					<h1 className="pageHeader">Raiyan's Skills</h1>
					<ul className="skillCategories flex-center-hor">
						<li
							className={
								activeCategory == 0
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(0)}
						>
							Language
						</li>
						<li
							className={
								activeCategory == 1
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(1)}
						>
							Framework
						</li>
						<li
							className={
								activeCategory == 2
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(2)}
						>
							Database
						</li>
						<li
							className={
								activeCategory == 3
									? 'skillCategory flex-center-full active'
									: 'skillCategory flex-center-full'
							}
							onClick={() => setActiveCategory(3)}
						>
							Tools
						</li>
					</ul>

					<div className="skill">
						{activeCategory == 0 && (
							<ul>
								<li>
									<Image src={c}></Image>C
								</li>
								<li>
									<Image src={cpp}></Image>
									C++
								</li>
								<li>
									<Image src={java}></Image>Java
								</li>
								<li>
									<Image src={kotlin}></Image>Kotlin
								</li>
								<li>
									<Image src={python}></Image>Python
								</li>
								<li>
									<Image src={html}></Image>HTML
								</li>
								<li>
									<Image src={css}></Image>CSS
								</li>
								<li>
									<Image src={js}></Image>JavaScript
								</li>
							</ul>
						)}
						{activeCategory == 1 && (
							<ul>
								<li>
									<Image src={react}></Image>React
								</li>
								<li>
									<Image src={next}></Image>Next.JS
								</li>
								<li>
									<Image src={vue}></Image>Vue
								</li>
								<li>
									<Image src={nuxt}></Image>Nuxt.JS
								</li>
								<li>
									<Image src={node}></Image>Node.JS
								</li>
								<li>
									<Image src={express}></Image>Express.JS
								</li>
								<li>
									<Image src={leaflet}></Image>LeafletJS
								</li>
								<li>
									<Image src={springboot}></Image>SpringBoot
								</li>
								<li>
									<Image src={tailwind}></Image>TailWind.CSS
								</li>
								<li>
									<Image src={flutter}></Image>Flutter
								</li>
							</ul>
						)}
						{activeCategory == 2 && (
							<ul>
								<li>
									<Image src={oracle}></Image>Oracle
								</li>
								<li>
									<Image src={mysql}></Image>MySQL
								</li>
								<li>
									<Image src={mongodb}></Image>MongoDB
								</li>
								<li>
									<Image src={firebase}></Image>Firebase
								</li>
							</ul>
						)}
						{activeCategory == 3 && (
							<ul>
								<li>
									<Image src={unity}></Image>Unity
								</li>
								<li>
									<Image src={blender}></Image>Blender
								</li>
								<li>
									<Image src={figma}></Image>Figma
								</li>
								<li>
									<Image src={adobexd}></Image>AdobeXD
								</li>
								<li>
									<Image src={illustrator}></Image>Illustrator
								</li>
								<li>
									<Image src={photoshop}></Image>Photoshop
								</li>
								<li>
									<Image src={premierepro}></Image>PremierePro
								</li>
								<li>
									<Image src={aftereffects}></Image>AfterEffects
								</li>
								<li>
									<Image src={matlab}></Image>Matlab
								</li>
								<li>
									<Image src={github}></Image>Github
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
