# TRENDS — Site e-commerce (Phase 1)

Site vitrine de la marque **TRENDS** (tech, mode & lifestyle).
Cette première phase pose **la base visuelle et technique** : identité de marque,
homepage fidèle à la maquette, navigation complète, pages préparées et une
architecture prête à accueillir le catalogue. **Aucun produit** n'est intégré
pour le moment (c'est volontaire).

---

## 🚀 Lancer le site en local

Pré-requis : [Node.js](https://nodejs.org) version 20 ou plus.

```bash
npm install     # à faire une seule fois (installe les dépendances)
npm run dev     # démarre le site en mode développement
```

Ouvre ensuite **http://localhost:3000** dans ton navigateur.
Le site se recharge automatiquement quand tu modifies un fichier.

Autres commandes :

```bash
npm run build   # construit la version de production (vérifie aussi le code)
npm run start   # démarre la version de production (après un build)
npm run lint    # vérifie la qualité du code
```

---

## 🧱 Stack technique

| Outil | Rôle |
|---|---|
| **Next.js 16** (App Router) | Framework du site (pages, routage, performance, SEO) |
| **React 19** + **TypeScript** | Interface et sécurité du code |
| **Tailwind CSS 4** | Design system (couleurs, espacements, styles) |
| **lucide-react** | Icônes |

Le code est propre, typé et organisé en composants réutilisables.

---

## 📁 Structure du projet

```
app/                      Les pages du site (une route = un dossier)
  page.tsx                → Accueil (homepage)
  shop/ nouveautes/ ...   → Les autres pages
  categories/[slug]/      → Page dynamique d'une catégorie
  produits/[slug]/        → Fiche produit (template, prêt pour le catalogue)
  layout.tsx              → Ossature commune (header, footer, polices, SEO)
  globals.css             → ⭐ LE DESIGN SYSTEM (couleurs, typo, styles de base)

components/
  brand/                  Logo
  layout/                 Header (navigation), Footer, barre d'annonce
  home/                   Sections de la homepage (Hero, catégories…)
  commerce/               Carte produit, grille, fiche produit (prêts, non remplis)
  ui/                     Briques réutilisables (bouton, conteneur, état vide…)

lib/
  catalog.ts              ⭐ Accès aux données produits (vide aujourd'hui)
  nav.ts                  Toutes les routes et menus (source unique)
  site.ts                 Infos de la marque (nom, slogan, annonce…)
  utils.ts                Fonctions utilitaires (prix, classes CSS)

data/
  products.ts             ⭐ Catalogue produits — VIDE (à remplir plus tard)
  categories.ts           Les 4 catégories de la marque
  collections.ts          Collections — vide

types/catalog.ts          La « forme » des données produits (prête pour le futur)
public/brand/             Images de marque (logo, mannequin du hero)
design/reference/         Ta maquette d'origine + logo extrait (référence)
```

---

## 🎨 Identité visuelle (design system)

Tout est centralisé dans **`app/globals.css`**. Les couleurs sont tirées
directement de ta maquette :

| Couleur | Code | Usage |
|---|---|---|
| Fuchsia | `#E9035A` | Couleur signature (logo, boutons, accents) |
| Crème | `#F5E7DE` | Fond principal |
| Encre (noir) | `#0E0E0E` | Textes et contrastes |

**Polices** : `Archivo` (gros titres / wordmark) et `Inter` (textes).
Pour changer une police, modifie `app/layout.tsx` (en haut du fichier).

---

## 🖼️ Remplacer le logo et les images

### Le logo
Aujourd'hui le logo **TRENDS®** est reconstitué typographiquement (net, responsive).
Pour utiliser **ton fichier officiel** (idéalement un `.svg`) :

1. Dépose ton fichier dans `public/brand/` (ex. `logo.svg`).
2. Ouvre `components/brand/Logo.tsx` et suis le commentaire en haut du fichier
   (il suffit de remplacer un bloc par une balise image). Tout le site utilise
   ce composant : le changement se répercute partout automatiquement.

### La photo du mannequin (hero)
La photo actuelle a été **détourée depuis ta maquette** (placeholder de qualité).
Pour la remplacer par la version officielle :

1. Prépare un **PNG transparent** (fond détouré) du mannequin.
2. Remplace le fichier `public/brand/hero-model.webp`
   (ou dépose `hero-model.png` et change l'import dans `components/home/Hero.tsx`).

> 💡 Pour un rendu optimal, fournis un visuel haute résolution (≥ 1400 px de large).

---

## 📦 Ajouter le catalogue plus tard

L'architecture est faite pour que **tu n'aies rien à reconstruire**.
Quand les vrais produits seront prêts :

1. Ajoute les images dans `public/products/<nom-du-produit>/`.
2. Ajoute un objet produit dans **`data/products.ts`** (la structure complète
   est décrite dans `types/catalog.ts` : nom, prix, images, catégorie, variantes,
   stock, fournisseur, référence fournisseur, statut de publication…).
3. Mets `status: "published"` pour qu'il apparaisse.

Les produits apparaîtront **automatiquement** dans le Shop, les Nouveautés, les
Bestsellers, les Catégories et la Recherche — aucune autre modification requise.

---

## ✅ Ce qui est fait dans cette phase

- Identité visuelle complète + design system
- Homepage fidèle à la maquette (desktop, tablette, mobile)
- Navigation complète + menu mobile + recherche + panier (compteur à 0)
- Toutes les pages préparées avec des **états vides** soignés
- Architecture de données évolutive (catalogue vide, prêt à remplir)
- SEO de base (titres, metadata, sitemap, robots), accessibilité, responsive

## ⏳ Volontairement **pas** inclus (phases suivantes)

- Aucun produit, prix, avis ou stock fictif
- Pas de paiement, de fournisseur ni de dropshipping connectés
- Pas de newsletter réelle ni de collecte de données personnelles
- Aucune promesse commerciale non confirmée (livraison, retours, promos)

---

_Site développé comme base évolutive. Le catalogue et les fonctionnalités
commerciales seront ajoutés dans les prochaines phases._
