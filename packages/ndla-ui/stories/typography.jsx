import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Center, articleUrl } from './helpers';
import article from '../dummydata/index';
import { Table } from '../src/table/Table';

/*
 * Example content
 */
const articleHMTL = (id) => {
  const articleHTML = document.createElement('div');
  articleHTML.innerHTML = article[`article${id}`].content[0].content;
  const paragraphs = articleHTML.getElementsByTagName('p');
  const table = articleHTML.getElementsByTagName('table')[0];

  return {
    articleHTML,
    paragraphs,
    table,
  };
};

const heading = (articleHTML, level) => {
  if (!articleHTML) return `<h${level}>Overskrift ${level}</h${level}>`;
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<div>Overskrift ${level}:</div><h${level}>Overskrift ${level}</h${level}>`;
  return `<div>Overskrift ${level}:</div><h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML} <h${level}>`;
};

storiesOf('Typografi', module)
  .add('Farger', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Farger på NDLA</h1>
        </section>
        <section>
          <strong>Variasjoner av NDLA-fargen</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#20588F' }} className="u-text-inverted u-padding-tiny">NDLA primærfarge: #20588F</li>
            <li style={{ backgroundColor: '#507AA4' }} className="u-text-inverted u-padding-tiny">NDLA sekundærfarge: #507AA4</li>
            <li style={{ backgroundColor: '#A5BCD3' }} className="u-padding-tiny">NDLA tertiærfarge: #A5BCD3</li>
            <li style={{ backgroundColor: '#CEDDEA' }} className="u-padding-tiny">NDLA lys farge: #CEDDEA</li>
          </ul>
          <strong>Gråtoner</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#8A8888' }} className="u-text-inverted u-padding-tiny">#8A8888</li>
            <li style={{ backgroundColor: '#E8E3E3' }} className="u-padding-tiny">#E8E3E3</li>
            <li style={{ backgroundColor: '#EFF0F2' }} className="u-padding-tiny">#EFF0F2</li>
            <li style={{ backgroundColor: '#F8F8F8' }} className="u-padding-tiny">#F8F8F8</li>
          </ul>
          <strong>Tilleggsfarger</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#1C1717' }} className="u-text-inverted u-padding-tiny">#1C1717</li>
            <li style={{ backgroundColor: '#FFFFFF' }} className="u-padding-tiny">#FFFFFF</li>
            <li style={{ backgroundColor: '#FE5F55' }} className="u-padding-tiny">#FE5F55</li>
          </ul>
        </section>
      </article>
    </Center>
  ))
  .add('Fonter', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Fonter</h1>
          <p>NDLA bruker Source Sans Pro fra <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Google Fonts</a>.</p>
          <ul className="o-list--arrows o-list--arrows--invert">
            <li>Brødtekst: Source Sans Pro, 400 inkludert <em>kursiv</em></li>
            <li style={{ fontWeight: 700 }}>Overskrifter: Source Sans Pro, 700 inkludert <em>kursiv</em></li>
          </ul>
          <p>Tilbakefallsfonter er <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og <span style={{ fontFamily: 'Arial' }}>Arial</span></p>
        </section>
      </article>
    </Center>
  ))
  .add('Overskrifter', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Overskrifter på NDLA</h1>
          <p>Overskrifter på NDLA skal markeres semantisk med riktige HTML-tagger
            (for eksempel <code>{'<h1>Overskrift<h1>'}</code>). Vi bruker ikke <b>fet-skrift</b> (eller
            &laquo;bold&raquo;) for å markere overskrifter.
          </p>
          <p>
            Font: <a href="https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro:400,400i,900,900i&selection.subset=latin-ext">Source Sans Pro, Bold (700)</a>
          </p>
        </section>
        <section>
          <h2 className="u-heading">Eksempel</h2>
          <div dangerouslySetInnerHTML={{ __html: heading('', 1) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: heading('', 2) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <div dangerouslySetInnerHTML={{ __html: heading('', 3) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <div dangerouslySetInnerHTML={{ __html: heading('', 4) }} />
        </section>
      </article>
    </Center>
  ))
  .add('Avsnitt', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Avsnitt på NDLA</h1>
          <p>
            Tekstavsnitt på <a href="//ndla.no">ndla.no</a> skal være lette å lese.
            Dette betyr at linjelengden ikke skal være for lang, og at vi
            bruker stor nok skriftsstørrelse. Mange tar utgangspunkt i
            16 punkter som en standardstørrelse, men siden NDLA har mange
            teksttunge sider bruker vi 18 punkter.
          </p>
          <p>
            En tekstlinje i full bredde skal utgjøre omtrent 50 – 75 tegn, om <span className="u-mark">*</span>-tegnet i setningen under kommer på samme linje, er den for lang:
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip<span className="u-mark">*</span>isicing
            elit, sed do eiusmod <span className="u-mark">*</span>tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Font: <a href="https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro:400,400i,900,900i&selection.subset=latin-ext">Source Sans Pro, Regular (400)</a>
          </p>

        </section>
        <h2 className="u-heading">Eksempel</h2>
        <p>{articleUrl(93)}</p>
        {
          Array.from(articleHMTL(93).paragraphs).slice(0, 4).map(paragraph => <div dangerouslySetInnerHTML={{ __html: paragraph.outerHTML }} />)
        }

      </article>
    </Center>
  ))
  .add('Lenker', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Lenker på NDLA</h1>
        <p><a>Lenker</a> på <a href="//ndla.no">ndla.no</a> bruker den vanlige
          konvensjonen med underlinje. Ingen lenker skal åpne i et nytt vindu
          (det vil si, bruke <code>target=&quot;_blank&quot;</code>), med mindre den inngår i
          et skjema hvor det er nødvendig at brukeren beholder vinduet eller fanen med skjemaet.
        </p>
        <p>Lenker kan enten være eksterne, interne eller vise til innhold på samme side ved hjelp av en <code>id</code>-attributt på for eksempel en overskrift.</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <p>Dette er en <a href="http://ndla.no">ekstern lenke</a>. Dette er en <a href="/">intern lenke</a>, og dette er en <a href="#overskrift">lenke som viser til innhold på samme side</a></p>
      <h2 id="overskrift">Overskrift</h2>
    </Center>
  ))
  .add('Tabeller', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Tabeller på NDLA</h1>
        <p>Tabeller skal brukes til tabulær data, ikke for tekstutforming</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <p>
        {articleUrl(93)}
      </p>
      <Table>{<div dangerouslySetInnerHTML={{ __html: articleHMTL(93).table.outerHTML }} />}</Table>
    </Center>
  ))
  .add('Lister', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Lister på NDLA</h1>
      </section>

      <strong>Ren liste</strong>
      <ul className="o-list--clean">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ul>
      <strong>Lister med lenker</strong>
      <ul className="o-list--arrows">
        <li><a href="">Listepunkt 1</a></li>
        <li><a href="">Listepunkt 2</a></li>
        <li><a href="">Listepunkt 3</a></li>
        <li><a href="">Listepunkt 4</a></li>
      </ul>
      <strong>Nummererte lister</strong>
      <ol>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ol>
    </Center>
  ))
  .add('Sitater', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Sitater på NDLA</h1>
        <p>Sitater som strekker seg over tre linjer i vanlig linjelengde er best å ta ut som et blokksitat. Vi bruker ikke kursiv for å markere sitater, men &laquo;&raquo;</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      {articleUrl(89)}
      <div dangerouslySetInnerHTML={{ __html: articleHMTL(89).articleHTML.outerHTML }} />
    </Center>
  ))
  ;
