# Visual Studio Code

*[CLI]: Command-Line Interface
*[CSS]: Cascading Style Sheets
*[Eng.]: Engels/English
*[HTML]: Hypertext Markup Language
*[IDE]: Integrated Development Environment
*[Ned.]: Nederlands
*[PHP]: PHP: Hypertext Preprocessor
[Microsoft]: https://www.microsoft.com/nl-be/
[Visual Studio 2019]: https://visualstudio.microsoft.com/
[Visual Studio Code Docs]: https://code.visualstudio.com/docs
[Visual Studio Code Marketplace]: https://marketplace.visualstudio.com/VSCode
[Visual Studio Code]: https://code.visualstudio.com/
[Visual Studio for Mac]: https://visualstudio.microsoft.com/vs/mac/

<div class="tip custom-block" style="padding-top: 8px">

[Visual Studio Code](https://code.visualstudio.com/) -- of korter **VS Code** -- is een gratis, open source **broncode-editor** ontwikkeld door [Microsoft](https://www.microsoft.com/nl-be/).

</div>

VS Code ondersteunt *out of the box* onder andere **HTML**, **CSS**, **JavaScript**, **TypeScript** en **PHP**, maar kan dankzij **[visual studio code marketplace = extensions](https://marketplace.visualstudio.com/VSCode)** *(Ned. uitbreidingen)* nog vele andere programmeertalen en -frameworks aan.

<div class="tip custom-block" style="padding-top: 8px">

**Visual Studio Code** is het lichtgewicht, crossplatform (Windows, macOS en Linux) broertje van [Visual Studio 2022](https://visualstudio.microsoft.com/) en [Visual Studio for Mac]. Deze laatste zijn volledige **IDE**'s en een stuk zwaarder om te draaien.

</div>

::: info Bronnen
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Docs](https://code.visualstudio.com/docs)
- [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/VSCode)
:::

## Installeren

::: icon-windows
1. <Button external href="https://code.visualstudio.com/docs/?dv=win64user" icon="download">Visual Studio Code for Windows</Button>
2. Voer het gedownloade bestand `VSCodeUserSetup-x64-«versienummer».exe` uit.
3. De standaardmap is `%HOMEPATH%\AppData\Local\Programs\Microsoft VS Code`.
:::

## Command-Line Interface

Om VS Code via de CLI te gebruiken open je bijvoorbeeld <MenuSequence><MenuAction>Opdrachtprompt</MenuAction></MenuSequence> en type je `code`.

    code «mapnaam»

Om een **nieuw venster** te openen.

    code

Om de **huidige map** (`.`) te openen.

    code .

## Voorkeuren en Instellingen

Je **voorkeuren** *(Eng. preferences)* en **instellingen** *(Eng. settings)* voor de VS Code kan je wijzigen via het **menu** <MenuSequence><MenuAction>File</MenuAction><Char name="next" /><MenuAction>Preferences</MenuAction><Char name="next" /><MenuAction>Settings</MenuAction></MenuSequence> of via de **toetsencombinatie** <KeyCombo><Key>control</Key><Char name="and" /><Key>comma</Key></KeyCombo>.

### Kleurthema

Het **kleurthema** *(Eng. color theme)* kan je wijzigen via het **menu** <MenuSequence><MenuAction>File</MenuAction><Char name="next" /><MenuAction>Preferences</MenuAction><Char name="next" /><MenuAction>Color Theme</MenuAction></MenuSequence> of via de **toetsencombinatie** <KeyCombo><Key>control</Key><Char name="and" /><Key>k</Key><Char name="next" /><Key>control</Key><Char name="and" /><Key>t</Key></KeyCombo>.

::: icon-see
[Uitbreidingen](#uitbreidingen)<Char name="next" />[Color Themes](#color-themes)
:::

::: icon-tip
Kies een kleurthema dat past bij de omgeving. Een licht thema is comfortabeler in een lichtrijke omgeving.
:::

### Bestandsiconenthema

Het **Bestandsiconenthema** *(Eng. file icon theme)* kan je wijzigen via het **menu** <MenuSequence><MenuAction>File</MenuAction><Char name="next" /><MenuAction>Preferences</MenuAction><Char name="next" /><MenuAction>File Icon Theme</MenuAction></MenuSequence>.

::: icon-see
[Uitbreidingen](#uitbreidingen)<Char name="next" />[File Icon Themes](#file-icon-themes)
:::

### Lettertype

Het **lettertype** *(Eng. font)* kan je wijzigen om onder andere de leesbaarheid te verhogen door een duidelijker onderscheid te maken tussen bijvoorbeeld de letter `O` en het cijfer `0` of de letter `l` en het cijfer `1`.

::: icon-tip
Kies een **monospace**-lettertype voor code. Bij een dergelijk lettertype heeft elk **teken** *(Eng. character)* dezelfde breedte waardoor code netjes verticaal uitlijnt.
:::

::: icon-tip
VS Code ondersteunt ook **ligaturen**. Een **ligatuur** *(Eng. font ligature)* is een nieuw teken die in de plaats komt van aangrenzende tekens en de vormen beter doet samenhangen. Voor programmeren zie je dat onder andere in de vorm van pijlen die gemaakt zijn uit `=` en `>` (`=>` wordt `⇒`).

Het lettertype moet ligaturen ondersteunen en bovendien moet je de optie aanzetten (`"editor.fontLigatures": true`).
:::

::: icon-danger
Als je pas begint met coderen is het beter om ligaturen af te zetten tot je de afzonderlijke tekens zeer goed kent.
:::

#### Lettertype Downloaden

Enkele gratis monospace-lettertypes die speciaal voor code ontworpen zijn:

- [Cascadia Code](https://github.com/microsoft/cascadia-code) (Microsoft)
- [Fira Code](https://github.com/tonsky/FiraCode) (Nikita Prokopov) <Badge type="orange">Aangeraden</Badge>
- [Hack](https://sourcefoundry.org/hack/) (Chris Simpkins & David van Gemeren)
- [Hasklig](https://github.com/i-tu/Hasklig) (Ian Tuomi)
- [JetBrainsMono](https://www.jetbrains.com/lp/mono/) (JetBrains)

#### Lettertype Installeren

Het gedownloade bestand moet je eerst **uitpakken** (decomprimeren) en daarna **installeren**.

::: icon-windows

- [Bestanden zippen en uitpakken](https://support.microsoft.com/nl-be/help/14200/windows-compress-uncompress-zip-files)
- [Een lettertype installeren of verwijderen in Windows](https://support.microsoft.com/nl-be/help/314960/how-to-install-or-remove-a-font-in-windows)
  :::

#### Lettertype Configureren

Als het lettertype op je besturingssysteem geïnstalleerd is, kan je het instellen via het **menu** <MenuSequence><MenuAction>File</MenuAction><Char name="next" /><MenuAction>Preferences</MenuAction><Char name="next" /><MenuAction>Settings</MenuAction></MenuSequence> en in <MenuSequence><MenuAction>Search settings</MenuAction></MenuSequence> `font` te typen. Stel dat je **Fira Code** wil gebruiken, dan wijzig je de waarde voor <MenuSequence><MenuAction>Editor: Font Family</MenuAction></MenuSequence> in `'Fira Code', Consolas, 'Courier New', monospace`.

::: icon-see
[Setting Fira Code as your default Visual Studio Code font](https://tahoeninjas.blog/2019/03/16/setting-fira-code-as-your-default-visual-studio-code-font/) (Tahoe Ninjas)
:::

## Uitbreidingen

Met **extensions** *(Ned. uitbreidingen)* voeg je functionaliteiten, ondersteuning voor nieuwe talen of visuele thema's toe. Je opent <MenuSequence><MenuAction>Extensions</MenuAction></MenuSequence> door op het **icoon** links te klikken of met de **toetsencombinatie** <KeyCombo><Key>control</Key><Char name="and" /><Key>shift</Key><Char name="and" /><Key>x</Key></KeyCombo>.

Hieronder staan enkele van onze aanraders uit [Visual Studio Code Marketplace].

::: icon-danger
Installeer niet te veel uitbreidingen, want ze vertragen de applicatie en kunnen elkaar ook tegenwerken.
:::

::: icon-tip
Kijk naar de relevantie, populariteit en ratings van de uitbreidingen om de juiste keuze te maken.
:::

### Algemeen

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) (Street Side Software) <Badge type="orange">Aangeraden</Badge>
  - [Dutch - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-dutch) (Street Side Software) <Badge type="orange">Aangeraden</Badge>
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) (milkstead)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) (Don Jayamanne)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) (oderwat) <Badge type="orange">Aangeraden</Badge>
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) (John Papa)
- [Peep](https://marketplace.visualstudio.com/items?itemName=nwallace.peep) (nwallace)
- [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines) (Daniel Imms) <Badge type="orange">Aangeraden</Badge>
- [Stable Sort](https://marketplace.visualstudio.com/items?itemName=sgryjp.vscode-stable-sort) (Suguru Yamamoto) <Badge type="orange">Aangeraden</Badge>

### Programmeren

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) (Jun Han) <Badge type="orange">Aangeraden</Badge>
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) (Jun Han) <Badge type="orange">Aangeraden</Badge>
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) (Jun Han) <Badge type="orange">Aangeraden</Badge>
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (Dirk Baeumer) <Badge type="red">Verplicht</Badge>
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) (Christian Kohler)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (Prettier) <Badge type="red">Verplicht</Badge>  
  <MenuSequence>
  <MenuAction>File</MenuAction>
  <Char name="next" />
  <MenuAction>Preferences</MenuAction>
  <Char name="next" />
  <MenuAction>Settings</MenuAction>
  <Char name="next" />
  <MenuAction>User</MenuAction>
  <Char name="next" />
  <MenuAction>Text Editor</MenuAction>
  <Char name="next" />
  <MenuAction>Formatting</MenuAction>
  <Char name="next" />
  <MenuAction>Format On Save</MenuAction>
  </MenuSequence>
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) (Microsoft)

### Talen en Frameworks

- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) (sysoev)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) (Yu Zhang)
- [Sass](https://marketplace.visualstudio.com/search?term=sass&target=VSCode&category=All%20categories&sortBy=Relevance) (Syler)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) (Pine Wu)

### Themes

#### Color Themes

- [Material Theme Kit](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-MaterialKit) (Microsoft)
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) (binaryify)
- [Palenight Theme](https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme) (Olaolu Olawuyi)

#### File Icon Themes

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) (Philipp Kief)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) (VSCode Icons Team)
```
