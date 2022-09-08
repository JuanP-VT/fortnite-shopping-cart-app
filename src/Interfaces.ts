export interface ShopItem {
  regularPrice: number;
  finalPrice: number;
  bundle: null;
  banner: Banner | null;
  giftable: boolean;
  refundable: boolean;
  sortPriority: number;
  categories: string[];
  sectionId: string;
  section: Section;
  devName: string;
  offerId: string;
  displayAssetPath: null | string;
  tileSize: TileSize;
  newDisplayAssetPath: string;
  newDisplayAsset: NewDisplayAsset;
  items: Item[];
}

export interface Banner {
  value: string;
  intensity: string;
  backendValue: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: Rarity;
  rarity: Rarity;
  series: Series | null;
  set: Set | null;
  introduction: Introduction | null;
  images: ItemImages;
  variants: Variant[] | null;
  searchTags: null;
  gameplayTags: string[] | null;
  metaTags: string[] | null;
  showcaseVideo: null | string;
  dynamicPakId: null | string;
  displayAssetPath: null | string;
  definitionPath: null | string;
  path: string;
  added: Date;
  shopHistory: Date[];
  itemPreviewHeroPath?: string;
}

export interface ItemImages {
  smallIcon: string;
  icon: string;
  featured: null | string;
  other: Other | null;
}

export interface Other {
  coverart?: string;
  background?: string;
  decal?: string;
}

export interface Introduction {
  chapter: string;
  season: string;
  text: IntroductionText;
  backendValue: number;
}

export enum IntroductionText {
  IntroducedInChapter2Season7 = "Introduced in Chapter 2, Season 7.",
  IntroducedInChapter3Season1 = "Introduced in Chapter 3, Season 1.",
  IntroducedInChapter3Season3 = "Introduced in Chapter 3, Season 3.",
}

export interface Rarity {
  value: string;
  displayValue: string;
  backendValue: string;
}

export interface Series {
  value: SeriesValue;
  image: string;
  colors: string[];
  backendValue: SeriesBackendValue;
}

export enum SeriesBackendValue {
  CreatorCollabSeries = "CreatorCollabSeries",
  DCUSeries = "DCUSeries",
}

export enum SeriesValue {
  DcSeries = "DC SERIES",
  IconSeries = "Icon Series",
}

export interface Set {
  value: SetValue;
  text: SetText;
  backendValue: SetBackendValue;
}

export enum SetBackendValue {
  AcidVain = "AcidVain",
  AutomaticDuke = "AutomaticDuke",
  MissStem = "MissStem",
  SunshineAndRainbows = "SunshineAndRainbows",
  VividEgo = "VividEgo",
}

export enum SetText {
  PartOfTheCobraKaiSet = "Part of the Cobra Kai set.",
  PartOfThePatrickMahomesSet = "Part of the Patrick Mahomes set.",
  PartOfThePrismaticPrideSet = "Part of the Prismatic Pride set.",
  PartOfTheSunshineAndRainbowsSet = "Part of the Sunshine And Rainbows set.",
  PartOfTheTeenTitansSet = "Part of the Teen Titans set.",
}

export enum SetValue {
  CobraKai = "Cobra Kai",
  PatrickMahomes = "Patrick Mahomes",
  PrismaticPride = "Prismatic Pride",
  SunshineAndRainbows = "Sunshine And Rainbows",
  TeenTitans = "Teen Titans",
}

export interface Variant {
  channel: Channel;
  type: Type;
  options: Option[];
}

export enum Channel {
  Parts = "Parts",
}

export interface Option {
  tag: Tag;
  name: string;
  image: string;
}

export enum Tag {
  Stage1 = "Stage1",
  Stage2 = "Stage2",
  Stage3 = "Stage3",
  Stage4 = "Stage4",
}

export enum Type {
  Glasses = "glasses",
  SolarHair = "solar hair",
  Style = "style",
}

export interface NewDisplayAsset {
  id: string;
  cosmeticId: string;
  materialInstances: MaterialInstance[];
}

export interface MaterialInstance {
  id: string;
  images: MaterialInstanceImages;
  colors: Colors;
  scalings: { [key: string]: number };
  flags: null;
}

export interface Colors {
  Background_Color_A: string;
  Background_Color_B: string;
  FallOff_Color: string;
  "Light-Ray-Offset"?: string;
  MF_RadialCoordinates?: MFRadialCoordinates;
  RGB1?: Rgb1;
  TextilePanSpeed?: Rgb1;
  TextilePerspective?: string;
  TextileScale?: TextileScale;
  Noise?: Noise;
  Noise2?: Noise2;
  Streaks?: Streaks;
}

export enum MFRadialCoordinates {
  Bc0000Ff = "bc0000ff",
  Bcbc00Ff = "bcbc00ff",
}

export enum Noise {
  Ff005B00 = "ff005b00",
}

export enum Noise2 {
  The00A7153D = "00a7153d",
}

export enum Rgb1 {
  The000000Ff = "000000ff",
}

export enum Streaks {
  The00Ff00Ff = "00ff00ff",
}

export enum TextileScale {
  Ffff0000 = "ffff0000",
}

export interface MaterialInstanceImages {
  OfferImage: string;
  Background: string;
  SeriesTexture?: string;
  FNMTexture?: string;
}

export interface Section {
  id: string;
  name: Name;
  index: number;
  landingPriority: number;
  sortOffersByOwnership: boolean;
  showIneligibleOffers: boolean;
  showIneligibleOffersIfGiftable: boolean;
  showTimer: boolean;
  enableToastNotification: boolean;
  hidden: boolean;
}

export enum Name {
  CobraKai = "Cobra Kai",
  PatrickMahomes = "Patrick Mahomes",
  RainbowRoyale = "Rainbow Royale",
  Starfire = "Starfire",
}

export enum TileSize {
  Normal = "Normal",
  Small = "Small",
}
