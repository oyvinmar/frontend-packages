/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem } from 'ndla-ui';
import { Time, Document, User, Additional } from 'ndla-ui/icons';

import { ResourceSubsetList } from '../molecules/resources';
import LicenseExample from '../article/LicenseExample';
import article from '../../dummydata/index';

export default () =>
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon">
          <Document />Artikkel Tilleggsstoff
        </h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <User />
            </span>
            <span className="c-article-byline__authors">
              Skrevet av Ola Nordnes, Kari Nordnes, Jon Nordgubbe.
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Time />
            </span>
            <span className="c-article-byline__date">Publisert 12/10/2016</span>
          </span>
          <span className="c-article-byline__flex">
            <div className="c-article-byline__additional">
              <Additional className="c-icon--20 u-margin-right-tiny" />{' '}
              Tilleggsstoff
            </div>
            <LicenseExample />
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <table className="c-table o-wrapper--wide">
          <tbody>
            <tr>
              <th>Hovedkategorier</th>
              <th>Sjangre</th>
              <th>Kjennetegn</th>
            </tr>
            <tr>
              <td>
                <strong>Subjektive sjangre</strong>
              </td>
              <td>Leder</td>
              <td>
                <ul>
                  <li>skrives ofte av en av redaktørene </li>
                  <li>er redaksjonens syn på en sak </li>
                  <li>står ofte på side 2 eller på egen meningsside</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Anmeldelse</td>
              <td>
                <ul>
                  <li>
                    en av journalistenes mening om en ny film, bok, konsert e.l.{' '}
                  </li>
                  <li>
                    skal være en bruksanvisning slik at målgruppen vet om
                    produktet er noe for dem
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Leserinnlegg og kommentarfelt</td>
              <td>
                <ul>
                  <li>lar den enkelte mottaker komme med sitt syn på en sak</li>
                  <li>leserinnlegg i avis, kommentarfelt på nett </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Kommentar og kronikk</td>
              <td>
                <ul>
                  <li>
                    kan skrives av en i redaksjonen, men gjerne også av en
                    fagperson utenfor redaksjonen{' '}
                  </li>
                  <li>skal gi dybdekunnskap om et tema </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Objektive sjangre</strong>
              </td>
              <td>Nyhetsartikkel</td>
              <td>
                <ul>
                  <li>kort, konsis, svarer på grunnleggende spørsmål</li>
                  <li>det viktigste først </li>
                  <li>lar kildene komme til orde</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Nyhetsreportasje</td>
              <td>
                <ul>
                  <li>går gjerne mer i dybden enn en nyhetsartikkel </li>
                  <li>bruker flere kilder </li>
                  <li>har fokus på bakgrunn og årsak</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Intervju</td>
              <td>
                <ul>
                  <li>enkelt oppsett med spørsmål og svar </li>
                  <li>
                    brukes gjerne som en del av en nyhetsreportasje eller
                    artikkel
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Notis</td>
              <td>
                <ul>
                  <li>
                    kort nyhetsmelding som gir grunnleggende informasjon om en
                    aktuell hendelse
                  </li>
                  <li>gjerne bare 10–15 setninger</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hybridsjangre</strong>
              </td>
              <td>Feature</td>
              <td>
                <ul>
                  <li>
                    hører til i objektiv-kategorien, men journalisten bruker
                    alle sanser og litterære virkemidler{' '}
                  </li>
                  <li>
                    går i dybden, gir leseren en større forståelse av et tema
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td />
              <td>Portrettintervju</td>
              <td>
                <ul>
                  <li>
                    hører til i objektiv-kategorien, men journalisten bruker
                    alle sanser og litterære virkemidler{' '}
                  </li>
                  <li>
                    gir leseren dybdekunnskap om en aktuell person i
                    nyhetsbildet
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>;