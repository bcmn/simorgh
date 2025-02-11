import React from 'react';
import Metadata from './index';
import { shouldShallowMatchSnapshot } from '../../../testHelpers';

const iconSizes = {
  'apple-touch-icon': [
    '72x72',
    '96x96',
    '128x128',
    '144x144',
    '152x152',
    '192x192',
    '384x384',
    '512x512',
  ],
  icon: ['72x72', '96x96', '192x192'],
};

const metadataSnapshotTest = (
  testDescription,
  isAmp,
  alternateLinks,
  ampLink,
  articleAuthor,
  articleSection,
  appleTouchIcon,
  brandName,
  canonicalLink,
  defaultImage,
  defaultImageAltText,
  description,
  dir,
  facebookAdmin,
  facebookAppID,
  lang,
  locale,
  metaTags,
  themeColor,
  timeLastPublished,
  timeFirstPublished,
  title,
  twitterCreator,
  twitterSite,
  type,
  service,
  showArticleTags,
) =>
  describe(testDescription, () => {
    const metadataProps = {
      isAmp,
      alternateLinks,
      ampLink,
      articleAuthor,
      articleSection,
      appleTouchIcon,
      brandName,
      canonicalLink,
      defaultImage,
      defaultImageAltText,
      description,
      dir,
      facebookAdmin,
      facebookAppID,
      lang,
      locale,
      metaTags,
      themeColor,
      timeLastPublished,
      timeFirstPublished,
      title,
      twitterCreator,
      twitterSite,
      type,
      service,
      showArticleTags,
    };

    shouldShallowMatchSnapshot(
      'should render correctly',
      <Metadata {...metadataProps} iconSizes={iconSizes} />,
    );
  });

describe('Metadata', () => {
  metadataSnapshotTest(
    'News article',
    false,
    [
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'x-default',
      },
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'en',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
        hrefLang: 'en-gb',
      },
    ],
    'https://www.bbc.com/news/articles/c0000000001o.amp',
    'BBC News',
    null,
    'https://foo.com/static/news/image.png',
    'BBC News',
    'https://www.bbc.com/news/articles/c0000000001o',
    'https://www.bbc.com/news/image.png',
    'BBC News',
    'This is a description',
    'ltr',
    101010,
    202020,
    'en-GB',
    'en_GB',
    ['tagA', 'tagB'],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'An article title',
    '@BBCNews',
    '@BBCNews',
    'article',
    'news',
    true,
  );

  metadataSnapshotTest(
    'News AMP article',
    true,
    [
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o.amp',
        hrefLang: 'x-default',
      },
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o.amp',
        hrefLang: 'en',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c0000000001o.amp',
        hrefLang: 'en-gb',
      },
    ],
    'https://www.bbc.com/news/articles/c0000000001o.amp',
    'BBC News',
    null,
    'https://foo.com/static/news/image.png',
    'BBC News',
    'https://www.bbc.com/news/articles/c0000000001o',
    'https://www.bbc.com/news/image.png',
    'BBC News',
    'This is a description',
    'ltr',
    101010,
    202020,
    'en-GB',
    'en_GB',
    ['tagA', 'tagB'],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'An article title',
    '@BBCNews',
    '@BBCNews',
    'article',
    'news',
    true,
  );

  metadataSnapshotTest(
    'Persian article',
    false,
    [],
    'https://www.bbc.com/persian/articles/c4vlle3q337o.amp',
    'BBC News فارسی',
    null,
    'https://foo.com/static/persian/image.png',
    'BBC News فارسی',
    'https://www.bbc.com/persian/articles/c4vlle3q337o',
    'https://www.bbc.com/persian/image.png',
    'BBC News فارسی',
    'This is a description',
    'rtl',
    101010,
    202020,
    'fa',
    'fa',
    ['tagA', 'tagB'],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'پهپادی که برایتان قهوه می‌آورد',
    '@bbcpersian',
    '@bbcpersian',
    'article',
    'persian',
    true,
  );

  metadataSnapshotTest(
    'Persian AMP article',
    true,
    [],
    'https://www.bbc.com/persian/articles/c4vlle3q337o.amp',
    'BBC News فارسی',
    null,
    'https://foo.com/static/persian/image.png',
    'BBC News فارسی',
    'https://www.bbc.com/persian/articles/c4vlle3q337o',
    'https://www.bbc.com/persian/image.png',
    'BBC News فارسی',
    'This is a description',
    'rtl',
    101010,
    202020,
    'fa',
    'fa',
    ['tagA', 'tagB'],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'پهپادی که برایتان قهوه می‌آورد',
    '@bbcpersian',
    '@bbcpersian',
    'article',
    'persian',
    true,
  );

  metadataSnapshotTest(
    'articleSection is not null',
    false,
    [
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'x-default',
      },
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'en',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
        hrefLang: 'en-gb',
      },
    ],
    'https://www.bbc.com/news/articles/c0000000001o.amp',
    'BBC News',
    'Politics',
    'https://foo.com/static/news/image.png',
    'BBC News',
    'https://www.bbc.com/news/articles/c0000000001o',
    'https://www.bbc.com/news/image.png',
    'BBC News',
    'This is a description',
    'ltr',
    101010,
    202020,
    'en-GB',
    'en_GB',
    ['tagA', 'tagB'],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'An article title',
    '@BBCNews',
    '@BBCNews',
    'article',
    'news',
    true,
  );

  metadataSnapshotTest(
    'WS Front Page',
    false,
    [
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'x-default',
      },
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'en',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
        hrefLang: 'en-gb',
      },
    ],
    'https://www.bbc.com/news/articles/c0000000001o.amp',
    '',
    '',
    'https://foo.com/static/news/image.png',
    'BBC News',
    'https://www.bbc.com/news/articles/c0000000001o',
    'https://www.bbc.com/news/image.png',
    'BBC News',
    'This is a description',
    'ltr',
    101010,
    202020,
    'pcm',
    'pcm',
    [],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'Index title',
    '@BBCNews',
    '@BBCNews',
    'IDX',
    'news',
    false,
  );

  metadataSnapshotTest(
    'WS Front Page does not render article metadata even if values provided',
    false,
    [
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'x-default',
      },
      {
        href: 'https://www.bbc.com/news/articles/c0000000001o',
        hrefLang: 'en',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c0000000001o',
        hrefLang: 'en-gb',
      },
    ],
    'https://www.bbc.com/news/articles/c0000000001o.amp',
    'Author should not be added as a tag',
    '',
    'https://foo.com/static/news/image.png',
    'BBC News',
    'https://www.bbc.com/news/articles/c0000000001o',
    'https://www.bbc.com/news/image.png',
    'BBC News',
    'This is a description',
    'ltr',
    101010,
    202020,
    'pcm',
    'pcm',
    [],
    '#B80000',
    '1539188371344',
    '1514811600000',
    'Index title',
    '@BBCNews',
    '@BBCNews',
    'IDX',
    'news',
    false,
  );
});
