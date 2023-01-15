import type { GatsbyConfig, PluginRef } from 'gatsby';
import 'dotenv/config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// You can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
		siteTitle: `Make with Take`,
		siteTitleAlt: `Make with Take`,
		siteHeadline: `Make with Take`,
		siteUrl: `https://cara.lekoarts.de`,
		siteDescription: `Webエンジニア：島津岳明のポートフォリオサイト`,
		siteImage: `/banner.jpg`,
		author: `@zp_takeaki0817`,
	},
	trailingSlash: `never`,
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Make with Take`,
				short_name: `Make with Take`,
				description: `Webエンジニア：島津岳明のポートフォリオサイト`,
				start_url: `/`,
				background_color: `#141821`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean) as Array<PluginRef>,
};

export default config;
