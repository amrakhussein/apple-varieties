// NOTE:::

// This project for experimenting with cheerio
// As well as experimenting with tailwind (css)

// Data used:: from
// -> https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/'

import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const siteUrl =
  'https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/';

const applesData = async (url = siteUrl) => {
  try {
    const res = await axios.get(url);
    // console.log(res)
    // console.log(typeof res)
    let $ = cheerio.load(res.data, null, false);
    const appleData = $('h1.entry-title');

    const mainTitle = $('h1.entry-title');

    const entryContent = $('#content').find(
      'div.entry-content > p:nth-child(1)'
    );

    const appleCharacteristics = {
      title: 'Characteristics and Uses of Different Types of Apples',
      content:
        'Now, it’s time to learn a little about the 18 different types of apples discussed in this article. Please, keep in mind that these are general facts. So, if you need further details about any type from the eighteen, ask in the comments section below. I will respond to you as soon as possible!',
    };

    const appleTypesDetail = () => {
      const appleTypesItems = $('.entry-content');
      let appleTypesContainer = {
        titles: [],
        content: [],
      };
      if (appleTypesItems && appleTypesItems.length) {
        // console.log(appleTypesContainer)
        appleTypesItems
          .find('h3:nth-child(n+10)')
          .toArray()
          .map((elem) =>
            appleTypesContainer.titles.push($(elem).text().trim())
          );
        // console.log(appleTypesContainer)

        // contents
        appleTypesItems
          .find('h3:nth-child(n+10)+ul')
          .toArray()
          .map((elem) => appleTypesContainer.content.push($(elem).text()));
      }
      return {
        appleTypesContainer,
      };
    };

    return {
      mainTitle: mainTitle.text(),
      entryContent: entryContent.text(),
      appleCharacteristics: appleCharacteristics,
      appleTypesDetail: appleTypesDetail(),
    };
  } catch (err) {
    console.log(new Error(err));
  }
};

// write Data To json File
(async function () {
  try {
    const jsonData = await applesData();
    const res = await JSON.stringify(jsonData);
    console.log(res);
    fs.writeFile('appleInfo.json', res, 'utf-8', (err) => {
      if (err) {
        console.log('ERR::', err);
      }
    });
  } catch (err) {
    throw new Error(err);
    return 400;
  }
})();
