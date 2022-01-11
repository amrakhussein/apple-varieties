// NOTE:::

// This project for experimenting with cheerio
// As well as experimenting with tailwind (css)

// with the data of this site
// -> https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/'


import express from 'express';
import cors from 'cors';
import * as path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize app
const app = express();
// import router from "./routes/mainPage";

// const path = require('path');

const PORT = process.env.PORT || 8080;

// middlewares
// const cors = require('cors');
app.use(cors());

// app.use(express.json())

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const siteUrl =
  'https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/';

const applesData = async (url = siteUrl) => {
  try {
    const res = await axios.get(url);
    // console.log(res)
    // console.log(typeof res)
    let $ = cheerio.load(res.data, null, false);
    let appleData = $('h1.entry-title');

    const mainTitle = $('h1.entry-title');
    const entryContent = $('#content').find(
      'div.entry-content > p:nth-child(1)'
    );
    const appleVitamins = $('#content').find(
      '.tag-apples.entry > div.entry-content > h2:nth-child(3)'
    );
    const appleCharacteristics = {
      title: 'Characteristics and Uses of Different Types of Apples',
      content:
        'Now, it’s time to learn a little about the 18 different types of apples discussed in this article. Please, keep in mind that these are general facts. So, if you need further details about any type from the eighteen, ask in the comments section below. I will respond to you as soon as possible!',
    };

    const appState = {
      addItem() {
        [].push.call(this, arguments);
      },
    };
    //  appState.addItem("first", "second")
    //  console.log(appState['0']['0'])
    // #content > div.post-7788.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-holidays.category-seasonal.tag-apples.entry > div.entry-content > h3:nth-child(27)

    const appleInfo = () => {

      const appleTypesItems = $('.entry-content');
      let appleTypesContainer = {
        title: []
      }
      if (appleTypesItems && appleTypesItems.length) {
       
          
          
          console.log(appleTypesContainer)
          appleTypesItems
          .find('h3:nth-child(n+10)')
          .toArray()
          .map(elem => {
            appleTypesContainer.title.push( $(elem).text())
            
          })
          console.log(appleTypesContainer)
        }
      }
      appleInfo()
      
    
     
  

    // console.log("apple types::::", appleTypesContent(appleTypesArr, appleTypesListsArr))
    // console.log('apple types::::', appleTypesArry);
    // #content > div.post-7788.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-holidays.category-seasonal.tag-apples.entry >  > ul:nth-child(28) > li:nth-child(1)
    

    // const appleInfo = () => {};
  } catch (err) {
    console.log(new Error(err));
  }
}

applesData();
