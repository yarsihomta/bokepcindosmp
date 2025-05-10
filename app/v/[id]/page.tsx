import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `Bokep ${file.title}`;
    const description = `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
	const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Bokep ${file.title}`,
        image: file.splash_img,
        description: `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`,
        url: `https://bokepcindosmp.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepcindosmp.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepcindosmp.pages.dev'
              }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Bokep ${file.title}`,
        image: file.splash_img,
        description: `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`,
        url: `https://bokepcindosmp.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepcindosmp.pages.dev/favicon.ico'},
        author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepcindosmp.pages.dev'},
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `ReadAction`,
                target: `https://bokepcindosmp.pages.dev/v/${file.filecode}`
            }  
        }
        }
        
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10" itemProp="video" itemScope itemType="http://schema.org/VideoObject">
<meta itemProp="author" content="admin" />
<meta itemProp="name" content={`Bokep ${file.title}`} />
<meta itemProp="description" content={`Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`} />
<meta itemProp="duration" content={`${file.length}`} />
<meta itemProp="thumbnailUrl" content={`${file.splash_img}`} />
<meta itemProp="embedURL" content={`https://doodstream.com/e/${file.filecode}`} />
<meta itemProp="uploadDate" content={`${new Date(
            file.uploaded + ".000Z"
        ).toISOString()}`} />
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[90vh] md:h-[90vh] lg:h-[90vh]"
                src={`https://doodstream.com/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        Bokep {file.title}
                    </CardTitle>
                </CardHeader>
		<CardContent><center><Script
      dangerouslySetInnerHTML={{__html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1078976})`,}}
   /><Script strategy="lazyOnload" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/><ins id="1078976" data-width="300" data-height="112"></ins></center>
       		     <p>Video Bokep {file.title} di {SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {SITENAME} wiki raja bokeptube full porno bokepcindosmpma simontok bokepind playbokep indobokep xpanasonline indoh janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
		</CardContent>
            </Card><Script
		dangerouslySetInnerHTML={{__html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1058210})`,}}
   /><Script data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/><ins id="1058210" data-width="300" data-height="262"></ins>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video Bokep {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[2]} />
        </div>
    );
}
