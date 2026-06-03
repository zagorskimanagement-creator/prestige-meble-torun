import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

export const Route = createFileRoute("/kolekcje")({
  component: KolekcjePage,
});

type Kolekcja = {
  slug: string;
  nazwa: string;
  okladka: string;
  zdjecia: string[];
};

type Producent = {
  slug: string;
  nazwa: string;
  opis: string;
  okladka: string;
  kolekcje: Kolekcja[];
};

const BASE = "/zdjecia_meble";

const producenci: Producent[] = [
  {
    slug: "krysiak",
    nazwa: "Krysiak Meble",
    opis: "Polskie meble tapicerowane szyte na miarę twoich potrzeb.",
    okladka: `${BASE}/1_Krysiak_Meble/cantiero/CANTIERO_aranzI_DSC_6857v2-1.jpg`,
    kolekcje: [
      {
        slug: "cantiero",
        nazwa: "Cantiero",
        okladka: `${BASE}/1_Krysiak_Meble/cantiero/CANTIERO_aranzI_DSC_6857v2-1.jpg`,
        zdjecia: [
          "CAN.011.min__3.jpg","CAN.030.03.min__2.jpg","CAN.031.min__4.jpg",
          "CAN.041.min__2.jpg","CAN.050.min__3.jpg","CAN.070.min_.jpg",
          "CAN.073-e1742292815166_5.jpg","CAN.075.min_.jpg","CAN.076.03.min_-2_1.jpg",
          "CANTIERO_aranzII_STOL_DSC_6993.jpg","CANTIERO_aranzI_DSC_6857v2-1.jpg",
          "CANTIERO_polaranzII_DSC_7209.jpg","CANTIERO_polaranzI_DSC_6881.jpg",
          "CANTIERO_polaranz_stolik_DSC_7259.jpg","DSC_6890.jpg","DSC_6939.jpg",
          "DSC_7009-1.jpg","DSC_7088.jpg","DSC_7131.jpg","Orzech-lakierowany.png",
        ].map(f => `${BASE}/1_Krysiak_Meble/cantiero/${f}`),
      },
      {
        slug: "cantiero-dab-karmelowy",
        nazwa: "Cantiero Dąb Karmelowy",
        okladka: `${BASE}/1_Krysiak_Meble/cantiero-dab-karmelowy/CAN.010.13.min__1.jpg`,
        zdjecia: [
          "CAN.010.13.min__1.jpg","CAN.011.13.min__3.jpg","CAN.030.13.jpg",
          "CAN.031.13_5.jpg","CAN.041.13.min__3.jpg","CAN.070.13.min__1.jpg",
          "CAN.073.13.min__4.jpg","CAN.075.13.min__2.jpg","CAN.076.13.jpg",
          "CANTIERO_aranz.jpg","CANTIERO_jasne_aranz_III_DSC_2798.jpg",
          "CANTIERO_jasne_polaranz_I_DSC_2674.jpg","Dab-karmelowy-e1739953311442_1.jpg",
          "DSC_2611.jpg","DSC_2661.jpg","DSC_2731.jpg","DSC_2753.jpg",
          "DSC_2774.jpg","DSC_2928.jpg","Mona.115.min_-1_3.jpg",
        ].map(f => `${BASE}/1_Krysiak_Meble/cantiero-dab-karmelowy/${f}`),
      },
      {
        slug: "granada",
        nazwa: "Granada",
        okladka: `${BASE}/1_Krysiak_Meble/granada/granada-aranz-1-antracyt.jpg`,
        zdjecia: [
          "ARANZ_ciemny_akcept_drewno.jpg","DSC_3884_KrysiakMEBLE-e1732868640219.jpg",
          "DSC_4434_drewno-poprawne.jpg","GRA-010-05min-1_2.jpg","GRA-030-05-min.jpg",
          "GRA-032-05-min.jpg","GRA-040-05-min.jpg","GRA-050-05.min_-1.jpg",
          "GRA-064-05-min_3.jpg","GRA-070-05-min.jpg","GRA-075-11-min_4.jpg",
          "GRA-076-05-min.jpg","GRA-076-11-min_4.jpg","GRA-090-05-min_5.jpg",
          "GRA-110-05-min_1.jpg","Gra.o.min__3.jpg","granada-aranz-1-antracyt.jpg",
          "granada-aranz-3-antracyt.jpg","granada-detal-1-antracyt.jpg",
          "granada-polaranz-1-antracyt.jpg","granada-polaranz-2-antracyt.jpg",
          "granada-polaranz-3-antracyt.jpg","k1a.jpg","k2a.jpg",
        ].map(f => `${BASE}/1_Krysiak_Meble/granada/${f}`),
      },
      {
        slug: "granada-szarosc-pustyni",
        nazwa: "Granada Szarość Pustyni",
        okladka: `${BASE}/1_Krysiak_Meble/granada-szarosc-pustyni/09_szarosc_pustyni_1.jpg`,
        zdjecia: [
          "09_szarosc_pustyni_1.jpg","DSC_4390_drewno-1-e1732882660479.jpg",
          "GRA-010-09min-1_4.jpg","GRA-030-09-min.jpg","GRA-031-09-min_4.jpg",
          "GRA-040-09-min_3.jpg","GRA-050-09.min__3.jpg","GRA-064-09-min_5.jpg",
          "GRA-075-09-min_1.jpg","GRA-076-09-min_2.jpg","GRA-090-09-min_5.jpg",
          "GRA-110-09_2.jpg","granada-detal-2-1.jpg","granada-detal-3.jpg",
          "granada-polaranz-1.jpg","granada-polaranz-2.jpg","granada-polaranz-3.jpg",
        ].map(f => `${BASE}/1_Krysiak_Meble/granada-szarosc-pustyni/${f}`),
      },
      {
        slug: "monaco",
        nazwa: "Monaco",
        okladka: `${BASE}/1_Krysiak_Meble/monaco/MONACO_aranz_.jpg`,
        zdjecia: [
          "DSC_1168_v2_1.jpg","DSC_1183_korekta_2.jpg","DSC_1349.jpg",
          "DSC_2004.jpg","DSC_2047.jpg","M100_8.jpg","M94_1.jpg",
          "M96N_C_8.jpg","M96N_O_1.jpg","mona.010.min_.jpg","Mona.040.min__3.jpg",
          "Mona.052.min__3.jpg","Mona.053.min__2.jpg","mona.054.min__4.jpg",
          "Mona.060.min_.jpg","Mona.061.min__5.jpg","Mona.068.min__5.jpg",
          "Mona.069.min_.jpg","Mona.070.min_-1.jpg","Mona.071.min_-2_3.jpg",
          "mona.075.min_-1.jpg","Mona.080.min__1.jpg","Mona.085.min__5.jpg",
          "mona.090.min_.jpg","Mona.114.min__3.jpg","MONACO_aranz_.jpg",
          "MONACO_aranz_stol.jpg","MONACO_komoda_HR.jpg","MONACO_SR_HR.jpg",
          "MONTE_aranz_III_DSC_1697v2.jpg","MONTE_aranz_II_DSC_1593.jpg",
          "MONTE_aranz_I_DSC_1462v4.jpg",
        ].map(f => `${BASE}/1_Krysiak_Meble/monaco/${f}`),
      },
      {
        slug: "provance",
        nazwa: "Provance",
        okladka: `${BASE}/1_Krysiak_Meble/provance/AB0_4086.jpg`,
        zdjecia: [
          "AB0_4086.jpg","AB0_4130.jpg","AB0_4610_1.jpg","AB0_5582_1.jpg",
          "AB0_5846_wyprostowane.jpg","AB0_6710.jpg","AB0_7813.png","AB81863.png",
          "AB81953-komoda-i-nadstawka_opcja2.png","pro.010__miniaturka_png2_3.png",
          "pro.011_miniaturka_png.png","pro.014_miniaturka_png.png",
          "pro.030_miniaturka_png_1.png","pro.040_miniaturka_jpg_1.png",
          "pro.041_miniaturka_png.png","pro.042_miniaturka_png_2.png",
          "pro.100_miniaturka_png_2.png","provance-02.png","provance-03.png",
          "provance-05_3.png","provance-06_2.png","provance-09_1.png",
          "provance-16_2.png","provance-19_1.png","provance-21.png",
          "provance-22_1.png","provance-24_1.png","provance-25_3.png","provance-29_1.png",
        ].map(f => `${BASE}/1_Krysiak_Meble/provance/${f}`),
      },
      {
        slug: "verano",
        nazwa: "Verano",
        okladka: `${BASE}/1_Krysiak_Meble/verano/ARANZ-Glowny-DSC_6268.jpg`,
        zdjecia: [
          "2ori.min__5.jpg","ARANZ-Glowny-DSC_6268.jpg","DSC_5396.jpg",
          "DSC_5502.jpg","DSC_6212.jpg","VER-010-15-min_3.jpg","VER-011-15-min_4.jpg",
          "VER-030-15-min_1.jpg","VER-040-15-min_1.jpg","VER-050-15-min_4.jpg",
          "VER-052-15-min_4.jpg","VER-072-15-min_2.jpg","VER-076-15-min_1.jpg",
          "VER-115-07-min_3.jpg","VERANO_aranzI_DSC_5367_3.jpg",
          "VERANO_aranz_II_DSC_5495_przerobka_final.jpg",
          "VERANO_polaranzIII_DSC_5769.jpg","VERANO_stol_aranz_DSC_6183v2.jpg",
        ].map(f => `${BASE}/1_Krysiak_Meble/verano/${f}`),
      },
    ],
  },
  {
    slug: "zakor",
    nazwa: "Zakor",
    opis: "Meble do jadalni i salonu łączące styl z trwałością.",
    okladka: `${BASE}/2_Zakor/limera/LIMERA1_2.jpg`,
    kolekcje: [
      {
        slug: "limera",
        nazwa: "Limera",
        okladka: `${BASE}/2_Zakor/limera/LIMERA1_2.jpg`,
        zdjecia: [
          "limera-barek1.jpg","limera-barek2.jpg","limera-bufet.jpg",
          "limera-komoda2.jpg","limera-komoda3.jpg","limera-rtv-duza.jpg",
          "limera-rtv-mala.jpg","limera-witryna-wiszaca1.jpg","limera-witryna1.jpg",
          "limera-witryna2.jpg","LIMERA1_2.jpg","LIMERA3_3.jpg",
          "LIMERA423_4.jpg","LIMERA4_1.jpg","OlejBIANCO.jpg","OlejCLASSIC.jpg",
          "OlejNATURA.jpg","OlejNOCHE.jpg","OlejPIASKOWY.jpg","OlejROSSO.jpg",
        ].map(f => `${BASE}/2_Zakor/limera/${f}`),
      },
      {
        slug: "malaren",
        nazwa: "Malaren",
        okladka: `${BASE}/2_Zakor/malaren/MALAREN1.jpg`,
        zdjecia: [
          "malaren-barek.jpg","malaren-bufet.jpg","malaren-komoda1.jpg",
          "malaren-komoda2.jpg","malaren-komoda2wysoka.jpg","malaren-komoda3.jpg",
          "malaren-komoda4.jpg","malaren-komoda4szklona.jpg","malaren-rtv-duza.jpg",
          "malaren-rtv-mala.jpg","malaren-witryna-wiszaca.jpg","malaren-witryna1.jpg",
          "malaren-witryna2.jpg","MALAREN1.jpg","MALAREN2.jpg","MALAREN3_2.jpg",
        ].map(f => `${BASE}/2_Zakor/malaren/${f}`),
      },
      {
        slug: "ora",
        nazwa: "Ora",
        okladka: `${BASE}/2_Zakor/ora/Ora1m.jpg`,
        zdjecia: [
          "ORA-slajd_4.jpg","ORA-TVm_1.jpg","Ora1m.jpg",
          "ORA1wys2_1.jpg","Ora2m_4.jpg","ORA2wys3_2.jpg","Ora3m_1.jpg",
        ].map(f => `${BASE}/2_Zakor/ora/${f}`),
      },
      {
        slug: "stol-lt-2312",
        nazwa: "Stół LT-2312",
        okladka: `${BASE}/2_Zakor/stol-lt-2312/LT2312_AI_v4_HRwww_1.jpg`,
        zdjecia: [
          "2318.jpg","2319bez.jpg","2320bez.jpg","limera-stol.jpg",
          "lt-2310.jpg","lt-2311.jpg","lt-2312_4.jpg","LT-2313-www2.jpg",
          "LT-2322.jpg","LT2312_AII_v4_HRwww_5.jpg","LT2312_AII_v4_HRwww_6.jpg",
          "LT2312_AI_v4_HRwww_1.jpg","LT2312_AI_v4_HRwww_8.jpg","LT2315.jpg",
          "LT2317-1.jpg","LT2323_aranz_I_HRwww.jpg","LT2325_aranz_Ia_HRwww.jpg",
          "proponowaneoleje.jpg","pw-2303.jpg","pw-2309.jpg",
        ].map(f => `${BASE}/2_Zakor/stol-lt-2312/${f}`),
      },
      {
        slug: "stol-lt-2314",
        nazwa: "Stół LT-2314",
        okladka: `${BASE}/2_Zakor/stol-lt-2314/LT2314_aranz_I_www_1.jpg`,
        zdjecia: [
          "2321bez.jpg","LT2314-dokladki2_6.jpg","LT2314-mechanizm2.jpg",
          "LT2314-mechanizm2_6.jpg","LT2314-mechanizm_7.jpg","LT2314-rozlozony.jpg",
          "LT2314-rozlozony_4.jpg","LT2314_2.jpg","LT2314_aranz_II_www_6.jpg",
          "LT2314_aranz_I_www_1.jpg",
        ].map(f => `${BASE}/2_Zakor/stol-lt-2314/${f}`),
      },
      {
        slug: "stol-lt-2316",
        nazwa: "Stół LT-2316",
        okladka: `${BASE}/2_Zakor/stol-lt-2316/LT_2316_A_I_4.jpg`,
        zdjecia: [
          "LT2316-1.jpg","LT2316-3_1.jpg","LT2316-3_3.jpg",
          "LT2316-mechanizm_2.jpg","LT2316-mechanizm_4.jpg",
          "LT_2316_A_II_5.jpg","LT_2316_A_I_4.jpg",
        ].map(f => `${BASE}/2_Zakor/stol-lt-2316/${f}`),
      },
      {
        slug: "stol-lt-2324",
        nazwa: "Stół LT-2324",
        okladka: `${BASE}/2_Zakor/stol-lt-2324/LT2324_aranz_I_HRwww_3.jpg`,
        zdjecia: [
          "LT2324_aranz_II_HRwww_6.jpg","LT2324_aranz_I_HRwww_3.jpg",
        ].map(f => `${BASE}/2_Zakor/stol-lt-2324/${f}`),
      },
    ],
  },
  {
    slug: "unimebel",
    nazwa: "Unimebel",
    opis: "Solidne meble tapicerowane z wieloletnią tradycją.",
    okladka: `${BASE}/3_Unimebel/boretto/boretto-1.jpg`,
    kolekcje: [
      {
        slug: "bondi",
        nazwa: "Bondi",
        okladka: `${BASE}/3_Unimebel/bondi/SLAJD1-1-scaled.jpg`,
        zdjecia: [
          "FOTEL-1-scaled.jpg","FOTEL1-scaled.jpg","FOTEL2-scaled.jpg",
          "fotel3-scaled.jpg","fotel4-scaled.jpg","fotel5-scaled.jpg",
          "fotel_bujany-scaled.jpg","pufa-scaled.jpg","SLAJD-3-scaled.jpg",
          "SLAJD1-1-scaled.jpg","WERSALKA-1-scaled.jpg","WERSALKA1-scaled.jpg",
          "WERSALKA_ROZL-scaled.jpg","WERSALKA_TYL-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/bondi/${f}`),
      },
      {
        slug: "boretto",
        nazwa: "Boretto",
        okladka: `${BASE}/3_Unimebel/boretto/boretto-1.jpg`,
        zdjecia: [
          "boretto-1.jpg","boretto-2.jpg","boretto-a1.jpg","boretto-a2.jpg",
          "boretto-a3.jpg","boretto-f1.jpg","boretto-f2.jpg","boretto-f3.jpg",
          "boretto-fb1.jpg","boretto-fb2.jpg","boretto-fb3.jpg","boretto-fb4.jpg",
          "boretto-s1.jpg","boretto-s2.jpg","Unimebel-09-03-23-1.jpg",
          "Unimebel-09-03-23-2-1.jpg",
        ].map(f => `${BASE}/3_Unimebel/boretto/${f}`),
      },
      {
        slug: "figaro",
        nazwa: "Figaro",
        okladka: `${BASE}/3_Unimebel/figaro/SLAJD-9-scaled.jpg`,
        zdjecia: [
          "fotel-5-scaled.jpg","SLAJD-9-scaled.jpg","sofo_naronik_roz-scaled.jpg",
          "sofo_naroznik-scaled.jpg","sofo_naroznik1-scaled.jpg","wersalka-5-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/figaro/${f}`),
      },
      {
        slug: "kolekcja-max-xix",
        nazwa: "Max XIX",
        okladka: `${BASE}/3_Unimebel/kolekcja-max-xix/SLAJD-30-scaled.jpg`,
        zdjecia: [
          "fotel-28-scaled.jpg","SLAJD-30-scaled.jpg",
          "wersalka-22-scaled.jpg","wersalka_roz-16-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/kolekcja-max-xix/${f}`),
      },
      {
        slug: "lagossa",
        nazwa: "Lagossa",
        okladka: `${BASE}/3_Unimebel/lagossa-nowoczesne-meble-tapicerowane-unimebel/SLAJD1-scaled.jpg`,
        zdjecia: [
          "FOTEL-scaled.jpg","SLAJD-2-scaled.jpg","SLAJD1-scaled.jpg",
          "SOFA-scaled.jpg","WERSALKA-scaled.jpg","WERSALKA_ROZ-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/lagossa-nowoczesne-meble-tapicerowane-unimebel/${f}`),
      },
      {
        slug: "marino",
        nazwa: "Marino",
        okladka: `${BASE}/3_Unimebel/marino/0000_MARINO_gif_33936.jpg`,
        zdjecia: [
          "0000_MARINO_gif_33936.jpg","0000_MARINO_gif_33980.jpg",
          "0001_MARINO_gif_33977.jpg","0001_MARINO_gif_33979.jpg",
          "0002_MARINO_gif_33932.jpg","0002_MARINO_gif_33950.jpg",
          "0003_MARINO_poprawka_33381_03_maly-RGB.jpg","0004_MARINO_gif_33927.jpg",
          "0005_MARINO_gif_33918.jpg","0006_MARINO_gif_33894.jpg",
          "0007_MARINO_gif_33889.jpg",
        ].map(f => `${BASE}/3_Unimebel/marino/${f}`),
      },
      {
        slug: "mobilo",
        nazwa: "Mobilo",
        okladka: `${BASE}/3_Unimebel/mobilo/SLAJD-14-scaled.jpg`,
        zdjecia: [
          "bok_B-scaled.jpg","fotel-9-scaled.jpg","fotel1-3-scaled.jpg",
          "fotel_tyl-2-scaled.jpg","SLAJD-14-scaled.jpg","slajd1-5-scaled.jpg",
          "slajd2-2-scaled.jpg","slajd3-2-scaled.jpg","wersalka-8-scaled.jpg",
          "wersalka_1-scaled.jpg","wersalka_roz-6-scaled.jpg","wersalka_tyl-1-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/mobilo/${f}`),
      },
      {
        slug: "oliwia-e",
        nazwa: "Oliwia E",
        okladka: `${BASE}/3_Unimebel/oliwia-e/SLAJD-25-scaled.jpg`,
        zdjecia: [
          "fotel1-6-scaled.jpg","SLAJD-25-scaled.jpg","sofa-10-scaled.jpg",
          "Unimeble-13-01-23_4.jpg","Unimeble-13-01-23_5.jpg","Unimeble-13-01-23_6.jpg",
        ].map(f => `${BASE}/3_Unimebel/oliwia-e/${f}`),
      },
      {
        slug: "tuli",
        nazwa: "Tuli",
        okladka: `${BASE}/3_Unimebel/tuli/tuli-I-1.jpg`,
        zdjecia: [
          "tuli-I-1.jpg","tuli-I-2.jpg","tuli-I-3.jpg","tuli-V-1.jpg",
          "Tuli-v.jpg","Tuli-v1.jpg","tuli04-scaled.jpg","tuli04_roz-scaled.jpg",
          "tuliM.jpg","tuliM1.jpg","tuliM2.jpg","tuli_03-scaled.jpg",
          "tuli_03_roz-scaled.jpg","tuli_06-scaled.jpg","tuli_06_roz-scaled.jpg",
          "tuli_09-scaled.jpg","tuli_09_roz-scaled.jpg","tuli_10_roz-scaled.jpg",
          "tuli_e-scaled.jpg","tuli_e_roz-scaled.jpg","tuli_g-scaled.jpg",
          "tuli_g_roz-scaled.jpg","tuli_h-scaled.jpg","tuli_h_roz-scaled.jpg","tuli_t-scaled.jpg",
        ].map(f => `${BASE}/3_Unimebel/tuli/${f}`),
      },
      {
        slug: "verdi",
        nazwa: "Verdi",
        okladka: `${BASE}/3_Unimebel/verdi/verdi-kolekcja.jpg`,
        zdjecia: [
          "verdi-kolekcja.jpg","verdi-sofo-naroznik-packshot.jpg",
          "verdi-sofo-naroznik-packshot1.jpg","verdi-sofo-naroznik-packshot2.jpg",
          "verdi-sofo-naroznik-packshot3.jpg","verdi_aranz-sofo-naroznik.jpg",
          "verdi_sofa.jpg","verdi_sofa1.jpg","verdi_sofa2.jpg",
          "verdi_sofa3.jpg","verdi_sofa4.jpg","verdi_sofa5.jpg",
          "Group-27207.jpg","Group-27208.jpg","Group-27209.jpg",
          "Group-27210.jpg","Mask-Group-88.jpg",
        ].map(f => `${BASE}/3_Unimebel/verdi/${f}`),
      },
    ],
  },
  {
    slug: "fameg",
    nazwa: "Fameg",
    opis: "Krzesła i stoły jadalniane z polskiego drewna — ponadczasowy design.",
    okladka: `${BASE}/4_Fameg/arch/2021_08_szum_i_rosa_1885.jpg`,
    kolekcje: [
      { slug: "18-n", nazwa: "18-N", okladka: `${BASE}/4_Fameg/18-n/a-18_n_01_2.jpg`,
        zdjecia: ["a-18_5_l.jpg","a-18_n_01_2.jpg","a-18_n_02.jpg","a-18_n_l_1.jpg","a-18_n_w.jpg","a-18_tap_l.jpg","b-18_tw_l.jpg","bst-18_tw_l.jpg"].map(f=>`${BASE}/4_Fameg/18-n/${f}`) },
      { slug: "alora", nazwa: "Alora A-1412", okladka: `${BASE}/4_Fameg/alora-a-1412/alora_a-1412_1_1.jpg`,
        zdjecia: ["alora_a-1412_1-1_1.jpg","alora_a-1412_1_1.jpg","alora_a-1412_2_1.jpg","alora_a-1412_3.jpg","alora_a-1412_4.jpg","alora_bst-1412_l.jpg"].map(f=>`${BASE}/4_Fameg/alora-a-1412/${f}`) },
      { slug: "amada", nazwa: "Amada A-1413", okladka: `${BASE}/4_Fameg/amada-a-1413/amada_a-1413_02_2.jpg`,
        zdjecia: ["amada_a-1413_02_2.jpg","amada_a-1413_03_2.jpg","amada_a-1413_04_2.jpg","amada_a-1413_05.jpg","amada_a-1413_l_1.jpg"].map(f=>`${BASE}/4_Fameg/amada-a-1413/${f}`) },
      { slug: "amada-bst", nazwa: "Amada BST-1413", okladka: `${BASE}/4_Fameg/amada-bst-1413/amada_bst-1413_01_2.jpg`,
        zdjecia: ["amada_bst-1413_01_2.jpg","amada_bst-1413_02_2.jpg","amada_bst-1413_03.jpg","amada_bst-1413_04.jpg","amada_bst-1413_05_1.jpg","amada_bst-1413_l_1.jpg"].map(f=>`${BASE}/4_Fameg/amada-bst-1413/${f}`) },
      { slug: "arch", nazwa: "Arch", okladka: `${BASE}/4_Fameg/arch/arch_b-1801_1-1.jpg`,
        zdjecia: ["arch_b-1801_1-1.jpg","arch_b-1801_1-4.jpg","arch_b-1801_2_1.jpg","arch_b-1801_3_2.jpg","arch_b-1801_4.jpg","arch_bm-1801.jpg","fameg_arch-5.jpg","fameg_arch-6.jpg","fameg_arch-7.jpg"].map(f=>`${BASE}/4_Fameg/arch/${f}`) },
      { slug: "avola", nazwa: "Avola A-1411", okladka: `${BASE}/4_Fameg/avola-a-1411/avola_a-1411_01.jpg`,
        zdjecia: ["avola_a-1411_01.jpg","avola_a-1411_02_2.jpg","avola_a-1411_03_1.jpg","avola_a-1411_04_1.jpg","avola_a-1411_05_1.jpg","avola_a-1411_06_1.jpg","avola_a-1411_l.jpg"].map(f=>`${BASE}/4_Fameg/avola-a-1411/${f}`) },
      { slug: "bistro", nazwa: "Bistro", okladka: `${BASE}/4_Fameg/bistro-1/bistro_1_a-9907-2_1.jpg`,
        zdjecia: ["bistro_1_a-9907-2_1-1_1.jpg","bistro_1_a-9907-2_1.jpg","bistro_1_a-9907-2_2.jpg","bistro_1_a-9907-2_3_1.jpg","bistro_1_a-9907-2_4_2.jpg"].map(f=>`${BASE}/4_Fameg/bistro-1/${f}`) },
      { slug: "cleo", nazwa: "Cleo", okladka: `${BASE}/4_Fameg/cleo/cleo_a-1602_1_1.jpg`,
        zdjecia: ["cleo_a-1602_1_1.jpg","cleo_a-1602_2_1.jpg"].map(f=>`${BASE}/4_Fameg/cleo/${f}`) },
      { slug: "cleo-5", nazwa: "Cleo 5", okladka: `${BASE}/4_Fameg/cleo-5/cleo_a-1605_1.jpg`,
        zdjecia: ["cleo_a-1605_1-1_2.jpg","cleo_a-1605_1.jpg","cleo_a-1605_2.jpg","cleo_a-1605_3_2.jpg","cleo_a-1605_4_1.jpg"].map(f=>`${BASE}/4_Fameg/cleo-5/${f}`) },
      { slug: "finn", nazwa: "Finn", okladka: `${BASE}/4_Fameg/arch/2021_08_szum_i_rosa_1885.jpg`,
        zdjecia: ["finn_a-1609_tap_01_2.jpg","finn_a-1609_tap_02_2.jpg","finn_a-1609_tap_03_2.jpg","finn_a-1609_tap_04.jpg","finn_a-1609_tap_l.jpg","finn_bst-1609_1_61_l.jpg","finn_bst-1609_1_tw_l.jpg"].map(f=>`${BASE}/4_Fameg/finn/${f}`) },
      { slug: "nord", nazwa: "Nord A-2320", okladka: `${BASE}/4_Fameg/nord-a-2320/nord_a-2320_tw_01_2.jpg`,
        zdjecia: ["nord-a-2320_tw_02_1.jpg","nord_a-2320_tw_01_2.jpg","nord_a-2320_tw_l_1.jpg","nord_bst-2320_tw.jpg"].map(f=>`${BASE}/4_Fameg/nord-a-2320/${f}`) },
      { slug: "riso", nazwa: "Riso BM-2301", okladka: `${BASE}/4_Fameg/riso-bm-2301/riso_b-2301_01_1.jpg`,
        zdjecia: ["riso_b-2301_01_1.jpg","riso_b-2301_02.jpg","riso_b-2301_l.jpg","riso_bstm-2301_61_l.jpg","riso_bstm-2301_tw_l.jpg"].map(f=>`${BASE}/4_Fameg/riso-bm-2301/${f}`) },
    ],
  },
  {
    slug: "manufaktura-jasienica",
    nazwa: "Manufaktura Jasienica",
    opis: "Stoły z litego drewna dębowego — naturalne piękno i trwałość.",
    okladka: `${BASE}/5_Manufaktura_Jasienica/falcon/MMJ-Falcon-stol-drewniany-debowy-rozkladany.png`,
    kolekcje: [
      { slug: "falcon", nazwa: "Falcon", okladka: `${BASE}/5_Manufaktura_Jasienica/falcon/MMJ-Falcon-stol-drewniany-debowy-rozkladany.png`,
        zdjecia: ["MMJ-Falcon-stol-drewniany-debowy-rozkladany.png","MMJ-Falcon-stol-drewniany-debowy-rozkladany_2.png"].map(f=>`${BASE}/5_Manufaktura_Jasienica/falcon/${f}`) },
      { slug: "loom", nazwa: "Loom", okladka: `${BASE}/5_Manufaktura_Jasienica/loom/MMJ-Loom-stol-drewniany-debowy-rozkladany_3.png`,
        zdjecia: ["MMJ-Loom-stol-drewniany-debowy-rozkladany_3.png","MMJ-Loom-stol-drewniany-debowy-rozkladany_4.png"].map(f=>`${BASE}/5_Manufaktura_Jasienica/loom/${f}`) },
      { slug: "quadro", nazwa: "Quadro", okladka: `${BASE}/5_Manufaktura_Jasienica/quadro/MMJ_A_Quadro_2.png`,
        zdjecia: ["MMJ_A_Quadro_2.png","MMJ_A_Quadro_4.png"].map(f=>`${BASE}/5_Manufaktura_Jasienica/quadro/${f}`) },
      { slug: "a-scudo-ii", nazwa: "A-Scudo II", okladka: `${BASE}/5_Manufaktura_Jasienica/a-scudo-ii/MMJ_A-SCUDO_2_4.jpg`,
        zdjecia: [`${BASE}/5_Manufaktura_Jasienica/a-scudo-ii/MMJ_A-SCUDO_2_4.jpg`] },
    ],
  },
  {
    slug: "paged",
    nazwa: "Paged",
    opis: "Nowoczesne krzesła o wyjątkowym wzornictwie.",
    okladka: `${BASE}/6_Paged/dot-a-dot/Paged_DOT_70mm_42748.png`,
    kolekcje: [
      { slug: "dot-a-dot", nazwa: "Dot A-Dot", okladka: `${BASE}/6_Paged/dot-a-dot/Paged_DOT_70mm_42748.png`,
        zdjecia: [`${BASE}/6_Paged/dot-a-dot/Paged_DOT_70mm_42748.png`] },
    ],
  },
  {
    slug: "sweetsit",
    nazwa: "Sweet Sit",
    opis: "Narożniki i sofy z charakterem — komfort i styl do każdego wnętrza.",
    okladka: `${BASE}/7_SweetSit/naroznik-cloud/cloud.jpg`,
    kolekcje: [
      { slug: "naroznik-bergen", nazwa: "Bergen", okladka: `${BASE}/7_SweetSit/naroznik-bergen/6367-Bergen.jpg`,
        zdjecia: ["6367-Bergen.jpg","6369-Bergen.jpg","6371-Bergen.jpg","6373-Bergen.jpg","6379-Bergen.jpg","6380-Bergen.jpg","6382-Bergen.jpg","6385-Bergen.jpg"].map(f=>`${BASE}/7_SweetSit/naroznik-bergen/${f}`) },
      { slug: "naroznik-cloud", nazwa: "Cloud", okladka: `${BASE}/7_SweetSit/naroznik-cloud/cloud.jpg`,
        zdjecia: ["Cloud-2-Puente-33-scaled.jpg","Cloud-3-Puente-33-scaled.jpg","Cloud-4-Puente-33-scaled.jpg","Cloud-5-Puente-33-scaled.jpg","Cloud-6-Puente-33-scaled.jpg","cloud.jpg"].map(f=>`${BASE}/7_SweetSit/naroznik-cloud/${f}`) },
      { slug: "naroznik-comfy", nazwa: "Comfy", okladka: `${BASE}/7_SweetSit/naroznik-comfy/comfy.jpg`,
        zdjecia: ["Comfy-1-scaled.jpg","Comfy-2-scaled.jpg","Comfy-3-scaled.jpg","Comfy-4-scaled.jpg","Comfy-5-scaled.jpg","comfy.jpg"].map(f=>`${BASE}/7_SweetSit/naroznik-comfy/${f}`) },
      { slug: "naroznik-dream", nazwa: "Dream", okladka: `${BASE}/7_SweetSit/naroznik-dream/dream.jpg`,
        zdjecia: ["Dream-1-scaled.jpg","Dream-2-scaled.jpg","Dream-3-scaled.jpg","Dream-4-scaled.jpg","Dream-5-scaled.jpg","Dream-6-scaled.jpg","dream.jpg"].map(f=>`${BASE}/7_SweetSit/naroznik-dream/${f}`) },
      { slug: "sofa-ema", nazwa: "Ema", okladka: `${BASE}/7_SweetSit/sofa-ema/ema.jpg`,
        zdjecia: ["5384-Ema-Enjoy-19.jpg","ema.jpg","sweet_sit_sofa_ema_1.jpg","sweet_sit_sofa_ema_2.jpg","sweet_sit_sofa_ema_3.jpg","swet_sit_naroznik_ema-6-2.jpg","swet_sit_naroznik_ema-7-2.jpg"].map(f=>`${BASE}/7_SweetSit/sofa-ema/${f}`) },
    ],
  },
  {
    slug: "gala-collezione",
    nazwa: "Gala Collezione",
    opis: "Systemy modułowe i sofy najwyższej klasy — włoski styl.",
    okladka: `${BASE}/8_Gala_Collezione/system-modulowy-karato/karato.jpg`,
    kolekcje: [
      { slug: "ombra", nazwa: "Ombra", okladka: `${BASE}/8_Gala_Collezione/ombra/5.png`,
        zdjecia: ["5.png","10.png","11-1.png","13-1.png","14-1.png","15-1.png","16-1.png","17-1.png","18-1.png","19-1.png","20-1.png"].map(f=>`${BASE}/8_Gala_Collezione/ombra/${f}`) },
      { slug: "sofa-monday", nazwa: "Monday", okladka: `${BASE}/8_Gala_Collezione/sofa-monday/monday.jpg`,
        zdjecia: ["monday.jpg","gala_collezione_sofa_monday_1.jpg","gala_collezione_sofa_monday_2.jpg","gala_collezione_sofa_monday_3.jpg","gala_collezione_sofa_monday_4.jpg","gala_collezione_sofa_monday_5.jpg","gala_collezione_sofa_monday_6.jpg","gala_collezione_sofa_monday_8.jpg","gala_collezione_sofa_monday_9.jpg","gala_collezione_sofa_monday_10.jpg"].map(f=>`${BASE}/8_Gala_Collezione/sofa-monday/${f}`) },
      { slug: "sofa-voss", nazwa: "Voss", okladka: `${BASE}/8_Gala_Collezione/sofa-voss/voss.jpg`,
        zdjecia: ["voss.jpg","gala_collezione_sofa_dwuosobowa_voss_4.jpg","gala_collezione_sofa_dwuosobowa_voss_5.jpg","gala_collezione_sofa_dwuosobowa_voss_6.jpg","gala_collezione_sofa_trzyosobowa_voss_1.jpg","gala_collezione_sofa_trzyosobowa_voss_3.jpg","gala_collezione_sofa_trzyosobowa_voss_4.jpg","gala_collezione_sofa_trzyosobowa_voss_5.jpg"].map(f=>`${BASE}/8_Gala_Collezione/sofa-voss/${f}`) },
      { slug: "aria", nazwa: "Aria", okladka: `${BASE}/8_Gala_Collezione/system-modulowy-aria/ARIA-1-scaled.jpg`,
        zdjecia: ["ARIA-1-scaled.jpg","ARIA-2-scaled.jpg","ARIA-3-scaled.jpg","ARIA-4-scaled.jpg","ARIA-5-scaled.jpg"].map(f=>`${BASE}/8_Gala_Collezione/system-modulowy-aria/${f}`) },
      { slug: "karato", nazwa: "Karato", okladka: `${BASE}/8_Gala_Collezione/system-modulowy-karato/karato.jpg`,
        zdjecia: ["karato.jpg","system_modulowy_karato_1.jpg","system_modulowy_karato_2.jpg","system_modulowy_karato_3.jpg"].map(f=>`${BASE}/8_Gala_Collezione/system-modulowy-karato/${f}`) },
      { slug: "loggia", nazwa: "Loggia", okladka: `${BASE}/8_Gala_Collezione/system-modulowy-loggia/system_modulowy_loggia_gala_collezione_01.jpg`,
        zdjecia: Array.from({length:9},(_,i)=>`${BASE}/8_Gala_Collezione/system-modulowy-loggia/system_modulowy_loggia_gala_collezione_0${i+1}.jpg`) },
      { slug: "look", nazwa: "Look", okladka: `${BASE}/8_Gala_Collezione/system-modulowy-look/gala_collezione_system_modulowy_look_1.jpg`,
        zdjecia: ["gala_collezione_system_modulowy_look_1.jpg","gala_collezione_system_modulowy_look_2.jpg","gala_collezione_system_modulowy_look_5.jpg","gala_collezione_system_modulowy_look_6.jpg","gala_collezione_system_modulowy_look_8.jpg","gala_collezione_system_modulowy_look_12.jpg","gala_collezione_system_modulowy_look_15.jpg","gala_collezione_system_modulowy_look_16.jpg"].map(f=>`${BASE}/8_Gala_Collezione/system-modulowy-look/${f}`) },
      { slug: "volta", nazwa: "Volta", okladka: `${BASE}/8_Gala_Collezione/system-modulowy-volta/gala_collezione_sytstem_modulowy_volta-1.jpg`,
        zdjecia: ["1","2","3","4","5","7","8","9","10"].map(n=>`${BASE}/8_Gala_Collezione/system-modulowy-volta/gala_collezione_sytstem_modulowy_volta-${n}.jpg`) },
    ],
  },
];

function KolekcjePage() {
  useSEO({
    title: "Kolekcje — Prestige Meble Toruń",
    description: "Odkryj nasze kolekcje mebli premium: Krysiak, Unimebel, Zakor, Fameg, Gala Collezione, Sweet Sit i więcej. Salon meblowy Toruń.",
  });

  const [selectedProducent, setSelectedProducent] = useState<string | null>(null);
  const [selectedKolekcja, setSelectedKolekcja] = useState<string | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const CONTAIN_SLUGS = ["krysiak", "zakor", "fameg", "manufaktura-jasienica", "paged"];

  const producent = selectedProducent
    ? producenci.find((p) => p.slug === selectedProducent) ?? null
    : null;

  const kolekcja =
    producent && selectedKolekcja
      ? producent.kolekcje.find((k) => k.slug === selectedKolekcja) ?? null
      : null;

  // WIDOK 3: Galeria zdjęć kolekcji
  if (producent && kolekcja) {
    const useContain = CONTAIN_SLUGS.includes(producent.slug);
    return (
      <>
        {/* LIGHTBOX */}
        {lightboxSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold leading-none hover:text-gold transition-colors"
              onClick={() => setLightboxSrc(null)}
            >
              ×
            </button>
            <img
              src={lightboxSrc}
              alt="Powiększone zdjęcie"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <PageHero title={kolekcja.nazwa} subtitle={`Kolekcja ${producent.nazwa}`}>
          <Breadcrumb items={[
            { label: "Strona główna", to: "/" },
            { label: "Kolekcje", to: "/kolekcje" },
            { label: producent.nazwa },
            { label: kolekcja.nazwa },
          ]} />
        </PageHero>
        <section className="py-16 px-4 bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <Button variant="secondary" onClick={() => setSelectedKolekcja(null)}>
                ← Powrót do {producent.nazwa}
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {kolekcja.zdjecia.map((src, i) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <div
                    className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                    onClick={() => setLightboxSrc(src)}
                  >
                    <div className={useContain ? "flex items-center justify-center bg-white p-4 h-72" : "h-72 overflow-hidden"}>
                      <img
                        src={src}
                        alt={`${kolekcja.nazwa} ${i + 1}`}
                        className={useContain
                          ? "max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                          : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        }
                        loading="lazy"
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/kontakt">Zapytaj o kolekcję {kolekcja.nazwa}</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  // WIDOK 2: Lista kolekcji producenta
  if (producent) {
    return (
      <>
        <PageHero title={producent.nazwa} subtitle={producent.opis}>
          <Breadcrumb items={[
            { label: "Strona główna", to: "/" },
            { label: "Kolekcje", to: "/kolekcje" },
            { label: producent.nazwa },
          ]} />
        </PageHero>
        <section className="py-16 px-4 bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <Button variant="secondary" onClick={() => setSelectedProducent(null)}>
                ← Powrót do producentów
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {producent.kolekcje.map((k, i) => (
                <FadeIn key={k.slug} delay={i * 0.06}>
                  <div
                    className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedKolekcja(k.slug)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={k.okladka}
                        alt={k.nazwa}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-xl font-bold text-navy">{k.nazwa}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{k.zdjecia.length} zdjęć</p>
                      <Button variant="secondary" size="default" className="mt-4">
                        Zobacz kolekcję
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // WIDOK 1: Lista producentów
  return (
    <>
      <PageHero
        title="Nasze Kolekcje"
        subtitle="Odkryj wyjątkowe zestawy wypoczynkowe najlepszych producentów"
      >
        <Breadcrumb items={[{ label: "Strona główna", to: "/" }, { label: "Kolekcje" }]} />
      </PageHero>
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {producenci.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <div
                  className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProducent(p.slug)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.okladka}
                      alt={p.nazwa}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-gold/15 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {p.kolekcje.length} kolekcji
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-navy mt-3">{p.nazwa}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{p.opis}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button variant="secondary" size="default" onClick={(e) => { e.stopPropagation(); setSelectedProducent(p.slug); }}>
                        Zobacz kolekcje
                      </Button>
                      <Button variant="gold" size="default" asChild onClick={(e) => e.stopPropagation()}>
                        <Link to="/kontakt">Zapytaj o produkt</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-16 text-center bg-navy rounded-2xl p-10">
              <h3 className="font-heading text-2xl font-bold text-cream">Nie znalazłeś czegoś dla siebie?</h3>
              <p className="mt-2 text-cream/60">Skontaktuj się z nami — pomożemy Ci znaleźć idealne meble!</p>
              <Button variant="gold" size="lg" className="mt-6" asChild>
                <Link to="/kontakt">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
